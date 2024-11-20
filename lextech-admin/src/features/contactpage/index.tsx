import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../Layout";
import TableComponent from "../../components/table";
import { tableData } from "../../constants";
import { salesColumns } from "../../components/table/columns";
import Preloader from "../../ui/preloader";

function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState("service");
  const [loader, setLoader] = useState(true);

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
        </div>
      )}
    </DashboardLayout>
  );
}

export default ContactPage;
