# Web Portfolio — Muhammad Ghiffary Alfathan

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github)](../../actions)
[![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![Made with CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)

> Website portfolio pribadi yang di-deploy otomatis menggunakan **GitHub Actions** ke **GitHub Pages**.

---

## Daftar Isi
- [Tentang](#tentang)
- [Tech Stack](#tech-stack)
- [Struktur Project](#struktur-project)
- [Menjalankan Secara Lokal](#menjalankan-secara-lokal)
- [Deployment](#deployment)
- [Kontak](#kontak)

---

## Tentang
Repository ini berisi source code website portfolio pribadi saya.
Website ini menampilkan profil singkat, daftar proyek, keahlian, dan tautan ke CV.

## Tech Stack
| Kategori        | Teknologi                              |
| --------------- | -------------------------------------- |
| **Frontend**    | HTML5, CSS3, JavaScript (vanilla)      |
| **CI/CD**       | GitHub Actions                         |
| **Hosting**     | GitHub Pages                           |
| **Version Ctl** | Git & GitHub                           |

## Struktur Project
```
web-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # Pipeline GitHub Actions
├── CV.pdf                  # Curriculum Vitae
├── index.html              # Halaman utama
├── script.js               # Interaktivitas
├── style.css               # Styling
└── README.md
```

## Menjalankan Secara Lokal
Karena project ini statis, kamu cukup membuka `index.html` langsung di browser:

```bash
# Clone repository
git clone https://github.com/<username>/web-portfolio.git
cd web-portfolio

# Buka di browser (Windows)
start index.html
```

Atau gunakan live server (opsional, jika butuh auto-reload):

```bash
npx serve .
```

## Deployment
Deployment dilakukan otomatis melalui **GitHub Actions**.
Setiap kali ada `push` ke branch `main`, pipeline berikut akan berjalan:

1. Checkout source code
2. Konfigurasi GitHub Pages
3. Upload artifact website
4. Deploy ke GitHub Pages

Konfigurasi pipeline ada di [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

> Tidak perlu langkah manual — cukup push, tunggu beberapa detik, website langsung ter-update.

## Kontak
- **Email:** mg.alfathan@gmail.com
- **GitHub:** [@MuhammadGhiffaryAlfathan](https://github.com/)
