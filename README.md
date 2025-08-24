# ⚡ Energy Marketplace
A decentralized energy trading platform built with React (frontend) and Rust (backend) on the Internet Computer Protocol (ICP) blockchain.

---

## ℹ️ What is Energy Marketplace?

**Energy Marketplace** is a web application that enables users to buy, sell, and manage energy credits or tokens in a decentralized way.  
- **Frontend:** Built with React, providing a modern, responsive user interface for trading, wallet management, and marketplace browsing.
- **Backend:** Powered by Rust smart contracts (canisters) deployed on the Internet Computer Protocol (ICP), ensuring secure, transparent, and tamper-proof transactions.
- **Goal:** Empower communities and individuals to participate in peer-to-peer energy trading, making energy markets more open, efficient, and community-driven.

---

## 📁 Project Structure

```
energy-marketplace/
│
├── src/                # React frontend source code
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── state/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── backend/            # Rust canister code (ICP backend)
│   ├── src/
│   ├── Cargo.toml
│   └── ...
├── dfx.json            # DFX project config
├── package.json        # Node.js frontend config
└── README.md           # This file
```

---

## 🛠️ Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (comes with Node.js)
- **Rust** (for backend, [install here](https://www.rust-lang.org/tools/install))
- **DFX SDK** (ICP development tools)

---

## 🚀 Step 1: Install DFX (ICP SDK)

Open your terminal and run:

```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

- This will install `dfx` (the Internet Computer SDK) globally.
- After install, restart your terminal and run:
  ```bash
  dfx --version
  ```
  You should see a version number.

---

## 🚀 Step 2: Set Up the Rust Backend Canister

1. **Navigate to your project root** (where `dfx.json` is).
2. **Check the backend folder** (usually `backend/` or `canisters/`).
3. **Open `backend/src/lib.rs`** — this is your main Rust canister file.

### Example Rust Canister (`backend/src/lib.rs`)

```rust
use ic_cdk::query;

#[query]
fn greet(name: String) -> String {
    format!("Hello, {}! Welcome to the Energy Marketplace.", name)
}
```

- This is a simple query function. You can add more functions for your business logic.

### Example `Cargo.toml` (in `backend/`)

```toml
[package]
name = "backend"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
ic-cdk = "0.13.1"
```

---

## 🚀 Step 3: Start the Local ICP Blockchain

In your project root, run:

```bash
dfx start --background
```

- This starts a local ICP replica for development.

---

## 🚀 Step 4: Deploy the Rust Canister

1. **Build and deploy the canister:**

   ```bash
   dfx deploy
   ```

2. **Get your canister ID:**

   After deploy, you’ll see output like:
   ```
   Deploying canisters.
   backend: canister id: r7inp-6aaaa-aaaaa-aaabq-cai
   ```

   - Copy this canister ID. You’ll need it for the frontend.

---

## 🚀 Step 5: Run the React Frontend

1. **Install frontend dependencies:**

   ```bash
   npm install
   ```

2. **Start the frontend:**

   ```bash
   npm run dev
   ```

   - The app will run at [http://localhost:5173](http://localhost:5173) or similar.

---

## 🚀 Step 6: Connect Frontend to Rust Backend

### 1. **Install DFINITY Agent in Frontend**

```bash
npm install @dfinity/agent
```

### 2. **Generate JS Bindings for Your Canister**

- After deploying, DFX generates JS bindings in the `./.dfx/local/canisters/backend/` folder.
- You’ll see files like `backend.js` and `backend.did.js`.

### 3. **Use the Canister in Your Frontend**

**Example: `src/services/backend.js`**

```js
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as backend_idl } from "../../../.dfx/local/canisters/backend/backend.js";

const canisterId = "YOUR_CANISTER_ID_HERE"; // Replace with your deployed canister ID

const agent = new HttpAgent({ host: "http://localhost:4943" }); // Local ICP replica
const backend = Actor.createActor(backend_idl, { agent, canisterId });

export default backend;
```

**Example usage in a React component:**

```js
import backend from "../services/backend";

async function greetUser(name) {
  const greeting = await backend.greet(name);
  console.log(greeting);
}
```

---

## 📝 .env Example (Optional)

You can use a `.env` file for config:

```
VITE_CANISTER_ID=your_canister_id
VITE_BACKEND_URL=http://localhost:4943
```

Then in your code:

```js
const canisterId = import.meta.env.VITE_CANISTER_ID;
const agent = new HttpAgent({ host: import.meta.env.VITE_BACKEND_URL });
```

---

## 🧑‍💻 Full Local Development Workflow

1. **Start local ICP replica:**  
   `dfx start --background`

2. **Deploy backend canister:**  
   `dfx deploy`

3. **Install frontend dependencies:**  
   `npm install`

4. **Start frontend:**  
   `npm run dev`

5. **Update frontend canister ID:**  
   - Copy the canister ID from deploy output.
   - Paste it in `src/services/backend.js` or your `.env` file.

6. **Test frontend-backend connection:**  
   - Call a backend function from the frontend and check the result.

---

## 🛠️ Troubleshooting

- **Error: "Cannot find module '../../../.dfx/local/canisters/backend/backend.js'"**
  - Make sure you ran `dfx deploy` and the canister built successfully.
- **Error: "AgentError: Failed to fetch"**
  - Make sure `dfx start` is running and your backend is deployed.
- **Frontend not connecting to backend**
  - Double-check canister ID and backend URL.

---

## 🌐 Deploying to ICP Mainnet

1. **Authenticate with your Internet Identity:**
   ```bash
   dfx identity new <your-identity>
   dfx identity use <your-identity>
   ```

2. **Deploy to mainnet:**
   ```bash
   dfx deploy --network ic
   ```

3. **Update frontend with mainnet canister ID and URL:**
   - Use `https://icp0.io` as the host.

---

## 🤝 Team Workflow

- **One teammate runs the backend (Rust/ICP) and shares the canister ID.**
- **Other teammates run the frontend and use the shared canister ID to connect.**
- **All code changes should be committed and pushed to your version control (e.g., GitHub).**

---

## 📚 References

- [DFINITY Docs](https://internetcomputer.org/docs/current/developer-docs/)
- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/sdk-intro)
- [@dfinity/agent](https://www.npmjs.com/package/@dfinity/agent)
- [React](https://react.dev/)
- [Rust](https://www.rust-lang.org/)

---

## 💡 Need Help?

- Open an issue or ask your team lead.
- Check the official DFINITY Discord or forums.

---

# Steps to update your README on GitHub

1. **Commit your local changes:**
   - Open your terminal in the project directory.
   - Run:
     ```bash
     git add README.md
     git commit -m "Update README formatting for GitHub preview"
     ```

2. **Push to your GitHub repository:**
   - If you already have a remote set up, run:
     ```bash
     git push
     ```
   - If you haven't set a remote yet, add it (replace `<your-repo-url>` with your actual repo URL):
     ```bash
     git remote add origin <your-repo-url>
     git push -u origin main
     ```
     *(or use `master` if that's your branch name)*

3. **Check on GitHub:**
   - Go to your repository on GitHub.
   - Click the `README.md` file to see the updated preview.

---

**Happy hacking! 🚀**