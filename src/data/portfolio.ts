import { Project, ExperienceItem, SkillItem } from '@/types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuALIPCHTCqix-hDNIBgBaIaISeQKUFf_bzVn3xBzwDzZU7-9NfgmkIn860SMWtVeZC9Iz99DiP2YNElGDqeJEk3EK4yaZtYYrqRGrSV8_Qt9Ep7qo9X_7MFRKEXR4b3vuaBDX1z_sirG8JGcKqrmF996iZ4_0-Yj6GWwiZgTHdK2PcremNj5ipgfW3204LDoW3LQ96yIBEsCDFaroVhIDHJWSuCNGI9EXKsdDyENpd7zcfBKvsV2-4OHg';

export const ABOUT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPbfNXevURvOJpyMKwBAOpYdk24jpV55HFHjEutVvvZ_FjiUKWkT1mMb59qFTTTd5Yzp__xjGslgQRPHHM3lFSsv3V7QMEbHD8LBQgce8jkuaMzmrFTpwIPqciD3hO1_lV6pEGgp0ldaZwKFP70GZvt9sYqldunGvLKbNzemdCC2ZKnEIc6xV-975jH9rRNQNgzgAoKFWxpdadapW4HHL-DeC4AcTG3-wr8NCQ_xY6-q4p-9hV9J3YAA';

export const ABOUT_SPOTIFY_URL = 'https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1?si=e353f36f7b7848e4';

export const PROJECTS: Project[] = [
  {
    id: 'pos-system',
    title: 'POS Mobile (Point of Sale System)',
    client: 'Personal / Retail Project',
    role: 'Flutter Mobile Developer',
    year: '2026',
    category: 'MOBILE',
    tags: ['FLUTTER', 'DRIFT (SQLITE)', 'PROVIDER', 'BLUETOOTH PRINT', 'CLEAN UI'],
    // Thumbnail Utama (Katalog & Kasir)
    image: '/img/projects/pos/thmb.png', 
    coverSlides: [
    "/img/projects/pos/slide1.png",
    "/img/projects/pos/slide2.png",
    "/img/projects/pos/slide3.png",
    "/img/projects/pos/slide4.png",
    "/img/projects/pos/slide5.png",
   ],
    gallery: [
      '/img/projects/pos/4.png',  // Buka Shift Kasir
      '/img/projects/pos/8.png', // Katalog Produk
      '/img/projects/pos/10.png',  // Rekonsiliasi Shift & Kas
      '/img/projects/pos/11.png', // Transaksi Kasir (Cart)
      '/img/projects/pos/14.png', // Detail Struk & Void Transaksi
      '/img/projects/pos/16.png', // Backup Data & Setting Thermal Printer
    ],
    shortDescription: 'Sistem POS Retail berbasis Flutter dengan manajemen shift kasir, pencetakan Thermal Bluetooth, database Drift, dan fitur ekspor data.',
    fullDescription: 'LEXA POS adalah sistem Point of Sale mobile profesional untuk bisnis retail. Dibuat menggunakan Flutter dan Drift ORM (SQLite) untuk performa database lokal yang cepat dan offline-first. Dilengkapi fitur verifikasi lisensi perangkat, manajemen shift & laci kasir (kas awal/akhir & selisih), enkripsi PIN keamanan, cetak nota Bluetooth thermal (ESC/POS), fitur Void transaksi, ekspor/impor CSV & PDF, hingga backup & restore database lokal/cloud.',
    techStack: [
      'Flutter & Dart',
      'Drift (Moor) ORM',
      'SQLite3',
      'Provider',
      'Bluetooth Thermal (ESC/POS)',
      'PDF & Printing',
      'Crypto (SHA-256/Security)',
      'Shared Preferences'
    ],
    highlights: [
      { 
        title: 'Offline-First & Modern ORM', 
        description: 'Penyimpanan data lokal yang efisien, canggih, dan type-safe menggunakan Drift ORM dan SQLite3.', 
        icon: 'database' 
      },
      { 
        title: 'Shift & Rekonsiliasi Kasir', 
        description: 'Sistem Buka/Tutup Shift kasir otomatis dengan kalkulasi selisih kas fisik laci dan audit log.', 
        icon: 'point_of_sale' 
      },
      { 
        title: 'Thermal Printer & Cetak PDF', 
        description: 'Integrasi langsung ke printer Bluetooth Thermal via protokol ESC/POS serta cetak/berbagi nota format PDF.', 
        icon: 'print' 
      },
      { 
        title: 'Keamanan PIN & Backup Data', 
        description: 'Otentikasi PIN terenkripsi, reset PIN multi-user, serta fitur cadangan database (.sql) dan laporan CSV.', 
        icon: 'security' 
      }
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'mymoney-app',
    title: 'MyMoney (Aplikasi Kelola Keuangan)',
    client: 'Personal Project',
    role: 'Mobile Developer',
    year: '2025',
    category: 'MOBILE',
    tags: ['REACT NATIVE / EXPO', 'FIREBASE', 'TYPESCRIPT'],
    image: '/img/projects/blmtersedia.png',
    gallery: [
      '/img/projects/blmtersedia.png',
      '/img/projects/blmtersedia.png',
      '/img/projects/blmtersedia.png',
      '/img/projects/blmtersedia.png',
      '/img/projects/blmtersedia.png' 
    ],
    // previewVideo: '/videos/mymoney-app.mp4',  ← upload ke /public/videos/ lalu uncomment
    shortDescription: 'Aplikasi mobile manajemen keuangan pribadi dengan pencatatan transaksi cerdas dan Firestore.',
    fullDescription: 'Aplikasi mobile yang dirancang untuk membantu pengguna mengelola pemasukan dan pengeluaran harian. Menggunakan Cloud Firestore sebagai database terintegrasi secara real-time.',
    techStack: ['React Native', 'Expo', 'Firebase Firestore', 'TypeScript', 'Tailwind'],
    highlights: [
      { title: 'Real-time Sync', description: 'Penyimpanan dan sinkronisasi data transaksi keuangan secara langsung via Cloud Firestore.', icon: 'sync' },
      { title: 'Visualisasi Keuangan', description: 'Ringkasan alokasi dana dan grafik pengeluaran harian/bulanan yang intuitif.', icon: 'pie_chart' }
    ],
    liveUrl: '#',
    spotifyUrl: 'https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1?si=e353f36f7b7848e4',
    featured: true,
  },
  {
    id: 'deteksi-dini',
    title: 'Deteksi Dini Katarak & Mata Normal',
    client: 'Tugas Akhir / Skripsi',
    role: 'AI Researcher & Developer',
    year: '2026',
    category: 'AI / ML',
    tags: ['PYTHON', 'CNN', 'DEEP LEARNING', 'COMPUTER VISION'],
    image: '/img/projects/inprogress.png',
    gallery: [
      '/img/projects/inprogress.png', 
      '/img/projects/inprogress.png', 
      '/img/projects/inprogress.png', 
      '/img/projects/inprogress.png', 
      '/img/projects/inprogress.png' 
    ],
    // previewVideo: '/videos/cataract-detection.mp4',  ← upload ke /public/videos/ lalu uncomment
    shortDescription: 'Sistem klasifikasi citra medis berbasis Convolutional Neural Network untuk mendeteksi katarak dan kondisi mata normal.',
    fullDescription: 'Penelitian dan pengembangan model Deep Learning menggunakan arsitektur CNN untuk menganalisis citra mata. Sistem mampu membedakan kondisi mata yang mengidap katarak dan mata normal secara akurat untuk membantu proses penapisan medis awal.',
    techStack: ['Python', 'TensorFlow/Keras', 'OpenCV', 'CNN', 'NumPy'],
    highlights: [
      { title: 'Computer Vision', description: 'Ekstraksi fitur dan pra-pemrosesan citra medis untuk optimasi performa model.', icon: 'visibility' },
      { title: 'Akurasi Tinggi', description: 'Evaluasi model menggunakan confusion matrix dan metrik klasifikasi untuk keandalan prediksi.', icon: 'analytics' }
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'data-scraping',
    title: 'Automated Data Scraping Engine',
    client: 'Personal Project',
    role: 'Backend & Data Engineer',
    year: '2026',
    category: 'WEB',
    tags: ['PYTHON', 'BEAUTIFULSOUP', 'SELENIUM'],
    image: '/img/projects/blmtersedia.png',
    gallery: [
      '/img/projects/blmtersedia.png', 
      '/img/projects/blmtersedia.png', 
      '/img/projects/blmtersedia.png', 
      '/img/projects/blmtersedia.png', 
      '/img/projects/blmtersedia.png' 
    ],
    // previewVideo: '/videos/data-scraping.mp4',  ← upload ke /public/videos/ lalu uncomment
    shortDescription: 'Bot dan skrip otomasi ekstraksi data terstruktur dari berbagai situs web.',
    fullDescription: 'Sistem ekstraksi data otomatis yang dirancang menggunakan Python untuk mengumpulkan, membersihkan, dan menyimpan informasi publik dari situs web tujuan menjadi format terstruktur (JSON/CSV).',
    techStack: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
    highlights: [
      { title: 'Automated Extraction', description: 'Pengambilan data dinamis berskala besar tanpa perlu intervensi manual.', icon: 'smart_toy' },
      { title: 'Data Cleaning', description: 'Pembersihan dan validasi struktur data secara otomatis sebelum diproses.', icon: 'cleaning_services' }
    ],
    liveUrl: '#',
    featured: false,
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  { id: 'exp-1', role: 'Mahasiswa Teknik Informatika (Sistem Cerdas)', period: 'PENDIDIKAN', description: 'Fokus pada peminatan Sistem Cerdas (AI), mempelajari Neural Networks, Computer Vision, Natural Language Processing (NLP), serta pengembangan aplikasi Web dan Mobile.' },
  { id: 'exp-2', role: 'Mobile & Web Developer (Project-Based)', period: 'PENGALAMAN', description: 'Mengembangkan berbagai aplikasi mobile (MyMoney, POS Flutter) dan skrip pengolahan data/scraping sesuai kebutuhan fungsional sistem.' },
  { id: 'exp-3', role: 'Peneliti Skripsi (AI / Deep Learning)', period: 'RISET', description: 'Meneliti dan mengimplementasikan model Convolutional Neural Network (CNN) untuk identifikasi dan klasifikasi citra medis katarak dan mata normal.' }
];

export const SKILLS: SkillItem[] = [
  { name: 'Python', level: 'expert', category: 'Language' },
  { name: 'CNN & Computer Vision', level: 'expert', category: 'AI / ML' },
  { name: 'Flutter & Dart', level: 'expert', category: 'Mobile' },
  { name: 'React Native / Expo', level: 'advanced', category: 'Mobile' },
  { name: 'React & Next.js', level: 'advanced', category: 'Frontend' },
  { name: 'Deep Learning (ANN/NLP)', level: 'advanced', category: 'AI / ML' },
  { name: 'Data Scraping (Bs4/Selenium)', level: 'advanced', category: 'Automation' },
  { name: 'Firebase & Firestore', level: 'advanced', category: 'Backend' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'Styling' },
  { name: 'TypeScript / JavaScript', level: 'advanced', category: 'Language' },
  { name: 'Git & GitHub', level: 'proficient', category: 'Tools' }
];