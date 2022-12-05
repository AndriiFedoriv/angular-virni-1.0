export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    categoryId: number;
    description: string;
    image: string;
    stock_quantity: number;
  }
  
  export const products = [
    {
      id: 456332,
      name: 'Вечірнє плаття Калуш 2022 Весільний салон Virnist (VIBD0002)',
      price: 799,
      category: 'evening-dress',
      categoryId: 2,
      description: 'Колір: як на фото можливі інші кольори /n Розмір: від 40 до 60 + Де купити вечірні плаття в Калуші? /n Весільний салон Вірність продає вишукані вечірні сукні та плаття для дружок 2022.',
      image: 'https://lh3.googleusercontent.com/M28QMhHi7gAiMHCDrl6dFu8k4DITZdbR1uIS2y6BrUJg9Wh8ODEx_Z1WR_5roZpZiKw65Cf99CUlS0hUKBhdjQLG95fVuAgFUPWn7GLvgkjdphYHPb6nA_fIg9cSq-d4VlKqxjg76HVb0zHpxQy2cwkQeUbNdihNkerBbBL7macYavRuTzS6ekuubXWYOAKpqR7pyChnnkw397F8AmE7UzjUl1VO7Zrb9sPQrjlWSyUjjEhtfm7f4h9xbBmg6M9XjzR2ZdiIGwSAOlCu2aWb0Dk_otlKDsn1YQvLx6Olgta5CnovSfKVhkGLYkglRxIXeu-8h7wUHX2eI72SA7NMhsVngxX6r4kQvWqvNAOTpKYMVeYVS2aUEjv_kbXJQ9SulVKA06fe5e6zdXB6418__uWUex49TzqoV7_EeNuxMnOr6ZOvw2YSoVds3H020jJEnn4Yga0bMgyOmAi4OcGnGKnUj-8uClNCM5H1h2Xkj2Cp64NP4YIQOFa91pWbPQd7nkLzFOOF3rr19yKUDT_5dYEx9UCrr3nOsfedUfbhHZbdQRsuCni_pu80-bFBuJxd8h_8ng7bEx5xdfIS1f4gWFwMe3V0kK3rW9nUB_m6UyLIpQ4JK50f7euIp38-30MKzLGo18o4uB-rIu69HJQ7fYIjQ9jqH3mlrjCsggKvHfi-omiemR7kEruz5QAmbMf2oX9sVikU6znF8jNXWyiEj-pZlR3l5OefG1FL0ZlMabUcgijvsWDmfQLPDxPco3j2zZ9TOvYEzFu-dggvshnoZvZ-06K_a5ZrvgC9ziDwu-wteMoM31fkcI8wOYsMTRfGabdd_KvDjEhowxv-dXIAYsUbWSQPRUhNtMxIdwhtrx0pvKboN94k0WLdK9d8406IzfAN0hep9kC5JQfR1FzSSxEMiO3eidkfMMA_Yyq2oERHAzHJPvZT7VTQc6X2YiaXzR7H4Vo-FIdaLlhmDpKIKNtz84j7EaiLN52IYb9YwqXT0iMEsdReuw=w641-h962-no?authuser=0',
      stock_quantity: 1,
    },
    {
      id: 3561,
      name: 'Вечірня сукня Калуш 2022 Весільний салон Virnist (VIBD0001)',
      price: 699,
      category: 'evening-dress',
      categoryId: 2,
      description: 'Колір: червоний, пудра, капучіно, бузковий, можливі інші кольори /n Розмір: від 40 до 60 + /n Де купити вечірні плаття для дружки в Станісліві? /n Весільний салон Вірність продає вишукані вечірні сукні 2022 для урочистих подій у вашому житті.',
      image: './../assets/img/Evening_Dress_Bridesmaid_2022_Bridal_Salon_Virnist_VIBDMAXAZR.jpg',
      stock_quantity: 1,
    },
    {
      id: 34,
      name: 'Дитяча сукня Калуш 2022 Весільний салон Virnist (VIAB034)',
      price: 299,
      category: 'girl-dress',
      categoryId: 3,
      description: 'Колір: Капучіно, Айворі, Білий /n Розмір: Для дівчат від 2-х років /n Весільний салон в Калуші Вірність продає святкові сукні для дівчат від двох років. Великий вибір суконь для дівчаток в наявності.',
      image: './../assets/img/Girl_Dress_2022_Bridal_Salon_Virnist_VIFM097_a.jpg',
      stock_quantity: 3,
    },
    {
      id: 125,
      name: 'Весільне плаття 2022 Калуш Весільний салон Virnist (VISR125)',
      price: 899,
      category: 'wedding-dress',
      categoryId: 1,
      description: 'Колір: Айворі, Білий /n Розмір: від 40 до 60 + /n Де купити весільні сукні в Калуші? /n Весільний салон Virnist продає дизайнерські весільні плаття 2022, доступні ціни, великий вибір суконь в наявності. /n Де пошити весільну сукню в Івано-Франківській області? /n Весільний магазин Вірність пошиття весільного плаття від трьох робочих днів, фабрична якість, можливо пошиття сукні по фото.',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 5,
    },
    {
      id: 5,
      name: 'Вечірнє плаття Phone XL',
      price: 799,
      category: 'evening-dress',
      categoryId: 2,
      description: 'A large phone with one of the best screens',
      image: './../assets/img/girl-logo.jpg',
      stock_quantity: 1,
    },
    {
      id: 6,
      name: 'Дитяча сукня Phone Mini',
      price: 699,
      category: 'girl-dress',
      categoryId: 3,
      description: 'A great phone with one of the best cameras',
      image: './../assets/img/Evening_Dress_Bridesmaid_2022_Bridal_Salon_Virnist_VIBDMAXAZR.jpg',
      stock_quantity: 1,
    },
    {
      id: 7,
      name: 'Вечірнє плаття Phone Standard',
      price: 299,
      category: 'evening-dress',
      categoryId: 2,
      description: '',
      image: './../assets/img/Girl_Dress_2022_Bridal_Salon_Virnist_VIFM097_a.jpg',
      stock_quantity: 5,
    },
    {
      id: 8,
      name: 'Дитяча сукня dress',
      price: 299,
      category: 'girl-dress',
      categoryId: 3,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 7,
    },
    {
      id: 9,
      name: 'Весільне плаття Phone XL',
      price: 799,
      category: 'wedding-dress',
      categoryId: 1,
      description: 'A large phone with one of the best screens',
      image: './../assets/img/girl-logo.jpg',
      stock_quantity: 1,
    },
    {
      id: 10,
      name: 'Дитяча сукня Phone Mini',
      price: 699,
      category: 'girl-dress',
      categoryId: 3,
      description: 'A great phone with one of the best cameras',
      image: './../assets/img/Evening_Dress_Bridesmaid_2022_Bridal_Salon_Virnist_VIBDMAXAZR.jpg',
      stock_quantity: 1,
    },
    {
      id: 11,
      name: 'Вечірнє плаття Phone Stand',
      price: 299,
      category: 'evening-dress',
      categoryId: 2,
      description: '',
      image: './../assets/img/Girl_Dress_2022_Bridal_Salon_Virnist_VIFM097_a.jpg',
      stock_quantity: 8,
    },
    {
      id: 12,
      name: 'Весільне плаття dress',
      price: 299,
      category: 'wedding-dress',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 0,
    },
    {
      id: 13,
      name: 'Perfume 13',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 80,
    },
    {
      id: 14,
      name: 'Perfume 14',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 5,
    },
    {
      id: 15,
      name: 'Perfume 15',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 2,
    },
    {
      id: 16,
      name: 'Perfume 16',
      price: 299,
      category: 'perfume-nonpareil',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 7,
    },
    {
      id: 17,
      name: 'Весільнi accessories 17',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 0,
    },
    {
      id: 18,
      name: 'Весільнi accessories 18',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 4,
    },
    {
      id: 19,
      name: 'Весільнi accessories 19',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 10,
    },
    {
      id: 20,
      name: 'Весільнi accessories 20',
      price: 299,
      category: 'wedding-accessories',
      categoryId: 1,
      description: '',
      image: './../assets/img/Wedding_Dress_2022_Bridal_Salon_Virnist_VIBF0157_c.jpg',
      stock_quantity: 10,
    }
  ];
  
  