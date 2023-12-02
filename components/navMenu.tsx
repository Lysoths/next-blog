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
const NavMenu = () => {
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
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link href="/dashboard/addProject">Add new project</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default NavMenu;
