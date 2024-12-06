import { useNavigate } from "react-router-dom";
import Button from "../../button";
import { FaDotCircle } from "react-icons/fa";
import { deleteContact } from "../../../services";
import { toast } from "react-toastify";
import { useState } from "react";
import { PulseLoader } from "react-spinners";

export const salesColumns = [
  {
    Header: "Name",
    accessor: "full_name",
    Cell: ({ cell: { row } }: any) => {
      return (
        <div className="flex items-center gap-x-3">
          {/* <img
            src="/icons/nav-arrow-down.svg"
            className="w-[24px] h-[24px]"
            alt=""
          /> */}
          <FaDotCircle size={10} />
          <span className="text-[#2A4365] font-bold text-[16px]">
            {row?.original?.full_name}
          </span>
        </div>
      );
    },
  },
  {
    Header: "Created at",
    accessor: "created_at",
    Cell: ({ cell: { row } }: any) => {
      return (
        <span className="text-[#2A4365] font-bold text-[16px]">
          {row?.original?.createdAt}
        </span>
      );
    },
  },
  {
    Header: "Actions",
    Cell: ({ cell: { row } }: any) => {
      const navigate = useNavigate();
      const [loading, setLoading] = useState(false);
      const handleDelete = async (id: string | number) => {
        setLoading(true);
        try {
          const response = await deleteContact(id);
          if (response) {
            toast.success("Contact has being removed");
          }
        } catch (error) {
          toast.error("Action failed");
          console.log(id);
        } finally {
          setLoading(false);
        }
      };
      return (
        <>
          {loading ? (
            <PulseLoader size={10} color="red" />
          ) : (
            <Button
              title="Remove"
              handleClick={() => handleDelete(row?.original?.id)}
              textStyle="text-red-500 font-bold text-[16px]"
              icon=""
              btnStyles="border w-fit border-gray-300 rounded-md h-fit px-3 py-1"
            />
          )}
        </>
      );
    },
  },
];

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
    accessor: "how_did_you_hear",
  },
  {
    Header: "Enquiry",
    accessor: "inquiry",
    Cell: ({ row }: { row: any }) => (
      <span>
        {row?.original?.inquiry.length > 20
          ? `${row?.original?.inquiry.slice(0, 20)}...`
          : row?.original?.inquiry}
      </span>
    ),
  },
];
