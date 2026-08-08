import { Project, ExperienceItem, SkillItem } from '@/types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuALIPCHTCqix-hDNIBgBaIaISeQKUFf_bzVn3xBzwDzZU7-9NfgmkIn860SMWtVeZC9Iz99DiP2YNElGDqeJEk3EK4yaZtYYrqRGrSV8_Qt9Ep7qo9X_7MFRKEXR4b3vuaBDX1z_sirG8JGcKqrmF996iZ4_0-Yj6GWwiZgTHdK2PcremNj5ipgfW3204LDoW3LQ96yIBEsCDFaroVhIDHJWSuCNGI9EXKsdDyENpd7zcfBKvsV2-4OHg';

export const ABOUT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPbfNXevURvOJpyMKwBAOpYdk24jpV55HFHjEutVvvZ_FjiUKWkT1mMb59qFTTTd5Yzp__xjGslgQRPHHM3lFSsv3V7QMEbHD8LBQgce8jkuaMzmrFTpwIPqciD3hO1_lV6pEGgp0ldaZwKFP70GZvt9sYqldunGvLKbNzemdCC2ZKnEIc6xV-975jH9rRNQNgzgAoKFWxpdadapW4HHL-DeC4AcTG3-wr8NCQ_xY6-q4p-9hV9J3YAA';

export const PROJECTS: Project[] = [
  {
    id: 'cataract-detection-cnn',
    title: 'Deteksi Katarak & Mata Normal (CNN)',
    client: 'Tugas Akhir / Skripsi',
    role: 'AI Researcher & Developer',
    year: '2024',
    category: 'AI / ML',
    tags: ['PYTHON', 'CNN', 'DEEP LEARNING', 'COMPUTER VISION'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
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
    id: 'mymoney-app',
    title: 'MyMoney — Aplikasi Kelola Keuangan',
    client: 'Personal Project',
    role: 'Mobile Developer',
    year: '2024',
    category: 'MOBILE',
    tags: ['REACT NATIVE / EXPO', 'FIREBASE', 'TYPESCRIPT'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Aplikasi mobile manajemen keuangan pribadi dengan pencatatan transaksi cerdas dan Firestore.',
    fullDescription: 'Aplikasi mobile yang dirancang untuk membantu pengguna mengelola pemasukan dan pengeluaran harian. Menggunakan Cloud Firestore sebagai database terintegrasi secara real-time.',
    techStack: ['React Native', 'Expo', 'Firebase Firestore', 'TypeScript', 'Tailwind'],
    highlights: [
      { title: 'Real-time Sync', description: 'Penyimpanan dan sinkronisasi data transaksi keuangan secara langsung via Cloud Firestore.', icon: 'sync' },
      { title: 'Visualisasi Keuangan', description: 'Ringkasan alokasi dana dan grafik pengeluaran harian/bulanan yang intuitif.', icon: 'pie_chart' }
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'pos-flutter-app',
    title: 'Point of Sale (POS) Mobile System',
    client: 'Personal / Client Project',
    role: 'Mobile Developer',
    year: '2023',
    category: 'MOBILE',
    tags: ['FLUTTER', 'DART', 'REST API'],
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Aplikasi Kasir / POS berbasis mobile dengan pengelolaan katalog produk dan riwayat transaksi.',
    fullDescription: 'Sistem aplikasi kasir bergerak yang dibangun menggunakan Flutter. Memudahkan pencatatan penjualan cepat, inventaris barang, serta pencetakan struk belanja transaksi secara efisien.',
    techStack: ['Flutter', 'Dart', 'SQLite', 'REST API', 'Provider/Bloc'],
    highlights: [
      { title: 'Cross-Platform', description: 'Performa aplikasi yang mulus dan responsif di platform Android & iOS.', icon: 'devices' },
      { title: 'Pencatatan Penjualan', description: 'Manajemen ketersediaan stok barang dan rekapitulasi penjualan berkala.', icon: 'receipt_long' }
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    id: 'data-scraping-engine',
    title: 'Automated Data Scraping Engine',
    client: 'Personal Project',
    role: 'Backend & Data Engineer',
    year: '2023',
    category: 'WEB',
    tags: ['PYTHON', 'BEAUTIFULSOUP', 'SELENIUM'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
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