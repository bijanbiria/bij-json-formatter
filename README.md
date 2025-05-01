# BIJ JSON Formatter

A lightweight and elegant web-based JSON Formatter built with **Next.js 15**, **TypeScript**, and **TailwindCSS**.  
This tool helps you format, minify, and view JSON in a collapsible, syntax-highlighted structure.

> ✅ Fully open-source and free to use by anyone.

---

## ✨ Features

- ✅ Format JSON with indentation
- ✅ Minify JSON (remove whitespaces)
- ✅ View JSON in collapsible tree structure
- ✅ Syntax highlighting (keys, strings, numbers, booleans)
- ✅ Error messages for invalid JSON
- ✅ Dark/light theme compatible

---

## 🧑‍💻 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-json-view](https://github.com/mac-s-g/react-json-view)

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/bij-json-formatter.git
cd bij-json-formatter

pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker Deployment

If you want to deploy the app using Docker:

1. Copy the example config files:

```bash
cp docker/.env.example docker/.env
cp docker/docker-compose.yml.example docker/docker-compose.yml
cp docker/Dockerfile.example docker/Dockerfile
```

2. Edit the copied `.env` file and set your own domain:

```
DOMAIN=your-domain.com
```

3. Edit `docker-compose.yml` and:
    - Replace `your_network_name` with the name of your Docker/Traefik network.
    - Make sure the domain is correctly referenced as `${DOMAIN}`.

> ❗ If you're using an **older version** of Docker Compose, you may need to **add `version: '3.8'`** at the top of the file. Newer versions of Compose do **not** require it.

4. Run the deployment:

```bash
cd docker
docker network create your_network_name   # only once
docker compose up -d --build
```

---

## 📂 Project Structure

```
src/
├── app/             # Next.js App Router
│   └── page.tsx     # Main page
├── components/      # Reusable components
├── utils/           # JSON format & validation logic
├── styles/
docker/
├── .env.example
├── Dockerfile.example
├── docker-compose.yml.example
```

---

## 💪 License

This project is licensed under the **MIT License** — feel free to use, fork, and contribute.

---

Made with ❤️ by [Bijan Biria](https://bijanbiria.com)

