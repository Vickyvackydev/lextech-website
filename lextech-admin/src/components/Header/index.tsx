import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  onMenu?: () => void; // Function to trigger sidebar
}

function Header(props: HeaderProps) {
  const location = useLocation();
  const page = location.pathname.split("/").pop();

  return (
    <header className="px-7 py-5 flex justify-between items-center shadow-sm mb-6">
      {/* Left Section */}
      <div className="flex items-center">
        <span className="text-[#71717A] text-[16px] font-medium">
          Super Admin
        </span>
        <img src="/icons/chevron-right.svg" alt="" />
        <span className="text-[#4658AC] font-medium text-[16px]">
          {page?.charAt(0).toUpperCase() + page?.slice(1)! || "Home"} Dashboard
        </span>
      </div>

      {/* Hamburger Menu: Visible only on Mobile */}
      <button
        onClick={props.onMenu}
        className="lg:hidden block p-2 text-gray-700 focus:outline-none"
      >
        <AiOutlineMenu size={24} />
      </button>
    </header>
  );
}

export default Header;
