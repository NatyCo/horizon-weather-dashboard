# 🌤️ Horizon Weather - Secure Live Dashboard

A premium, glassmorphic **Real-Time Weather Forecasting Dashboard** built using asynchronous JavaScript architecture. This application processes active global climate metrics from the official **OpenWeatherMap API** while protecting sensitive access tokens using automated cloud deployment workflows.

## 🚀 Key Features

- **Asynchronous Pipeline**: Powered entirely by `async/await` syntax to guarantee non-blocking UI rendering during remote network transactions.
- **Input Security Guard**: Features an integrated text-sanitization pipeline that filters out dangerous script tags (XSS protection) and blocks illegal numbers or punctuation characters.
- **CI/CD Token Injected via GitHub Actions**: Fully secured API deployment workflow. The live environment automatically injects the OpenWeatherMap token during build time, completely masking the secret key from the public repository code.
- **Failsafe Data Routing**: Leverages *optional chaining* (`?.`) and *nullish coalescing* (`??`) structural patterns to completely secure against runtime object drops or empty properties.
- **Glassmorphic UI Engine**: Fluid glass blur overlay styles providing high contrast readability with responsive desktop microscale interaction states and perfect flexbox alignment.

## 🧠 JavaScript Core Concepts Demonstrated

This project is the final capstone for my portfolio, testing core computer science and web mechanics:
1. **Promises & Fetch API**: Operating background worker tasks to pipe streams across remote third-party HTTP database servers (`api.openweathermap.org`).
2. **Asynchronous Error Mitigation**: Wrapping network transaction requests inside strict `try/catch` guard boxes to cleanly output visual feedback alerts instead of crashing.
3. **Defensive Object Interrogation**: Safeguarding nested multi-layered array tree checks (`weather.weather?.[0]`) from throwing runtime `TypeError` exceptions when processing data.

## 🔒 Security & DevOps Workflow (GitHub Secrets)

To protect the OpenWeatherMap access token from public exposure and scanning bots, this repository uses a production-ready DevOps automation workflow:
- The `script.js` uses a static hardcoded token marker (`WEATHER_API_KEY_PLACEHOLDER`).
- A secure repository secret (`WEATHER_API_KEY`) is stored in **GitHub Settings -> Secrets and variables**.
- On every code push, a specialized Linux runner script defined in `.github/workflows/deploy.yml` utilizes the stream editor (`sed`) to safely swap the placeholder with the production token right before hosting the build artifact on **GitHub Pages**.

## 💻 Tech Architecture

- **Visual Layout Structure**: Semantic HTML5 & Flexbox alignment layouts
- **Visual Design System**: Glassmorphic UI with drop-shadow enhancements
- **Asynchronous Logic Layer**: Vanilla JavaScript (ES6 Modules)
- **Data Pipeline Engine**: Real-Time JSON Fetch Integration (OpenWeatherMap API)

## ⚙️ How to Run Locally

If you want to pull this code down and run it on your machine, follow these configurations:

1. **Clone this workspace folder**:
   ```bash
   git clone https://github.com
   ```
2. Open the directory within your local instance of **Visual Studio Code**.
3. Create a local variable or update `const API_KEY` inside `script.js` with your personal token.
4. Launch the application locally using the **Live Server** extension at your default port layout `http://127.0.0.1:5500`.
