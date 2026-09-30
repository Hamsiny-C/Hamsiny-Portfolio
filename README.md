# Hamsiny C — Portfolio (React + Spring Boot + MySQL)

Cinematic developer portfolio. React frontend, Spring Boot REST backend, MySQL storage, Docker-ready for AWS EC2.

```text
User → React (nginx) → /api → Spring Boot → Service → Repository → JPA/Hibernate → MySQL
```

```text
frontend/   React (Vite) app: src/{components,sections,data,services}, public/{resume,audio}
backend/    Spring Boot: controller, service, repository, entity, dto, exception, config
deployment/ AWS EC2 guide
docker-compose.yml, .env.example
```

## Requirements
Java 17+, Maven 3.9+, Node.js 20+ and npm, MySQL 8+, Docker with Compose v2 (for the Docker route).

## Local setup
1. **Download/clone** and open a terminal in the project root.
2. **Create the database** (use your own password):
   ```sql
   CREATE DATABASE hamsiny_portfolio;
   CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL ON hamsiny_portfolio.* TO 'portfolio_user'@'localhost';
   ```
3. **Configure env:** `cp .env.example .env` and edit `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`. The backend reads `../.env` automatically when started from `backend/`. `.env` is git-ignored; never commit it.
4. **Start Spring Boot** (port 8080; tables are created automatically):
   ```bash
   cd backend && mvn spring-boot:run
   ```
5. **Start React** (port 5173, `/api` is proxied to 8080):
   ```bash
   cd frontend && npm install && npm run dev
   ```
6. **Open** http://localhost:5173
7. **Test the contact form**, then check the row: `SELECT * FROM contact_messages;`
   Or via curl: `curl -X POST localhost:8080/api/contact -H 'Content-Type: application/json' -d '{"name":"Test","email":"t@example.com","message":"Hello Hamsiny"}'`

Messages are **saved to MySQL only**. No email is sent, and the UI never claims one was.

## Resume
The button downloads `frontend/public/resume/Hamsiny-C-Resume.pdf`. Replace that file with your latest PDF (keep the name), or change `RESUME_URL` in `frontend/src/data/content.js`.

## Photo
The hero photo is `frontend/src/assets/hamsiny.webp` (full-resolution copy of your original, only re-encoded, never retouched). The untouched original is in `frontend/src/assets/original/`. To change it, replace the `.webp` (keep the name) or edit the import in `frontend/src/components/HeroPhoto.jsx`. All cinematic effects (spotlight, rim light, vignette, light streaks, glass chips, mouse tilt) are CSS layers in `styles.css` (search "Hero photo stage"); the image pixels are not edited.

## Editing content
All text lives in `frontend/src/data/content.js`. Styles are in `frontend/src/styles.css`. To show a certificate link, add a URL as a 4th item in a `CERTS` entry.

## Docker setup
```bash
cp .env.example .env        # set DB_PASSWORD and MYSQL_ROOT_PASSWORD (DB_USERNAME must not be "root")
docker compose up --build   # site at http://localhost
docker compose down         # stop (data kept)
docker compose down -v      # stop and delete the MySQL volume
```
In Docker, nginx serves React on port 80 and proxies `/api` to the backend. MySQL and the backend are not published to the host.

## AWS EC2 setup
Full guide: [deployment/aws-ec2.md](deployment/aws-ec2.md). Outline: create instance → SSH → install Docker → copy/clone project → set `.env` → `docker compose up -d --build` → security group (80/443 open, 22 from your IP only) → open the public IP. **This project has not been deployed to AWS by me; the guide is a checklist for you.**

## Configuration reference
| Variable | Purpose |
|---|---|
| `DB_URL`, `DB_USERNAME`, `DB_PASSWORD` | Spring Boot datasource |
| `CORS_ORIGINS` | Comma-separated allowed origins (only needed if frontend and API are on different origins) |
| `DB_NAME`, `MYSQL_ROOT_PASSWORD` | docker-compose MySQL container |
| `VITE_API_URL` (frontend) | API base URL; empty = same origin |
