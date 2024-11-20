import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../Layout";
import TableComponent from "../../components/table";
import { enqiuryData, tableData } from "../../constants";
import { ENQUIRY_COLUMN, salesColumns } from "../../components/table/columns";
import Preloader from "../../ui/preloader";
import { FaSearch } from "react-icons/fa";
import TableComponentV2 from "../../components/table/tableV2";

function ContactPage() {
  const [selectedTab, setSelectedTab] = useState("contacts");
  const [loader, setLoader] = useState(true);

  const switchTabs = () => {
    switch (selectedTab) {
      case "contacts":
        return <ContactInputs />;
        break;
      case "enquiries":
        return <Enquiries />;
      default:
        return <ContactInputs />;
        break;
    }
  };
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(loader);
  }, []);
  return (
    <DashboardLayout>
      {loader ? (
        <Preloader />
      ) : (

        <div className="w-full h-full bg-white rounded px-6 py-7">
          <div className="w-full border-b border-[#EAECF0] flex items-center gap-x-3">
            <span
              onClick={() => setSelectedCategory("service")}
              className={`pb-2 cursor-pointer transition-all duration-300 ${
                selectedCategory === "service"
                  ? "font-medium text-[#101828] text-[14px]  border-b-2 border-[#101828] "
                  : "text-[#98A2B3] font-normal text-[12px]"
              }`}
            >
              Contact Input
            </span>
            <span
              onClick={() => setSelectedCategory("product")}
              className={`pb-2 cursor-pointer transition-all duration-300 ${
                selectedCategory === "product"
                  ? "font-medium text-[#101828] text-[14px]  border-b-2 border-[#101828] "
                  : "text-[#98A2B3] font-normal text-[12px]"
              }`}
            >
 Enquiries
            </span>
          </div>
          <div className="flex flex-col gap-y-4 mt-5">
            <span className="text-[21px] font-bold text-[#4658AC]">
              Data type
            </span>
            <TableComponent COLUMNS={salesColumns} DATA={tableData} />
          </div>

        <div className="flex flex-col gap-y-4">
          <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          {switchTabs()}

        </div>
      )}
    </DashboardLayout>
  );
}

export default ContactPage;

export const Tabs = ({
  setSelectedTab,
  selectedTab,
}: {
  setSelectedTab: (value: string) => void;
  selectedTab: string;
}) => {
  return (
    <div className="w-full border-b border-[#EAECF0] flex items-center gap-x-3">
      <span
        onClick={() => setSelectedTab("contacts")}
        className={`pb-2 cursor-pointer transition-all duration-300 ${
          selectedTab === "contacts"
            ? "font-medium text-[#101828] text-[14px]  border-b-2 border-[#101828] "
            : "text-[#98A2B3] font-normal text-[12px]"
        }`}
      >
        Contact inputs
      </span>
      <span
        onClick={() => setSelectedTab("enquiries")}
        className={`pb-2 cursor-pointer transition-all duration-300 ${
          selectedTab === "enquiries"
            ? "font-medium text-[#101828] text-[14px]  border-b-2 border-[#101828] "
            : "text-[#98A2B3] font-normal text-[12px]"
        }`}
      >
        Enquiries
      </span>
    </div>
  );
};

export const ContactInputs = () => {
  const [selectedCategory, setSelectedCategory] = useState("service");
  return (
    <div className="w-full h-full bg-white rounded px-6 py-7">
      <div className="w-full border-b border-[#EAECF0] flex items-center gap-x-3">
        <span
          onClick={() => setSelectedCategory("service")}
          className={`pb-2 cursor-pointer transition-all duration-300 ${
            selectedCategory === "service"
              ? "font-medium text-[#101828] text-[14px]  border-b-2 border-[#101828] "
              : "text-[#98A2B3] font-normal text-[12px]"
          }`}
        >
          Service
        </span>
        <span
          onClick={() => setSelectedCategory("product")}
          className={`pb-2 cursor-pointer transition-all duration-300 ${
            selectedCategory === "product"
              ? "font-medium text-[#101828] text-[14px]  border-b-2 border-[#101828] "
              : "text-[#98A2B3] font-normal text-[12px]"
          }`}
        >
          Product
        </span>
      </div>
      <div className="flex flex-col gap-y-4 mt-5">
        <span className="text-[21px] font-bold text-[#4658AC]">Data type</span>
        <TableComponent COLUMNS={salesColumns} DATA={tableData} />
      </div>
    </div>
  );
};

export const Enquiries = () => {
  return (
    <div className="w-full h-full bg-white rounded px-6 py-7">
      <div className="flex items-center justify-between">
        <span className="text-[#4A5568] font-normal text-[20px]">
          List of enquiries
        </span>
        <div className="flex items-center gap-x-6 ">
          <div className="w-[228px] px-2 flex items-center gap-x-1 h-[40px] rounded-md border border-[#E2E8F0]">
            <FaSearch className="" size={16.93} color="#CBD5E0" />
            <input
              type="text"
              className="w-full bg-transparent outline-none placeholder:text-[16px] placeholder:text-[#CBD5E0]"
              placeholder="Search list"
            />
          </div>
          <img src={"/assets/filter.svg"} alt="" />
        </div>
      </div>
      <div className="w-full mt-5">
        <TableComponentV2 DATA={enqiuryData} COLUMNS={ENQUIRY_COLUMN} />
      </div>
    </div>
  );
};
