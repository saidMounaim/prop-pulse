# PropPulse

**PropPulse** is a modern and minimal real estate web application\*\* built with Next.js 16, Prisma,BetterAuth, and ShadCN/UI.  
Users can browse properties, add listings, and manage their real estate posts through a clean and fast interface.

---

## 🚀 Live Demo

🔗 _(https://proppulse-next.netlify.app/)_

---

## ✨ Features

- 🔐 Authentication with BetterAuth
- 🏡 Browse all properties with search & filters
- 📝 Add new property listings with images, price, location, and details
- 📸 Upload property images using ImageKit
- 🗂️ Manage your own listings (edit/delete)
- 💅 Beautiful UI using ShadCN/UI + Tailwind CSS
- 📱 Fully responsive on all screen sizes

---

## 📦 Tech Stack

- **Next.js 16**
- **Tailwind CSS**
- **ShadCN/UI**
- **TypeScript**
- **Prisma ORM**
- **BetterAuth**
- **ImageKit** (image uploads)

---

## 🛠 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/saidMounaim/prop-pulse.git
cd prop-pulse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root:

```env
# Database
DATABASE_URL="postgresql://..."

# BetterAuth
BETTER_AUTH_BASE_URL="https://proppulse-next.netlify.app"
BETTER_AUTH_SECRET="your_betterauth_secret"

# ImageKit
IMAGEKIT_PUBLIC_KEY="your_public_key"
IMAGEKIT_PRIVATE_KEY="your_private_key"
IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_id"
```

### 4. Start the dev server

```bash
npm run dev
```

---

## 💼 Contribution

All contributions are welcome!  
Fork the repo, create a new branch, and submit a pull request.
