import { useNavigate } from "react-router-dom";
import Button from "../../button";

export const salesColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell: { row } }: any) => {
      return (
        <div className="flex items-center gap-x-3">
          <img
            src="/icons/nav-arrow-down.svg"
            className="w-[24px] h-[24px]"
            alt=""
          />
          <span className="text-[#2A4365] font-bold text-[16px]">
            {row?.original?.name}
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
          {row?.original?.created_at}
        </span>
      );
    },
  },
  {
    Header: "Actions",
    Cell: (row: any) => {
      const navigate = useNavigate();
      return (
        <Button
          title="View"
          handleClick={() => navigate(row?.original?.id)}
          textStyle="text-[#2A4365] font-bold text-[16px]"
          icon=""
          btnStyles="text-blue-500 border border-gray-300 rounded-md  w-[51px] h-[31px]"
        />
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
    accessor: "enquiry",
    Cell: ({ row }: { row: any }) => (
      <span>
        {row?.original?.enquiry.length > 20
          ? `${row?.original?.enquiry.slice(0, 20)}...`
          : row?.original?.enquiry}
      </span>
    ),
  },
];
