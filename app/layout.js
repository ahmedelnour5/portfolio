import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "medElnour",
  description: "medElnour Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen w-full font-poppins bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white items-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <div className="w-full mx-auto sticky top-0">
      <div className="container mx-auto flex justify-between  p-5 items-end flex-wrap">
        <Link href={"/"} className="hover:cursor-pointer hover:text-red-600">
          <span className="text-4xl font-semibold">medElnour</span>
        </Link>

        <Nav />
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="hidden md:flex">
      <Link className="mx-4 hover:border-b-2 border-white" href={"/experience"}>
        Experience
      </Link>
      <Link className="mx-4 hover:border-b-2 border-white" href={"/projects"}>
        Projects
      </Link>
      <Link className="mx-4 hover:border-b-2 border-white" href={"/skills"}>
        Skills
      </Link>
      <Link className="mx-4 hover:border-b-2 border-white" href={"/contact"}>
        Contact
      </Link>
    </div>
  );
};
