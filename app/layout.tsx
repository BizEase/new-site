import './config/global.css';
import { inter } from './config/fonts';
import Logo from './components/Logo';
import NavBar from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="relative min-h-screen bg-light dark:bg-dark text-blue-900 dark:text-white">
          {/* Conteúdo principal */}
          <div className="relative z-10">
            <header className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Logo />
              </div>
              <NavBar />
            </header>
            <div className="flex-grow flex items-center justify-center px-6 py-16 md:px-8 md:py-8">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
