export interface ProjectDetail {
  slug: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projectsDetail: ProjectDetail[] = [
  {
    slug: "zotural",
    title: "Zotural",
    image: "/assets/images/homepage/project5.webp",
    description:
      "Zotural adalah aplikasi dashboard berbasis web yang dirancang sebagai simulasi sistem admin panel internal sebuah perusahaan. Aplikasi ini menerapkan konsep role-based access dengan dua peran utama, yaitu Manager dan Sales Agent, yang masing-masing memiliki hak akses dan fitur berbeda. Manager berperan dalam memantau keseluruhan operasional melalui dashboard ringkasan, mengelola data karyawan, produk, transaksi, serta melihat laporan bisnis secara global. Sementara itu, Sales Agent difokuskan pada aktivitas operasional seperti mengelola data customer, membuat order, dan memantau performa penjualan pribadi. Project ini dikembangkan sebagai frontend-only application dengan data dummy.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Vite",
      "TailwindCSS",
    ],
    demoUrl: "https://zotu.vercel.app",
    repoUrl: "https://github.com/hndraphyy/ZUTORAL",
  },
  {
    slug: "eazy-cashier",
    title: "Eazy Cashier",
    image: "/assets/images/homepage/project1.webp",
    description:
      "Sistem kasir sederhana yang dirancang untuk membantu UMKM dalam mengelola penjualan sehari-hari. Aplikasi ini memiliki halaman kasir untuk melakukan transaksi secara cepat, fitur manajemen data barang termasuk tambah dan update stok, serta pencatatan transaksi yang rapi. Selain itu, sistem dilengkapi dengan fungsi cetak invoice sehingga memudahkan pemilik usaha dalam memberikan bukti transaksi kepada pelanggan sekaligus memonitor laporan penjualan.",
    technologies: ["HTML", "CSS", "JavaScript", "Laravel", "SASS", "Elektron"],
    demoUrl: "",
    repoUrl: "",
  },
  {
    slug: "klinin-laundry",
    title: "Klinin Laundry",
    image: "/assets/images/homepage/project2.webp",
    description:
      "Landing page laundry berbasis web yang dirancang untuk memperkenalkan layanan secara profesional. Halaman ini menampilkan informasi lengkap tentang layanan yang tersedia, daftar harga, keunggulan bisnis, serta kontak yang memudahkan pelanggan untuk melakukan pemesanan. Dengan desain responsif dan modern, landing page ini membantu meningkatkan kepercayaan pelanggan sekaligus memperluas jangkauan promosi usaha laundry.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Vite",
      "TailwindCSS",
    ],
    demoUrl: "https://klinin-website.vercel.app/",
    repoUrl: "",
  },
  {
    slug: "moviessis",
    title: "Moviessis",
    image: "/assets/images/homepage/project3.webp",
    description:
      "Landing page pencarian film yang dibangun dengan integrasi TMDB API. Pengguna dapat menjelajahi berbagai kategori film, melihat daftar film populer, dan melakukan pencarian berdasarkan judul. Tampilan sederhana berbasis poster membuat informasi lebih visual dan mudah dipahami, sehingga pengguna bisa menemukan film yang mereka inginkan dengan cepat.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "TMDB API",
    ],
    demoUrl: "https://moviessis.vercel.app/",
    repoUrl: "https://github.com/hndraphyy/MOVIESSIS",
  },
  {
    slug: "i-landing",
    title: "I-Landing",
    image: "/assets/images/homepage/project4.webp",
    description:
      "Template landing page modern yang dibuat sebagai contoh desain web sederhana. Mengusung tampilan clean, responsif, dan mudah dikustomisasi, template ini dapat digunakan untuk berbagai kebutuhan seperti company profile, personal branding, maupun project showcase. Dengan struktur layout yang rapi, landing page ini bisa dijadikan dasar untuk pengembangan website yang lebih kompleks.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "React.js",
      "TypeScript",
      "TailwindCSS",
    ],
    demoUrl: "https://inisial-landing.netlify.app/",
    repoUrl: "https://github.com/hndraphyy/LANDING",
  },
];
