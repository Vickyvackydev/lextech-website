import { AiOutlineMenu } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";

interface header {
  onMenu?: any;
}

function Header(props: header) {
  const location = useLocation();
  const page = location.pathname.split("/").pop();

  return (
    <header className="px-7 py-5 flex justify-between items-center shadow-sm mb-6">
      <div className="flex items-center">
        <span className="text-[#71717A]  text-[16px] font-medium">
          Super Admin
        </span>
        <img src="/icons/chevron-right.svg" alt="" />
        <span className="text-[#4658AC] font-medium text-[16px]">
          {page?.charAt(0).toUpperCase() + page?.slice(1)! || "Home"} Dashboard
        </span>
      </div>
      <img src="/icons/notification.svg" alt="" />
    </header>
  );
}

export default Header;
