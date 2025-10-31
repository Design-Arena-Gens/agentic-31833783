import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Implementasi Sistem Kasir Digital Terintegrasi QRIS pada UMKM Kuliner di Kabupaten Polewali Mandar",
  description:
    "Latar belakang proposal dengan rujukan jurnal ilmiah Indonesia dalam format APA.",
  metadataBase: new URL("https://agentic-31833783.vercel.app"),
  openGraph: {
    title:
      "Implementasi Sistem Kasir Digital Terintegrasi QRIS pada UMKM Kuliner di Kabupaten Polewali Mandar",
    description:
      "Latar belakang proposal dengan rujukan jurnal ilmiah Indonesia dalam format APA.",
    url: "https://agentic-31833783.vercel.app",
    siteName: "Latar Belakang Proposal",
    type: "article"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <main className="page">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
