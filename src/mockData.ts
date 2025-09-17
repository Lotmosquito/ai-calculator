// src/mockData.ts

export interface Service {
  id: string;
  Category: string;
  Subcategory: string;
  Name: string;
  Description: string;
  Price_Earth: number;
  Price_Mars: number;
}

export const services: Service[] = [
  {
    id: 'logo_std',
    Category: 'Изображения',
    Subcategory: 'Айдентика',
    Name: 'Логотип (пакет "Стандарт")',
    Description: 'Основная, альтернативная и монохромная версии.',
    Price_Earth: 150,
    Price_Mars: 2500,
  },
  {
    id: 'reels_30s',
    Category: 'Видео',
    Subcategory: 'Контент для соцсетей',
    Name: 'Короткий ролик Reels/Shorts (до 30с)',
    Description: 'Быстрый и динамичный ролик для вертикальных форматов.',
    Price_Earth: 100,
    Price_Mars: 1500,
  },
  {
    id: 'neuro_photo',
    Category: 'Изображения',
    Subcategory: 'Контент для соцсетей',
    Name: 'Нейрофотосессия',
    Description: 'Набор из 20 стилизованных изображений в едином стиле.',
    Price_Earth: 80,
    Price_Mars: 1200,
  },
  {
    id: 'anim_logo',
    Category: 'Видео',
    Subcategory: 'Айдентика',
    Name: 'Анимированный логотип (до 7с)',
    Description: 'Эффектное появление вашего логотипа для видео.',
    Price_Earth: 80,
    Price_Mars: 800,
  },
];
