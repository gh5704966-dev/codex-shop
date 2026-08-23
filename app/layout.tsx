import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '苔岚 TAIRAN｜当代中式餐厅',
  description: '以江南风物为灵感，在城市里做一桌自然、克制而有温度的菜。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
