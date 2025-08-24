use ic_cdk::{query, update};
use candid::{CandidType, Deserialize};
use std::cell::RefCell;

// Listing struct and safe persistent storage
#[derive(CandidType, Deserialize, Clone)]
pub struct Listing {
    pub id: u32,
    pub name: String,
    pub energy: u32,
    pub price: f32,
}

// Use thread_local! for safe, mutable canister state
thread_local! {
    static LISTINGS: RefCell<Vec<Listing>> = RefCell::new(vec![]);
}

// Simple greeting endpoint
#[query]
fn greet(name: String) -> String {
    format!("Hello, {}! Welcome to the Energy Marketplace.", name)
}

// Return all listings
#[query]
fn get_listings() -> Vec<Listing> {
    LISTINGS.with(|l| l.borrow().clone())
}

// Buy energy from a listing (demo only)
#[update]
fn buy_energy(listing_id: u64, kwh: u64) -> String {
    let listing_id = listing_id as u32;
    let kwh = kwh as u32;
    LISTINGS.with(|listings| {
        let mut listings = listings.borrow_mut();
        if let Some(l) = listings.iter_mut().find(|l| l.id == listing_id) {
            if l.energy < kwh {
                return String::from("Not enough energy");
            }
            l.energy -= kwh;
            return format!("Purchased {} kWh from {}", kwh, l.name);
        } else {
            return String::from("Listing not found");
        }
    })
}

// Call this ONCE to initialize demo listings after deploying
#[update]
fn init_listings() {
    let demo_listings = vec![
        Listing { id: 1, name: "GreenPower Co.".to_string(), energy: 120, price: 0.15 },
        Listing { id: 2, name: "Solar Hive".to_string(), energy: 90, price: 0.12 },
        Listing { id: 3, name: "WindyGrid".to_string(), energy: 150, price: 0.18 },
    ];
    LISTINGS.with(|listings| {
        *listings.borrow_mut() = demo_listings;
    });
}
