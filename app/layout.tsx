import '../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'La Durée',
  description: 'Парижская кондитерская — La Durée'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
