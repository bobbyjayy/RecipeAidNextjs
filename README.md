# 🧠 RecipeAid

**RecipeAid** is an AI-powered meal planner built with **Next.js** and **OpenAI**. Users can input ingredients, select a cuisine and meal type, and generate a complete recipe — all from their browser.

---

## 🚀 Features

- 🔐 User authentication (register & login)
- 🧑‍🍳 AI-generated meals using OpenAI
- 🍽️ Three-course meal suggestions (Appetizer, Main, Side)
- 📦 Full Clean Architecture (Entities, Use Cases, Interfaces)
- 📄 MongoDB database integration
- 📊 Rate limiting for guest users (3 tries before login prompt)
- 🌐 Fully responsive UI with Tailwind CSS

---

## 📁 Project Structure

- app/ # App Router pages and layouts
- components/ # Reusable UI components
- lib/ # Use cases and business logic
- models/ # MongoDB models
- interfaces/ # Repositories and external service contracts
- entities/ # Core domain entities
- services/ # API calls from frontend

---

## 🛠️ Technologies

- [Next.js 14 (App Router)](https://nextjs.org)
- [OpenAI API](https://platform.openai.com)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Tailwind CSS](https://tailwindcss.com)
- [JWT](https://jwt.io)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs)

---

## 📦 Setup & Development

### 1. Clone the repository

```bash
git clone https://github.com/bobbyjayy/RecipeAidNextjs.git
cd RecipeAidNextjs
```

### 2. Install dependencies

`npm install`

### 3. Create .env.local with your environment variables

```bash
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_key
JWT_SECRET=your_jwt_secret
```

### 4. Run the development server

`npm run dev`

## 📌 Roadmap / TODOs

    ✅ Guest rate limiting (3 attempts)

    ✅ OpenAI meal suggestion logic

    ✅ Clean architecture separation

    🔲 Save recipes to user profile

    🔲 Export meals as PDF/image

    🔲 Add user dashboard
