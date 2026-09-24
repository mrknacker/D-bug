import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../@/components/ui/dropdown-menu"
import { CreditCard, LogOut, User, UsersRound } from "lucide-react"


function SidebarFooterMenu({openTrigger}){
return (
  <DropdownMenu>
    <DropdownMenuTrigger className={`w-full`}>
      {openTrigger}
    </DropdownMenuTrigger>
    <DropdownMenuContent className={`dropdown-menu`}>
      <DropdownMenuGroup>

        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuItem>
          <User color="white" />Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard color="white" /> Billing
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>

        <DropdownMenuItem>
          <UsersRound color="white" />
          Team
        </DropdownMenuItem>

        <DropdownMenuItem variant="destructive">
          <LogOut />
          Logout
        </DropdownMenuItem>

      </DropdownMenuGroup>
    </DropdownMenuContent>
</DropdownMenu>
)
}

export default SidebarFooterMenu