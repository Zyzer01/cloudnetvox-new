import { Archivo } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';
import DomainContextProvider from '@/context/DomainContext';
import PageWarapper from '@/components/PageWarapper';
import TopBanner from '@/components/TopBanner';
import NavBar from '@/components/NavBar';


const archivo = Archivo({ subsets: ['latin'], display: 'swap', });

export const metadata = {
  title: 'Cloudnetvox',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <DomainContextProvider>
          <PageWarapper>
            <TopBanner />
            {/* <NavBar /> */}
            {children}
            <Footer />
          </PageWarapper>
        </DomainContextProvider>
      </body>
    </html>
  );
}
