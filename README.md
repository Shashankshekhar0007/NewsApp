# 📰 NewsRoom - React News App

NewsRoom is a dynamic React-based web application that displays the latest headlines using the [NewsAPI.org](https://newsapi.org) service. It supports infinite scrolling, categorized news, and country-based filtering.

## 🌟 Features

- 🗞 Top Headlines fetched from NewsAPI
- 🔄 Infinite Scroll Pagination
- 📂 Category-wise News (e.g., Technology, Health, Sports)
- 🌐 Country-based filtering
- 🖼 News Cards with images, headlines, and links
- 🚥 Progress Bar on API Fetch
- 🔘 Navigation Buttons (Prev/Next as fallback)

## 📦 Tech Stack

- React.js
- Bootstrap 5 (for UI)
- NewsAPI (external data source)
- React Infinite Scroll Component

## 📸 Screenshots

![Home Page](./screenshots/home.png)
![Loading and Infinite Scroll](./screenshots/top-loadingbar.png)

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
```bash
git clone https://github.com/yourusername/newsroom-react.git
cd newsroom-react
npm install
```
Environment Setup
Create a .env file in the root directory:
```REACT_APP_NEWS_API_KEY=your_newsapi_key_here```
Run the App
```npm start```
App runs on http://localhost:3000.
