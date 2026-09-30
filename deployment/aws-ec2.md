# Deploy to AWS EC2 (Docker Compose)

Architecture: EC2 → Docker → nginx/React (port 80) + Spring Boot + MySQL (internal network only).

## 1. Create the instance
- EC2 → Launch instance. Ubuntu 22.04/24.04 (or Amazon Linux 2023), **t3.small or larger** (Maven build + MySQL need ~2 GB RAM; t3.micro may run out of memory).
- Create/download a key pair (`.pem`). Storage: 20 GB gp3.
- Security group inbound: **22** (SSH) from *My IP* only, **80** (HTTP) from anywhere, **443** if you add HTTPS later. Do **not** open 3306 or 8080.

## 2. SSH in
```bash
chmod 400 key.pem
ssh -i key.pem ubuntu@<EC2_PUBLIC_IP>      # ec2-user on Amazon Linux
```

## 3. Install Docker
Ubuntu:
```bash
sudo apt update && sudo apt install -y docker.io docker-compose-v2 git
sudo systemctl enable --now docker && sudo usermod -aG docker $USER && newgrp docker
```
Amazon Linux 2023:
```bash
sudo dnf install -y docker git && sudo systemctl enable --now docker && sudo usermod -aG docker ec2-user && newgrp docker
sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -SL https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
```

## 4. Get the project onto the server
```bash
git clone <your-repo-url> hamsiny-portfolio        # or from your laptop:
# scp -i key.pem -r hamsiny-portfolio ubuntu@<EC2_PUBLIC_IP>:~/
cd hamsiny-portfolio
```

## 5. Configure environment
```bash
cp .env.example .env && nano .env
```
Set strong values for `DB_PASSWORD` and `MYSQL_ROOT_PASSWORD`. Set `CORS_ORIGINS=http://<EC2_PUBLIC_IP>` (or your domain). Put your real resume PDF at `frontend/public/resume/Hamsiny-C-Resume.pdf` before building.

## 6. Build and run
```bash
docker compose up -d --build
docker compose ps
docker compose logs -f backend
```

## 7. Open the app
Visit `http://<EC2_PUBLIC_IP>`. Submit the contact form, then verify:
```bash
docker compose exec mysql mysql -u"$DB_USERNAME" -p -e "SELECT id,name,email,created_at FROM ${DB_NAME}.contact_messages;"
```

## Operations
- Update: `git pull && docker compose up -d --build`
- Stop: `docker compose down` (add `-v` to delete data)
- Containers use `restart: unless-stopped`, so they come back after a reboot.
- Back up: `docker compose exec mysql mysqldump -uroot -p <DB_NAME> > backup.sql`

## Optional next steps
- Attach an Elastic IP so the address does not change; point a domain at it.
- HTTPS: put Caddy or nginx + Let's Encrypt in front, or use an Application Load Balancer with ACM.
- Later you could move MySQL to RDS: change `DB_URL` and remove the `mysql` service.
