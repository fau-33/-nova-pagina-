import "./globals.css";
import Topo from "@/componentes/Topo";

export const metadata = {
  title: "Curso Rotas - Exemplo Prático",
  description: "Exemplo Prático de Rotas em Next.js",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
