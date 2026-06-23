import Navmenu from "@/components/navbar/Navmenu";
import Logo from "@/components/navbar/Logo";
import Hostbutton from "./Hostbutton";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-100 border-b border-hairline">
      <div className="max-w-[100rem] mx-auto flex items-center justify-between h-20 px-8">
        <Logo />
        <div className="flex items-center gap-6">
          <Hostbutton />
          <Navmenu />
        </div>
      </div>
    </nav>
  );
}
