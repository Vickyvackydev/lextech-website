import { useNavigate } from "react-router-dom";
import Button from "../../button";
import { FaDotCircle } from "react-icons/fa";
import { AllContactApi, deleteContact } from "../../../services";
import { toast } from "react-toastify";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import moment from "moment";
import { useQuery } from "react-query";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export const ENQUIRY_COLUMN = [
  {
    Header: "#",
    Cell: ({ row }: { row: any }) => <span>0{row?.index + 1}</span>,
  },
  {
    Header: "First name",
    accessor: "first_name",
  },
  {
    Header: "Last name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Job title",
    accessor: "job_title",
  },
  {
    Header: "Company Name",
    accessor: "company_name",
  },
  {
    Header: "How did you hear ..",
    accessor: "hear_about_us",
  },
  {
    Header: "Enquiry",
    accessor: "inquiry",
    Cell: ({ row }: { row: any }) => {
      const [showCompleteText, setShowCompleteText] = useState(false);
      return (
        <>
          <div className="relative group">
            <div
              onClick={() => setShowCompleteText(true)}
              className="absolute -top-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <span className="text-gray-500 hover:text-black">•••</span>
            </div>

            <span className="cursor-pointer opacity-100 group-hover:opacity-50">
              {row?.original?.inquiry.length > 20
                ? `${row?.original?.inquiry.slice(0, 20)}...`
                : row?.original?.inquiry}
            </span>
          </div>

          <Dialog
            open={showCompleteText}
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={() => setShowCompleteText(false)}
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <DialogPanel
                  transition
                  className="w-full max-w-md rounded-xl bg-white shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                >
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-black"
                  >
                    Enquiry
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-gray-700">
                    {row?.original?.inquiry}
                  </p>
                  <div className="mt-4">
                    <Button
                      btnStyles="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                      handleClick={() => setShowCompleteText(false)}
                      title="Got it, thanks!"
                      textStyle={""}
                      icon=""
                    />
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </>
      );
    },
  },
];
