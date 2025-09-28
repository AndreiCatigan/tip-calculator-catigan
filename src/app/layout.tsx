import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Frontend Mentor Tip Calculator App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[Space Mono] bg-[hsl(185,41%,84%)]">
        {children}
      </body>
    </html>
  );
}
