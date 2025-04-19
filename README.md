# Calculator App


A cross-platform desktop calculator application featuring:
- **Unified Architecture** (Single port via NGINX reverse proxy)
- **Secure Expression Evaluation** (mathjs instead of eval)
- **Single Executable Deployment** (Electron-builder)

## ✨ Features
- Basic arithmetic (+, -, *, /)
- Parentheses support
- Error handling for invalid expressions

### Technical
- React 18 + Vite frontend
- Express.js backend
- NGINX reverse proxy unification
- Packaged as single EXE (Windows)
- Automatic updates

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- Windows/Linux/macOS
- NGINX (included in build)

## 🛠️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator-app.git

Install dependencies:
cd calculator-app
npm install

Run in development:
npm run dev

Build for production:
npm run build

To create a distributable EXE:
npm run package

To run Production:
npm run start

📂 Project Structure
calculator-app/
├── client/        # React frontend
├── server/        # Express backend
├── build/         # Electron config
└── dist/          # Production builds


