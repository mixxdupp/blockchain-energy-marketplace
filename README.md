# ⚡ Energy Marketplace

A decentralized energy trading platform built with React (frontend) and Rust (backend) on the Internet Computer Protocol (ICP) blockchain.

***

## 🌟 Features

- **Modern React UI:** Responsive, animated, and easy to extend.
- **Rust Canister Backend:** Secure smart contracts on Internet Computer.
- **Fake Data & Mocks:** Easy testing and extension, switch to real backend when ready.
- **Wallet Simulation:** Wallet context for easy UI testing.

***

## 📁 Project Structure

```
energy-marketplace-main/
│
├── src/                # React frontend source code
├── backend/            # Rust (canister) backend code
├── dfx.json            # DFX project config for ICP
├── package.json        # Node.js frontend config
└── README.md           # This file
```

***

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Rust](https://www.rust-lang.org/tools/install)
- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/sdk-intro) (ICP)
- `npm` (comes with Node.js)

### Local Development 

```sh
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
```

***

## 🖥️ Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser after running the above scripts.
- The app uses **mock data** by default but is ready to connect to a real canister.

***

## 🛠️ Connect to Your Deployed Canister

- After running `dfx deploy`, copy your backend canister ID from the output (format: `aaaaa-bbbbb-cccc...-cai`).
- Update your frontend `.env` or directly in `src/services/backend.js` as shown in comments.

**Example:**
```env
VITE_CANISTER_ID=your_canister_id_here
VITE_BACKEND_URL=http://localhost:4943
```

***

## 📝 Updating the Project

1. Make any code or documentation changes.
2. Run:
    ```sh
    git add .
    git commit -m "Describe your change here"
    git push
    ```

***

## 📢 Troubleshooting

- **503 canister error:** Make sure the backend is running (`dfx start`) and deployed (`dfx deploy`), then refresh your browser.
- **Frontend errors:** Ensure Vite is installed (`vite` in `devDependencies`) and run `npm install` again if needed.

***

## 🌎 Deployment to GitHub

1. Initialize git (if not already):
   ```sh
   git init
   ```
2. Add all files:
   ```sh
   git add .
   git commit -m "Initial commit"
   ```
3. Create a new repository on GitHub and follow its instructions:
   ```sh
   git remote add origin https://github.com/YOUR_USERNAME/energy-marketplace.git
   git branch -M main
   git push -u origin main
   ```

***

## 💡 Contributing

Pull requests are welcome!  
See CONTRIBUTING.md (if present) for details.

***

## 📚 References

- [Internet Computer Docs](https://internetcomputer.org/docs/current/developer-docs/)
- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/sdk-intro)
- [React](https://react.dev/)
- [Rust](https://www.rust-lang.org/)

***

**Happy hacking! 🚀**


[1](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/1fb67075-0d89-413f-90ba-ba79e1f84b97/README.md)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/ad324295-1bc7-43ba-87ef-d09bbfbc5be9/eslint.config.js)
[3](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/ed9a452f-5d27-4435-8509-c207ba24b190/index.html)
[4](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/d3bd9c61-49d6-4e46-a9a3-6cbbdaeb40b6/package-lock.json)
[5](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/6abd9e93-5c4e-4880-8c22-0935dcd47fe5/package.json)
[6](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/04015c35-abf9-4278-80b1-151956952e63/postcss.config.js)
[7](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/1a4d90f8-3c52-4a44-b3d7-cbab8c47f19d/tailwind.config.js)
[8](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/b1277b43-c8d3-4924-9020-9b58ba651ba7/vite.config.js)
[9](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/77069442/0562a1aa-7000-4bf2-ba4d-59ac7d3bde6e/vite.jpg)
[10](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/40605bc5-826e-448e-a9fc-03933e5482b9/App.css)
[11](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/fed7e4cc-cb70-49de-8b24-9bded3a1d9b4/App.jsx)
[12](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/8840418a-d52f-4560-8b00-b453b3182349/App.css)
[13](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/f6aca59b-4b16-4a7e-ba19-433a5d167b16/BackgroundFX.jsx)
[14](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/46464ff0-f57c-4baf-bdc8-0d337c82cb89/BuyModal.jsx)
[15](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/8d877b93-d8cb-429f-8176-1a137bc516f7/Footer.jsx)
[16](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/4869d266-142a-40e3-a07f-ea160ef0011d/ListingCard.jsx)
[17](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/eb8ee015-2c9b-4f2b-bc65-4d08863cdf65/Navbar.jsx)
[18](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/9de28a7b-268b-4b5e-8b1d-07e2f95a5081/index.css)
[19](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/685e4a7e-4a5a-4b0a-bc62-e03eeb67af17/main.jsx)
[20](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/06781e4d-29fb-421d-bb65-8ba7c17d7ffb/About.jsx)
[21](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/3ce1de87-57bb-4b2b-94ec-d8158258c3ca/Home.jsx)
[22](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/c7b8a56e-9a6a-4ada-88ad-166afdbeff70/Marketplace.jsx)
[23](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/fe8de61b-0081-4543-8bf1-476f1536e141/Wallet.jsx)
[24](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/b83b0cb6-3743-48e2-9fa2-1cb2b1c8d0ea/backend.js)
[25](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/77069442/dd9dd057-d685-4b28-b129-c117060132fd/WalletContext.jsx)
[26](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/77069442/87a25c16-2c56-4cd8-bd9c-bb4bb06e2667/image.jpg)
[27](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/77069442/2e222d4c-0cf9-4b8e-b9a5-ba41086da57f/image.jpg)
