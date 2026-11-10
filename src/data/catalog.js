import {
  Activity, BookOpen, Brain, BusFront, ClipboardList, GraduationCap,
  HeartHandshake, HeartPulse, Home, Hospital, Map, MessageCircle,
  Newspaper, PackageCheck, ShieldCheck, ShoppingBag, Smartphone, Sparkles,
  Stethoscope, Users, Utensils, Video, BookMarked, HandHeart,
  CalendarDays, Accessibility, BedDouble
} from 'lucide-react';

export const navigation = [
  { label: 'خانه', to: '/' },
  { label: 'تأمین کالا', to: '/shop' },
  { label: 'پایگاه دانش', to: '/knowledge' },
  { label: 'آموزش', to: '/education' },
  { label: 'خدمات تخصصی', to: '/services' },
  { label: 'مراکز تخصصی', to: '/centers' }
];

export const ecosystem = [
  {
    title: 'تأمین کالا', subtitle: 'فروشگاه سرو لایف', to: '/shop', icon: ShoppingBag,
    description: 'کالاهای مصرفی روزمره، ابزارهای کمک‌حرکتی و تجهیزات تخصصی سالمندی.'
  },
  {
    title: 'پایگاه دانش', subtitle: 'مقالات و راهنماها', to: '/knowledge', icon: BookOpen,
    description: 'محتوای معتبر و کاربردی برای سالمندان، خانواده‌ها و مراقبان.'
  },
  {
    title: 'آموزش', subtitle: 'دوره‌های مهارتی', to: '/education', icon: GraduationCap,
    description: 'آموزش خانواده‌ها و تربیت سالمندیاران و مراقبان توانمند.'
  },
  {
    title: 'خدمات تخصصی', subtitle: 'مراقبت، درمان و جابه‌جایی', to: '/services', icon: HeartHandshake,
    description: 'خدمات در منزل، کلینیک‌های تخصصی و حمل‌ونقل ویژه ویلچری.'
  },
  {
    title: 'مراکز تخصصی', subtitle: 'مراکز روزانه و اقامتی', to: '/centers', icon: Hospital,
    description: 'دسترسی به مراکز مراقبتی، بازتوانی، اوقات فراغت و فعالیت اجتماعی.'
  }
];

export const quickLinks = [
  { title: 'فروشگاه محصولات', text: 'گجت و تجهیزات سالمندی', to: '/shop', icon: ShoppingBag },
  { title: 'پایگاه دانش', text: 'مطالب و راهنماها', to: '/knowledge', icon: BookOpen },
  { title: 'آموزش', text: 'دوره‌های تخصصی', to: '/education', icon: GraduationCap },
  { title: 'خدمات تخصصی', text: 'مراقبت و درمان در منزل', to: '/services', icon: Stethoscope },
  { title: 'حمل‌ونقل ویژه', text: 'ون مجهز به بالابر ویلچر', to: '/section/transport', icon: BusFront },
  { title: 'مراکز تخصصی', text: 'مراقبت و توانبخشی', to: '/centers', icon: Hospital }
];

export const storeSegments = [
  { title: 'کالاهای مصرفی روزمره', slug: 'daily-goods', icon: ShoppingBag, description: 'محصولات بهداشتی، پد و پوشینه، اقلام مراقبت روزانه و محصولات تغذیه‌ای سالمندان.' },
  { title: 'ملزومات و تجهیزات تخصصی', slug: 'special-equipment', icon: Accessibility, description: 'گجت‌های سالمندی، ابزار کمک‌حرکتی، تجهیزات ایمنی حمام و وسایل مراقبت تخصصی.' }
];

export const shopCategories = [
  { label: 'همه محصولات', value: 'all' },
  { label: 'گجت‌های سالمندی', value: 'gadgets' },
  { label: 'تجهیزات مراقبتی و حرکتی', value: 'mobility' },
  { label: 'محصولات مصرفی', value: 'consumables' },
  { label: 'غذا و مکمل‌های تغذیه‌ای', value: 'nutrition' },
  { label: 'تجهیزات بهداشتی', value: 'hygiene' }
];

export const products = [
  {
    id: 'smart-watch', name: 'دستبند و ساعت هوشمند سالمندان', category: 'gadgets',
    description: 'پایش فعالیت روزانه و قابلیت تماس اضطراری؛ ویژگی‌ها بسته به مدل متفاوت است.',
    image: '/images/product-watch.jpg', icon: Smartphone, tag: 'گجت هوشمند'
  },
  {
    id: 'rollator', name: 'رولیتور و واکر کمکی سالمندان', category: 'mobility',
    description: 'کمک به حفظ تعادل هنگام راه رفتن؛ انتخاب نهایی بر اساس شرایط حرکتی فرد.',
    image: '/images/product-rollator.jpg', icon: Accessibility, tag: 'کمک‌حرکتی'
  },
  {
    id: 'adult-pads', name: 'پد و پوشینه بهداشتی بزرگسال', category: 'hygiene',
    description: 'محصولات بهداشتی با اندازه‌ها و قدرت جذب متنوع برای مراقبت روزانه.',
    image: '/images/product-pads.jpg', icon: PackageCheck, tag: 'بهداشت و مراقبت'
  },
  {
    id: 'pill-box', name: 'جعبه قرص هفتگی و یادآور دارو', category: 'gadgets',
    description: 'برای نظم‌دهی به برنامه دارویی و کاهش احتمال فراموشی نوبت‌ها.',
    image: '/images/product-pillbox.jpg', icon: ClipboardList, tag: 'مدیریت دارو'
  },
  {
    id: 'bath-chair', name: 'صندلی حمام و تجهیزات ایمنی', category: 'mobility',
    description: 'کمک به استحمام ایمن‌تر با توجه به فضای حمام و توان حرکتی سالمند.',
    image: '', emoji: '🛁', icon: ShieldCheck, tag: 'ایمنی در منزل'
  },
  {
    id: 'nutrition-pack', name: 'غذاهای ویژه و مکمل‌های تغذیه‌ای سالمندی', category: 'nutrition',
    description: 'محصولات تغذیه‌ای ویژه؛ انتخاب مکمل و مقدار مصرف باید با نظر متخصص باشد.',
    image: '', emoji: '🥛', icon: Utensils, tag: 'تغذیه سالم'
  },
  {
    id: 'pressure-monitor', name: 'فشارسنج دیجیتال بازویی', category: 'gadgets',
    description: 'برای پایش خانگی فشار خون؛ اندازه‌گیری و تفسیر نتایج طبق راهنمای پزشک.',
    image: '/images/preasure-measuring.jpg', emoji: '🩺', icon: HeartPulse, tag: 'پایش سلامت'
  },
  {
    id: 'wheelchair', name: 'ویلچر دستی تاشو', category: 'mobility',
    description: 'گزینه‌ای برای جابه‌جایی؛ ابعاد، وزن و نوع چرخ با نیاز کاربر تطبیق داده می‌شود.',
    image: '/images/manual-weelchair.jpg', emoji: '♿', icon: Accessibility, tag: 'تجهیزات حرکتی'
  },
  {
    id: 'care-bed', name: 'تخت مراقبتی و تشک مواج', category: 'mobility',
    description: 'تجهیزات کمک‌مراقبتی برای شرایط خاص و مراقبت طولانی‌مدت.',
    image: '/images/toshak.jpg', emoji: '🛏️', icon: BedDouble, tag: 'مراقبت تخصصی'
  },
  {
    id: 'daily-care', name: 'بسته ملزومات مصرفی مراقبت روزانه', category: 'consumables',
    description: 'اقلام پرمصرف مراقبت و بهداشت روزانه سالمندان.',
    image: '/images/care.jpg', emoji: '🧴', icon: PackageCheck, tag: 'مصرف روزمره'
  }
];

export const knowledgeTopics = [
  { title: 'سلامت و تغذیه', icon: HeartPulse, slug: 'health-nutrition', description: 'راهنماهای تغذیه، تحرک و سبک زندگی سالم در دوران سالمندی.' },
  { title: 'مهارت‌های سالمندی', icon: Brain, slug: 'senior-skills', description: 'تقویت استقلال، حافظه، ارتباطات و مهارت‌های روزمره.' },
  { title: 'خودمراقبتی', icon: HandHeart, slug: 'self-care', description: 'روش‌های ساده برای مراقبت از جسم، ذهن و کیفیت زندگی.' },
  { title: 'حقوق و خانواده', icon: Users, slug: 'family-rights', description: 'نکات همراهی خانواده، ارتباط مؤثر و آشنایی با حقوق سالمندان.' },
  { title: 'فناوری و راهنماها', icon: Smartphone, slug: 'technology-guides', description: 'آشنایی با گجت‌ها و ابزارهای دیجیتال کاربردی.' },
  { title: 'پوستر و بروشور', icon: Newspaper, slug: 'posters-brochures', description: 'محتوای تصویری و خلاصه برای استفاده سریع و چاپ.' },
  { title: 'انتشارات و کتاب‌ها', icon: BookMarked, slug: 'books-publications', description: 'کتاب‌ها و منابع منتخب مرتبط با سالمندی.' },
  { title: 'فیلم‌های آموزشی', icon: Video, slug: 'educational-films', description: 'ویدئوهای کوتاه برای یادگیری عملی مراقبت.' }
];

export const articles = [
  {
    id: 1, title: '۵ راهکار ساده برای حفظ استقلال سالمندان در خانه', category: 'خودمراقبتی',
    excerpt: 'با چند تغییر کوچک در محیط خانه می‌توان انجام کارهای روزمره را ایمن‌تر و آسان‌تر کرد.',
    readTime: '۵ دقیقه مطالعه', image: '/images/knowledge.jpg', icon: Home
  },
  {
    id: 2, title: 'تغذیه متعادل در دوران سالمندی چه ویژگی‌هایی دارد؟', category: 'سلامت و تغذیه',
    excerpt: 'نکاتی عمومی برای برنامه غذایی متنوع، آب‌رسانی مناسب و توجه به نیازهای فردی.',
    readTime: '۷ دقیقه مطالعه', image: '/images/food.jpg', icon: Utensils
  },
  {
    id: 3, title: 'چطور با سالمند درباره دریافت کمک صحبت کنیم؟', category: 'خانواده',
    excerpt: 'گفت‌وگویی محترمانه که استقلال، انتخاب و احساس امنیت سالمند را حفظ می‌کند.',
    readTime: '۴ دقیقه مطالعه', image: '/images/hero-care.jpg', icon: MessageCircle
  }
];

export const courses = [
  {
    title: 'مراقبت حرفه‌ای از سالمند', audience: 'ویژه سالمندیان و مراقبان',
    duration: 'دوره مهارتی', icon: HeartHandshake,
    description: 'اصول مراقبت روزانه، ارتباط مؤثر، ایمنی و شناخت نیازهای سالمند.'
  },
  {
    title: 'مراقبت و کمک‌های اولیه', audience: 'خانواده‌ها و مراقبان',
    duration: 'آموزش کاربردی', icon: HeartPulse,
    description: 'آشنایی با اقدامات اولیه و زمان مناسب برای درخواست کمک تخصصی.'
  },
  {
    title: 'مهارت‌های ارتباطی با سالمندان', audience: 'عموم علاقه‌مندان',
    duration: 'کارگاه آموزشی', icon: Users,
    description: 'گفت‌وگوی همدلانه، شنیدن فعال و مدیریت موقعیت‌های دشوار.'
  },
  {
    title: 'فناوری و ابزارهای هوشمند سالمندی', audience: 'خانواده‌ها و سالمندیان',
    duration: 'دوره آشنایی', icon: Smartphone,
    description: 'آشنایی با ابزارهای کمک‌زیستی، اعلان‌ها و فناوری‌های مراقبتی.'
  },
  {
    title: 'اصول ایمنی و مناسب‌سازی منزل', audience: 'خانواده و مراقبان',
    duration: 'کارگاه عملی', icon: ShieldCheck,
    description: 'شناسایی خطرهای محیطی و اصلاح مسیرهای رفت‌وآمد و فضای استراحت.'
  },
  {
    title: 'توانبخشی و فعالیت روزانه', audience: 'مراقبان و علاقه‌مندان',
    duration: 'دوره تکمیلی', icon: Activity,
    description: 'طراحی فعالیت‌های متناسب با توان و شرایط هر فرد با راهنمایی متخصص.'
  }
];

export const serviceItems = [
  {
    title: 'مراقبت در منزل', slug: 'home-care', icon: Home,
    description: 'همراهی و مراقبت روزانه در محیط امن خانه، متناسب با نیاز سالمند و خانواده.',
    bullets: ['همراهی در امور روزمره', 'کمک در بهداشت و جابه‌جایی', 'هماهنگی مراقب متناسب با نیاز']
  },
  {
    title: 'خدمات درمانی در منزل', slug: 'home-treatment', icon: Stethoscope,
    description: 'دسترسی به خدمات درمانی و مراقبتی در منزل با هماهنگی نیروهای واجد صلاحیت.',
    bullets: ['هماهنگی ویزیت و خدمات مجاز', 'پیگیری درخواست خانواده', 'ارائه اطلاعات پیش از اعزام']
  },
  {
    title: 'حمل‌ونقل ویژه', slug: 'transport', icon: BusFront,
    description: 'انتقال سالمندان دارای محدودیت حرکتی با ون مجهز به بالابر یا سامانه جابه‌جایی ویلچر.',
    bullets: ['مناسب برای سالمندان ویلچرنشین', 'ورود و خروج با کمک بالابر خودرو', 'هماهنگی زمان و مسیر پیش از حرکت']
  },
  {
    title: 'کلینیک‌های تخصصی', slug: 'specialist-clinics', icon: Hospital,
    description: 'معرفی و هماهنگی دسترسی به خدمات تخصصی مرتبط با سلامت و توانبخشی سالمندان.',
    bullets: ['مشاوره و ارزیابی تخصصی', 'خدمات توانبخشی و پیگیری', 'راهنمای انتخاب خدمت مناسب']
  }
];

export const centerItems = [
  { title: 'تورهای گردشگری', slug: 'senior-tours', icon: Map, description: 'برنامه‌های گردشگری با توجه به نیازهای حرکتی و رفاهی سالمندان.' },
  { title: 'تفریح و سرگرمی', slug: 'leisure-entertainment', icon: Sparkles, description: 'فعالیت‌های جمعی و اوقات فراغت برای نشاط و تعامل اجتماعی.' },
  { title: 'فعالیت‌های داوطلبانه', slug: 'volunteer-activities', icon: HandHeart, description: 'فرصت مشارکت اجتماعی و انتقال تجربه در فعالیت‌های داوطلبانه.' },
  { title: 'اقامت موقت و بازتوانی', slug: 'respite-rehabilitation', icon: BedDouble, description: 'خدمات اقامت کوتاه‌مدت و برنامه‌های بازتوانی متناسب با شرایط فرد.' },
  { title: 'مرکز نگهداری شبانه‌روزی', slug: 'residential-care', icon: Hospital, description: 'اطلاعات و راهنمای دسترسی به خدمات مراقبت شبانه‌روزی.' },
  { title: 'مراکز روزانه', slug: 'day-care', icon: CalendarDays, description: 'فضایی برای فعالیت، تعامل اجتماعی و دریافت خدمات روزانه.' }
];

export const sectionDetails = {
  'daily-goods': { title: 'کالاهای مصرفی روزمره', parent: 'تأمین کالا', icon: ShoppingBag, description: 'اقلام پرمصرف و کاربردی برای مراقبت و زندگی روزمره سالمندان.', bullets: ['محصولات بهداشتی و مراقبتی', 'اقلام مصرفی روزانه', 'بسته‌های پیشنهادی بر اساس نیاز خانواده'] },
  'special-equipment': { title: 'ملزومات و تجهیزات تخصصی', parent: 'تأمین کالا', icon: Accessibility, description: 'تجهیزات کمک‌حرکتی، ایمنی و مراقبتی برای خانه و محیط‌های خدماتی.', bullets: ['ویلچر، واکر و ابزار کمک‌حرکتی', 'تجهیزات ایمنی حمام و منزل', 'ابزارهای پایش سلامت و مدیریت دارو'] },
  'home-care': serviceItems[0],
  'home-treatment': serviceItems[1],
  'transport': serviceItems[2],
  'specialist-clinics': serviceItems[3],
  'family-rights': { title: 'خانواده سالمندان', parent: 'آموزش', icon: Users, description: 'آموزش خانواده برای همراهی آگاهانه، محترمانه و ایمن با سالمند.', bullets: ['شناخت نیازهای جسمی و روانی', 'ارتباط مؤثر و حل تعارض', 'مناسب‌سازی خانه و برنامه‌ریزی مراقبت'] },
  'senior-carer': { title: 'سالمندیاری', parent: 'آموزش', icon: GraduationCap, description: 'آموزش مهارت‌های موردنیاز برای ارائه خدمات مراقبتی به سالمندان.', bullets: ['مهارت‌های پایه مراقبت', 'اصول اخلاق حرفه‌ای و ارتباط', 'مسیر ارزیابی و دریافت گواهی مهارتی در چارچوب مجوزهای مجموعه'] },
  'health-nutrition': { title: 'سلامت و تغذیه', parent: 'پایگاه دانش', icon: HeartPulse, description: 'محتوای عمومی و آموزشی درباره تغذیه، تحرک و سلامت در سالمندی.', bullets: ['الگوی تغذیه متنوع', 'فعالیت بدنی متناسب با توان فرد', 'زمان مراجعه به متخصص'] },
  'senior-skills': { title: 'مهارت‌های سالمندی', parent: 'پایگاه دانش', icon: Brain, description: 'راهنماهای تقویت استقلال و مهارت‌های کاربردی در زندگی روزمره.', bullets: ['تقویت حافظه و تمرکز', 'مهارت‌های استفاده از فناوری', 'فعالیت‌های شناختی و اجتماعی'] },
  'self-care': { title: 'خودمراقبتی', parent: 'پایگاه دانش', icon: HandHeart, description: 'مجموعه‌ای از راهنماهای ساده برای مراقبت روزمره و حفظ کیفیت زندگی.', bullets: ['روتین سلامت و بهداشت', 'مراقبت از سلامت روان', 'پیگیری منظم نیازهای فردی'] },
  'posters-brochures': { title: 'پوسترها و بروشورها', parent: 'پایگاه دانش', icon: Newspaper, description: 'محتوای تصویری و خلاصه برای آموزش سریع و استفاده در خانه یا مراکز.', bullets: ['راهنماهای تصویری قابل چاپ', 'چک‌لیست‌های مراقبتی', 'پوسترهای آگاهی‌بخشی'] },
  'books-publications': { title: 'انتشارات و کتاب‌ها', parent: 'پایگاه دانش', icon: BookOpen, description: 'کتاب‌ها و منابع منتخب برای آشنایی عمیق‌تر با موضوعات سالمندی.', bullets: ['منابع آموزشی خانواده', 'کتاب‌های مهارت و خودمراقبتی', 'راهنمای انتخاب و مطالعه'] },
  'educational-films': { title: 'فیلم‌های آموزشی', parent: 'پایگاه دانش', icon: Video, description: 'ویدئوهای کوتاه و مرحله‌به‌مرحله برای آموزش مهارت‌های مراقبتی.', bullets: ['آموزش ایمنی در منزل', 'نمایش روش استفاده از تجهیزات', 'ویدئوهای آموزشی خانواده و مراقبان'] },
  'technology-guides': { title: 'پایگاه اطلاع‌رسانی و راهنماها', parent: 'پایگاه دانش', icon: Smartphone, description: 'راهنمای استفاده از فناوری‌ها و ابزارهای کاربردی در زندگی سالمندان.', bullets: ['آشنایی با گجت‌های سالمندی', 'راهنمای استفاده ایمن از ابزارها', 'معرفی خدمات و منابع مرتبط'] },
  'senior-tours': centerItems[0],
  'leisure-entertainment': centerItems[1],
  'volunteer-activities': centerItems[2],
  'respite-rehabilitation': centerItems[3],
  'residential-care': centerItems[4],
  'day-care': centerItems[5]
};
