# Arcane Artifacts (Paintshop)


# Stephanie Maniquiz 
# BSIT 3-1

---
## Tech stack
- Backend: Laravel (PHP) — routing, controllers, migrations, and APIs
- Frontend: Vue 3 (Single File Components) with Vite dev tooling
- Styles: Tailwind CSS (project contains `tailwind.config.js`) plus custom CSS in `resources/css/app.css`
- Build tools: Node.js, npm (Vite/ESBuild)
- Dependency manager: Composer (PHP)
- Tests: PHPUnit (project includes `phpunit.xml`)

-
## Quick local setup (development)
Open PowerShell in the repository root (`C:\Users\Stephanie\paintshop`) and run:

1. Install PHP dependencies
```powershell
composer install
```

2. Copy environment file and set app key
```powershell
copy .env.example .env
php artisan key:generate
```

3. Edit `.env` and set your database credentials (if using a DB). If you don't want DB-backed auctions for now you can skip migrations.

4. Install Node dependencies
```powershell
npm install
```

5. Start the front-end dev server (Vite)
```powershell
npm run dev
```
This will start the dev server (Vite) and output a local URL (commonly `http://localhost:5173`).

6. Start the Laravel back-end server
```powershell
php artisan serve
```
This serves the Laravel app at `http://127.0.0.1:8000` by default. If you use the Vite dev server together with Laravel, check how your app is wired (some setups proxy or use full Vite integration).

7. (Optional) Run migrations
```powershell
php artisan migrate
```

Open the app in your browser at the URL shown by your server(s). If both Laravel and Vite are running you may use the Laravel URL (`http://127.0.0.1:8000`) to view the full site.

---

## Build for production
1. Build frontend assets
```powershell
npm run build
```
2. Clear and cache Laravel config (optional)
```powershell
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
3. Deploy your `public/` folder and compiled assets to your production server.


