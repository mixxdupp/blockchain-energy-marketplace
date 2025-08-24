⚡ Energy Marketplace
A decentralized energy trading platform built with React (frontend) and Rust (backend) on the Internet Computer Protocol (ICP) blockchain.
 
🌟 Features
•	Modern React UI: Responsive, animated, and easy to extend.
•	Rust Canister Backend: Secure smart contracts on Internet Computer.
•	Fake Data & Mocks: Easy testing and extension, switch to real backend when ready.
•	Wallet Simulation: Wallet context for easy UI testing.
 
📁 Project Structure
energy-marketplace-main/
│
├── src/                # React frontend source code
├── backend/            # Rust (canister) backend code
├── dfx.json            # DFX project config for ICP
├── package.json        # Node.js frontend config
└── README.md           # This file

 
🚀 Quick Start
Prerequisites
•	Node.js (v18+ recommended)
•	Rust
•	DFX SDK (ICP)
•	npm (comes with Node.js)
Local Development
# Clone your repo (if needed)
git clone https://github.com/YOUR_USERNAME/energy-marketplace.git
cd energy-marketplace

# 1️⃣ Install dependencies (frontend)
npm install

# 2️⃣ Start local ICP blockchain (backend)
dfx start --background

# 3️⃣ Deploy Rust canister (backend)
dfx deploy

# (Optional, only if using canister methods that need init)
# dfx canister call backend init_listings

# 4️⃣ Start the frontend
npm run dev

# Visit http://localhost:5173

 
🖥️ Usage
•	Open http://localhost:5173 in your browser after running the above scripts.
•	The app uses mock data by default but is ready to connect to a real canister.
 
🛠️ Connect to Your Deployed Canister
•	After running dfx deploy, copy your backend canister ID from the output (format: aaaaa-bbbbb-cccc...-cai).
•	Update your frontend .env or directly in src/services/backend.js as shown in comments.
Example:
VITE_CANISTER_ID=your_canister_id_here
VITE_BACKEND_URL=http://localhost:4943

 
📝 Updating the Project
1.	Make any code or documentation changes.
2.	Run:
git add .
git commit -m "Describe your change here"
git push

 
📢 Troubleshooting
•	503 canister error: Make sure the backend is running (dfx start) and deployed (dfx deploy), then refresh your browser.
•	Frontend errors: Ensure Vite is installed (vite in devDependencies) and run npm install again if needed.
 
🌎 Deployment to GitHub
1.	Initialize git (if not already):
git init

2.	Add all files:
git add .
git commit -m "Initial commit"

3.	Create a new repository on GitHub and follow its instructions:
git remote add origin https://github.com/YOUR_USERNAME/energy-marketplace.git
git branch -M main
git push -u origin main

 
💡 Contributing
Pull requests are welcome!
See CONTRIBUTING.md (if present) for details.
 
📚 References
•	Internet Computer Docs
•	DFX SDK
•	React
•	Rust
 
Happy hacking! 🚀
