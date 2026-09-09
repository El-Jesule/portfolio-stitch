import { Header } from "../../organisms/Header/Header.jsx";
import { Footer } from "../../organisms/Footer/Footer.jsx";
import { Container } from "../../atoms/Container/Container.jsx";
import { ScrollToTop } from "../../atoms/ScrollToTop/ScrollToTop.jsx";

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-canvas text-on-surface">
      <ScrollToTop />
      <Header />
      <main className="flex-grow w-full py-16 md:py-24">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
