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
