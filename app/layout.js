import "./globals.css";
import Header from "./(components)/Header";

export const metadata = {
  title: "medElnour",
  description: "medElnour Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen w-full font-poppins bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white items-center overflow-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
