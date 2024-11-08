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
        <main className="flex min-h-screen flex-col bg-light dark:bg-dark bg-cover bg-center bg-no-repeat text-blue-900 dark:text-white">
          <header className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <NavBar />
          </header>
          <div className="flex-grow flex items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
