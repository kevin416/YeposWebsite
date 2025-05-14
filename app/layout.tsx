import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageSwitch from './components/LanguageSwitch';
import { languages } from './i18n/settings';
import { dir } from 'i18next';
import { getTranslation } from './i18n/server';

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "YEPOS - Professional Software Development",
  description: "Professional software development services including website development, mobile apps, enterprise systems, and intelligent solutions.",
};

async function Header({ lng }: { lng: string }) {
  const { t } = await getTranslation(lng);
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href={`/${lng}`} className="text-2xl font-bold text-gray-900">
                YEPOS
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                {t('nav.services')}
              </a>
              <a href="#solutions" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                {t('nav.solutions')}
              </a>
              <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                {t('nav.contact')}
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}

async function Footer({ lng }: { lng: string }) {
  const { t } = await getTranslation(lng);
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">YEPOS</h3>
            <p className="mt-4 text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">{t('nav.services')}</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-white">{t('nav.solutions')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">{t('nav.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{t('contact.title')}</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>{t('contact.info.email')}</li>
              <li>{t('contact.info.phone')}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Yepos. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
  params: { lng }
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)} className="scroll-smooth">
      <body className={inter.className}>
        <Header lng={lng} />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer lng={lng} />
      </body>
    </html>
  );
}
