const products = [
  {
    id: 1,
    name: 'Alsater T-Shirt',
    nameAr: 'تيشيرت الساتر',
    price: 39,
    originalPrice: null,
    currency: 'DT',
    category: 'clothing',
    inStock: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['#e3cabc', '#000000', '#63616d'],
    images: [
      '/assets/Alsater T-Shirt/1.webp',
      '/assets/Alsater T-Shirt/2.webp',
      '/assets/Alsater T-Shirt/3.webp',
      '/assets/Alsater T-Shirt/4.webp',
      '/assets/Alsater T-Shirt/5.webp',
      '/assets/Alsater T-Shirt/6.webp',
      '/assets/Alsater T-Shirt/7.webp',
      '/assets/Alsater T-Shirt/8.webp',
      '/assets/Alsater T-Shirt/9.webp',
      '/assets/Alsater T-Shirt/10.webp'
    ],
    description: 'Premium quality Islamic t-shirt',
    descriptionAr: 'تيشيرت إسلامي بجودة عالية',
    pricing: {
      single: 39,
      double: { price: 70, savings: 8 },
      triple: { price: 100, savings: 17 }
    }
  },
  {
    id: 2,
    name: 'Awra Cover (Without Logo)',
    nameAr: 'ساتر العورة (بدون شعار)',
    price: 29,
    originalPrice: 39,
    currency: 'DT',
    category: 'awra-cover',
    inStock: false,
    isBestSeller: false,
    sizes: ['S-XL'],
    colors: [],
    images: [
      '/assets/Awracover/1.webp',
      '/assets/Awracover/2.webp',
      '/assets/Awracover/3.webp',
      '/assets/Awracover/4.webp'
    ],
    description: 'Modesty cover for Muslim men during swimming, sports, and prayer',
    descriptionAr: 'ساتر العورة هو منتج مبتكر مقدم من علامة الساتر، صُمّم خصيصًا لتوفير الستر والراحة للرجل المسلم أثناء ممارسة الأنشطة اليومية مثل السباحة، والرياضة، وحتى الصلاة. يأتي على شكل حزام قماشي رفيع ومرن، يغطي المنطقة ما بين السُّرّة وأعلى الخصر، بما يتوافق مع الضوابط الشرعية للستر.',
    features: [
      'خفيف الوزن ولا يعيق الحركة',
      'قماش عالي الجودة، مقاوم للماء والعرق',
      'مرن ويتناسب مع مختلف مقاسات الجسم',
      'يمكن ارتداؤه أسفل الشورت أو اللباس الرياضي دون أن يظهر',
      'سهل الغسل وسريع الجفاف'
    ],
    idealFor: [
      'الرياضيين',
      'السباحين',
      'طلاب المدارس والجامعات',
      'الرحلات والمخيمات',
      'الاستخدام اليومي لمن يبحث عن مزيد من الستر'
    ]
  },
  {
    id: 3,
    name: 'Black Classic Awra Cover',
    nameAr: 'ساتر العورة الكلاسيكي الأسود',
    price: 23.9,
    originalPrice: 39,
    currency: 'DT',
    category: 'awra-cover',
    inStock: false,
    isBestSeller: false,
    sizes: ['S-XL'],
    colors: ['#000000'],
    images: [
      '/assets/BlackClassicAwraCover/1.webp',
      '/assets/BlackClassicAwraCover/2.webp',
      '/assets/BlackClassicAwraCover/3.webp',
      '/assets/BlackClassicAwraCover/4.webp'
    ],
    description: 'Classic black modesty cover',
    descriptionAr: 'ساتر العورة الكلاسيكي باللون الأسود',
    features: [
      'خفيف الوزن ولا يعيق الحركة',
      'قماش عالي الجودة، مقاوم للماء والعرق',
      'مرن ويتناسب مع مختلف مقاسات الجسم',
      'يمكن ارتداؤه أسفل الشورت أو اللباس الرياضي دون أن يظهر',
      'سهل الغسل وسريع الجفاف'
    ]
  },
  {
    id: 4,
    name: 'Black Premium Awra Cover',
    nameAr: 'ساتر العورة البريميوم الأسود',
    price: 23.9,
    originalPrice: 39,
    currency: 'DT',
    category: 'awra-cover',
    inStock: true,
    isBestSeller: true,
    sizes: ['S-L', 'XL-XXXXL'],
    colors: ['#000000'],
    images: [
      '/assets/BlackPremiumAwraCover/1.webp',
      '/assets/BlackPremiumAwraCover/2.webp',
      '/assets/BlackPremiumAwraCover/3.webp'
    ],
    description: 'Premium black modesty cover with enhanced quality',
    descriptionAr: 'ساتر العورة البريميوم باللون الأسود بجودة محسنة',
    sizeNote: 'مقاس واحد يناسب من S إلى XL',
    features: [
      'خفيف الوزن ولا يعيق الحركة',
      'قماش عالي الجودة، مقاوم للماء والعرق',
      'مرن ويتناسب مع مختلف مقاسات الجسم',
      'يمكن ارتداؤه أسفل الشورت أو اللباس الرياضي دون أن يظهر',
      'سهل الغسل وسريع الجفاف'
    ]
  },
  {
    id: 5,
    name: 'Green Classic Awra Cover',
    nameAr: 'ساتر العورة الكلاسيكي الأخضر',
    price: 23.9,
    originalPrice: 39,
    currency: 'DT',
    category: 'awra-cover',
    inStock: false,
    isBestSeller: false,
    sizes: ['S-XL'],
    colors: ['#2d5016'],
    images: [
      '/assets/GreenClassicAwraCover/1.webp',
      '/assets/GreenClassicAwraCover/2.webp',
      '/assets/GreenClassicAwraCover/3.webp',
      '/assets/GreenClassicAwraCover/4.webp'
    ],
    description: 'Classic green modesty cover',
    descriptionAr: 'ساتر العورة الكلاسيكي باللون الأخضر',
    sizeNote: 'مقاس واحد يناسب من S إلى XL',
    features: [
      'خفيف الوزن ولا يعيق الحركة',
      'قماش عالي الجودة، مقاوم للماء والعرق',
      'مرن ويتناسب مع مختلف مقاسات الجسم',
      'يمكن ارتداؤه أسفل الشورت أو اللباس الرياضي دون أن يظهر',
      'سهل الغسل وسريع الجفاف'
    ]
  }
];

export default products;
