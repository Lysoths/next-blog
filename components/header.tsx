import NavMenu from "./navMenu";
import Theme from "../components/theme";
import Link from "next/link";
const Header = () => {
  return (
    <header className="py-2 px-4 border-b-2 flex items-center justify-between ">
      <div className="">
        <Link href="/dashboard">
          <b>IBLOG</b>
        </Link>
      </div>
      <nav className="flex items-center border-none gap-3">
        <NavMenu />
        <Theme />
      </nav>
    </header>
  );
};

export default Header;
