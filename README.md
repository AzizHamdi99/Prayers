# 🕌 Prayer Times App

A simple and elegant React web application that displays prayer times based on the selected city. The app shows the five daily prayer times along with a live countdown to the next upcoming prayer, using the [AlAdhan API](https://aladhan.com/) to fetch accurate prayer timings worldwide.

---

## 🚀 Features

- Select your city from a list  
- Fetches prayer times from the AlAdhan API for Fajr, Dhuhr, Asr, Maghrib, and Isha  
- Live countdown timer to the next prayer  
- Responsive and clean UI built with Material UI  

---

## 🧱 Tech Stack

| Layer      | Technology                 |
|------------|----------------------------|
| Frontend   | React.js                   |
| UI Library | Material UI                |
| API        | AlAdhan API (Prayer Times) |
| Language   | JavaScript / JSX           |
| Tools      | npm, Create React App      |

---

## 📸 Screenshots

> _Add screenshots or GIFs showcasing city selection, prayer times display, and countdown timer_

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14+ recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/prayer-times-app.git
cd prayer-times-app
```

# Install dependencies
```bash
npm install
```

Run the App
```bash
npm start
```

The app will open on http://localhost:3000.

🔐 Environment Variables
No API key is required for the free endpoints of the AlAdhan API, but if you use an API key, create a .env file with:

```bash
REACT_APP_ALADHAN_API_KEY=your_api_key_here
```

Use this key in your requests if needed.

✅ Future Enhancements
Add more cities and countries

Support different prayer time calculation methods

Dark mode toggle

Multi-language support

🤝 Contributing
Feel free to submit pull requests or open issues.

📄 License
This project is licensed under the MIT License.

👤 Author
Aziz Hamdi
LinkedIn:https://www.linkedin.com/in/aziz-hamdi-837175286/