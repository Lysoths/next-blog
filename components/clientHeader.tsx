import Theme from "../components/theme";
import Link from "next/link";
import ClientNavMenu from "./clientNavMenu";
const ClientHeader = () => {
  return (
    <header className="px-4 py-2 border-b-2 flex items-center justify-between ">
      <div className="">
        <Link href="/">
          <b>IBLOG</b>
        </Link>
      </div>
      <nav className="flex items-center border-none gap-3">
        <ClientNavMenu />
        <Theme />
      </nav>
    </header>
  );
};

export default ClientHeader;
