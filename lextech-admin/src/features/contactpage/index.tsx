import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../Layout";
import TableComponent from "../../components/table";
import { enqiuryData, tableData } from "../../constants";
import { ENQUIRY_COLUMN, salesColumns } from "../../components/table/columns";
import Preloader from "../../components/preloader";
import { FaSearch } from "react-icons/fa";
import TableComponentV2 from "../../components/table/tableV2";
import { useQuery } from "react-query";
import { AllContactApi, AllEnquiryApi } from "../../services";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

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
  const { data: contacts, isLoading } = useQuery("contacts", AllContactApi);

  const filterServices = contacts?.filter(
    (item: { full_name: string; inquiry_type: string }) =>
      item.inquiry_type === selectedCategory
  );

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
        {filterServices?.length > 0 ? (
          <TableComponent COLUMNS={salesColumns} DATA={filterServices} />
        ) : isLoading ? (
          <div className="space-y-2 mt-11">
            <div className="flex items-center justify-between bg-gray-200 rounded-md h-10 w-full animate-pulse"></div>

            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-200 rounded-full h-10 w-10 animate-pulse"></div>

                <div className="flex-grow bg-gray-200 h-6 rounded-md animate-pulse"></div>
                <div className="w-20 bg-gray-200 h-6 rounded-md animate-pulse"></div>
                <div className="w-16 bg-gray-200 h-6 rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col mt-10">
            <img
              alt=""
              className="w-[200px] h-[200px]"
              src={"./assets/zoom-empty.svg"}
            />
            <span>No contacts available yet</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const Enquiries = () => {
  const [inQuiryType, setInQuiryType] = useState("product");
  const { data: inquiries, isLoading } = useQuery(
    ["inquiry", inQuiryType],
    () => AllEnquiryApi(inQuiryType)
  );
  const [search, setSearch] = useState("");
  const filterData = inquiries?.filter((item: { first_name: string }) =>
    item?.first_name.toLowerCase().includes(search.toLowerCase())
  );

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
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
          </div>
          <Popover>
            <PopoverButton className="flex text-sm/6 font-semibold hover:bg-[#EDF2F7] w-[30px] h-[30px] rounded-full  items-center justify-center focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
              <img src={"/assets/filter.svg"} alt="" />
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="divide-y  divide-white rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out shadow-lg [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="p-3 flex items-center justify-center flex-col gap-y-2 w-full">
                <a
                  onClick={() => setInQuiryType("service")}
                  className="rounded-lg  w-full  py-2 px-3 transition hover:bg-[#EDF2F7]"
                  href="#"
                >
                  <p className="font-semibold text-gray-500 ">Service</p>
                </a>

                <a
                  onClick={() => setInQuiryType("product")}
                  className="rounded-lg w-full  py-2 px-3 transition hover:bg-[#EDF2F7]"
                  href="#"
                >
                  <p className="font-semibold text-gray-500 ">Product</p>
                </a>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
      {inquiries !== undefined && inquiries?.length > 0 ? (
        <div className="w-full mt-5">
          <TableComponentV2 DATA={filterData} COLUMNS={ENQUIRY_COLUMN} />
        </div>
      ) : isLoading ? (
        <div className="space-y-2 mt-11">
          <div className="flex items-center justify-between bg-gray-200 rounded-md h-10 w-full animate-pulse"></div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-full h-10 w-10 animate-pulse"></div>

              <div className="flex-grow bg-gray-200 h-6 rounded-md animate-pulse"></div>
              <div className="w-20 bg-gray-200 h-6 rounded-md animate-pulse"></div>
              <div className="w-16 bg-gray-200 h-6 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col mt-10">
          <img
            alt=""
            className="w-[200px] h-[200px]"
            src={"./assets/zoom-empty.svg"}
          />
          <span>No enquiries available yet</span>
        </div>
      )}
    </div>
  );
};
