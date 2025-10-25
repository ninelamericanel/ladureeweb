import '../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {

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
