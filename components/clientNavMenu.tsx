import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { TiThMenuOutline } from "react-icons/ti";
const ClientNavMenu = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <TiThMenuOutline size={22} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/Projects">Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/About">My Skills</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/Contact">Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ClientNavMenu;
