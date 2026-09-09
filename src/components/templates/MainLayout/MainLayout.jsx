import { Header } from "../../organisms/Header/Header.jsx";
import { Footer } from "../../organisms/Footer/Footer.jsx";

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-canvas text-on-surface">
      <Header />
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24">{children}</main>
      <Footer />
    </div>
  );
}
