import Theme from "../components/theme";
import Link from "next/link";
import ClientNavMenu from "./clientNavMenu";
import ClientNormalMenu from "./clientNormalMenu";
const ClientHeader = () => {
  return (
    <header className="px-10 py-3 border-b-2 flex items-center justify-between ">
      <div className=" ">
        <Link href="/">
          <b>IBLOG</b>
        </Link>
      </div>
      <nav className="flex items-center border-none gap-3">
        <div className="max-md:hidden min-w-400px mr-6">
          <ClientNormalMenu />
        </div>
        <div className="md:hidden ">
          <ClientNavMenu />
        </div>
        <Theme />
      </nav>
    </header>
  );
};

export default ClientHeader;
