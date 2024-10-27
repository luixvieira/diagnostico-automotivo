import "./styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "AutoDiag",
  description: "A plataforma digital para diagnósticos automotivos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body className="min-h-screen flex flex-col">
        {/* Cabeçalho da aplicação */}
        <Header />

        {/* Conteúdo principal */}
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        {/* Rodapé da aplicação */}
        <Footer />
      </body>
    </html>
  );
}
