# 🛒 বাজার দর (Bazar Dor)

> **দৈনন্দিন বাজার দর পর্যবেক্ষণ ও তুলনামূলক বিশ্লেষণের প্ল্যাটফর্ম**  
> A comprehensive grocery price tracking web application built with **Next.js 16**, **TypeScript**, **HeroUI**, **Tailwind CSS**, and **Better Auth**.

---

## 🔗 Live & Repository Links

- **Live Deployment:** [Live Website Link](https://your-project.vercel.app) *(Replace with your live Vercel URL)*
- **GitHub Repository:** [https://github.com/Its-Nahid/ph-assignment-7](https://github.com/Its-Nahid/ph-assignment-7) *(Replace with your repo URL)*

---

## 📖 Project Overview

**বাজার দর (Bazar Dor)** is a modern web application designed for consumers across Bangladesh to track, compare, and analyze daily grocery prices in real time. It monitors essential commodities such as rice, lentils, oil, vegetables, fish, meat, eggs, dairy, and spices across various wholesale and retail markets in different divisions of Bangladesh.

The platform provides actionable insights such as top price risers, top price fallers, market-wise minimum, maximum, and average rates, and historical price movement indicators with Bengali numerals and localized formatting.

---

## 🚀 Key Features

1. **📊 Live Price Fluctuations (আজ দাম বেড়েছে ও কমেছে):**
   - Automatically calculates and showcases the **Top 6 price risers** (▲) and **Top 6 price fallers** (▼) of the day on the homepage.
   - Highlights percentage changes and numerical price shifts using localized Bengali numerals.

2. **🏷️ Category-Based Browsing with Sorting (সাজান):**
   - Explore products by categories (চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা) with active navigation highlights.
   - Sort products instantly: **ডিফল্ট**, **দাম: কম থেকে বেশি** (ascending), and **দাম: বেশি থেকে কম** (descending).

3. **🔒 Protected Product Detail Pages (`/product/[slug]`):**
   - Secured route requiring authentication to access detailed market-by-market price breakdowns.
   - Displays minimum, maximum, and average prices alongside an interactive table of prices across divisions (Dhaka, Chittagong, Rajshahi, Sylhet, Khulna, Mymensingh).

4. **⚡ Complete BetterAuth Authentication System:**
   - Seamless email/password registration and login with real-time toast feedback.
   - One-click social authentication via **Google** and **GitHub**.
   - No email verification barrier, ensuring effortless testing and instant account access.

5. **📈 Infinite Price Ticker Marquee:**
   - An eye-catching infinite scrolling market ticker situated below the navbar displaying real-time item names, prices, units, and fluctuation arrows.

6. **📱 Fully Responsive Design & Skeleton Loaders:**
   - Designed for seamless experience across mobile, tablet, and desktop screens with custom collapsible navigation drawers.
   - Smooth skeleton animations on home, category, and detail routes during asynchronous data fetching.

7. **🔍 Friendly 404 & Local Fallback Resilience:**
   - Customized Bengali 404 Not Found page for invalid routes or missing products.
   - Built-in multi-tier API fallback to local JSON data ensuring zero downtime even during external API failures.

---

## 🛠️ Technologies Used

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **Language** | TypeScript |
| **UI Library** | React 19, HeroUI, Tailwind CSS v4, DaisyUI |
| **Authentication** | Better Auth, @better-auth/mongo-adapter |
| **Database** | MongoDB Atlas (Native MongoDB Driver v7) |
| **Icons & Ticker** | Iconify, Gravity UI Icons, react-marquee-text |
| **Code Quality** | ESLint 9 |

---

## 📂 Project Structure

```text
├── app/
│   ├── (auth)/
│   │   ├── sign-in/           # Sign In route (/sign-in & /signin)
│   │   ├── sign-up/           # Sign Up route (/sign-up & /signup)
│   │   ├── my-profile/        # User profile & information update
│   │   └── components/        # Auth forms & Social login buttons
│   ├── category/
│   │   └── [category]/        # Category listing with sorting
│   ├── product/
│   │   └── [slug]/            # Protected product detail page
│   ├── components/            # Reusable UI components (Nav, Hero, ProductCard, etc.)
│   ├── constants/             # Fetch handlers, API fallbacks, unit formatters
│   ├── data/                  # Local fallback datasets
│   ├── lib/                   # Better Auth server and client configurations
│   ├── layout.tsx             # Root layout with fonts, marquee, toast provider
│   └── page.tsx               # Homepage layout
├── .env.example               # Environment variable blueprint
└── next.config.ts             # Next.js configurations and URL rewrites
```

---

## ⚙️ Getting Started & Installation

### Prerequisites
- Node.js (v18.17.0 or higher)
- npm or pnpm or yarn
- A free MongoDB Atlas cluster

### 1. Clone the repository
```bash
git clone https://github.com/Its-Nahid/ph-assignment-7.git
cd ph-assignment-7
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
Fill in your credentials (see the setup guide below).

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👨‍💻 Author

**Naimur Rahman Nahid**  
GitHub: [@Its-Nahid](https://github.com/Its-Nahid)