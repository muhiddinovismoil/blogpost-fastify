<h1 align="center">🚀 Blog Post API with Fastify</h1>
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square" alt="JavaScript Badge" />
<img src="https://img.shields.io/badge/Fastify-Framework-green?style=flat-square" alt="Fastify Badge" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License Badge" />
</p>

<p align="center">
  <b>⚡ A blazing fast, minimal, and extensible blog post API built with <a href="https://www.fastify.io/">Fastify</a>.</b>
</p>

---

## ✨ Features

- 📝 **Full CRUD Support** – Create, Read, Update, and Delete blog posts
- ⚡ **High Performance** – Powered by Fastify’s lightweight architecture
- 🔌 **Extensible** – Easy to plug in authentication, validation, and more
- 📦 **Minimal & Clean** – No unnecessary dependencies
- 🧱 **Modular Structure** – Controllers, services, and routes are separated

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/blog-post_fastify.git
```

# Navigate to the Project

```
cd blog-post_fastify
```

# Install Dependencies

```
npm install
```

# Start the Server

```
npm run start
```

# For development

```
npm run start:dev
```

# 🗂 Project Structure

```
├──blog-post_fastify/
├── .env
├── .env.example
├── package.json
├── package-lock.json
├── LICENSE
├── prisma/
│   └── schema.prisma
├── README.md
├── server.js
└── src/
    ├── app.js
    ├── config/
    │   ├── index.js
    │   ├── pino-logs.js
    │   └── swagger.js
    ├── controller/
    │   ├── auth.controller.js
    │   ├── blog.controller.js
    │   ├── file.controller.js
    │   ├── index.js
    │   └── user.controller.js
    ├── middleware/
    │   └── index.js
    ├── plugins/
    │   ├── db.js
    │   └── nodemailer.js
    ├── routes/
    │   ├── auth.routes.js
    │   ├── blogs.routes.js
    │   ├── file.routes.js
    │   ├── index.js
    │   └── user.routes.js
    ├── schema/
    │   ├── blogs/
    │   │   ├── create-blog.schema.js
    │   │   ├── delete-blog.schema.js
    │   │   ├── getall-blogs.schema.js
    │   │   ├── getbyid-blog.schema.js
    │   │   ├── index.js
    │   │   └── update-blog.schema.js
    │   ├── file/
    │   │   ├── file.schema.js
    │   │   └── index.js
    │   └── users/
    │       ├── index.js
    │       ├── login.schema.js
    │       ├── register.schema.js
    │       └── send-otp.schema.js
    ├── service/
    │   ├── blogs.service.js
    │   ├── file.service.js
    │   └── user.service.js
    └── utils/
        ├── hash.js
        └── index.js


```

🛠 Tech Stack
🚀 Fastify – Fast and low-overhead Node.js framework

📦 JavaScript – ES6+ syntax and modular structure

🔐 (Optional) JWT Authentication

🗃️ (Optional) Prisma ORM

📄 License
Licensed under the MIT License.

<p align="center"> <sub>Made with ❤️ by <a href="https://fastify.io/">Fastify</a> and maintained by @muhiddinovismoil</sub> </p>
