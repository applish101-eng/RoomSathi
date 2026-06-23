import { UserKey } from "lucide-react";
import Link from "next/link";
const Hostbutton = () => {
  return (
    <Link
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-black hidden sm:block"
        >
          <span className="flex items-center gap-3">
            {" "}
            <UserKey className="w-4 h-4" /> <p> Become a Host</p>
          </span>
        </Link>
  )
}

export default Hostbutton