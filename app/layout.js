import "./globals.css";

export const metadata = {
  title: "medElnour",
  description: "medElnour Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
