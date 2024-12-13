import Logo from "../icons/Logo"
import XIcon from "../icons/XIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

function Sidebar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
<div className="flex tex-2xl pl-4 pt-6 items-center">
    <div className="pr-2 text-purple-600">
    <Logo  />
    </div>
    Brainly
</div>
        <div className="pt-8 pl-4">
            <SidebarItem text="X" icon={<XIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
  )
}

export default Sidebar