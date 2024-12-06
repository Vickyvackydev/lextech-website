import React, { useMemo } from "react";
import { useTable, usePagination, Column } from "react-table";

interface TableData {
  [key: string]: any;
}

interface TableProps {
  DATA: TableData[];
  COLUMNS: Column<TableData>[];
}

function TableComponent({ DATA, COLUMNS }: TableProps) {
  const columns = useMemo(() => COLUMNS, [COLUMNS]);
  const data = useMemo(() => DATA, [DATA]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    page, // For pagination
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    pageOptions,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    setPageSize,
    // @ts-ignore
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      initialState: { pageIndex: 0 }, // Start from page 0
    },
    usePagination
  );

  return (
    <div className="w-full">
      {/* Table */}
      <table
        {...getTableProps()}
        className="w-full border-collapse table-auto text-right"
      >
        <thead className="w-full text-start">
          {headerGroups.map((headerGroup: any) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="border-b border-dashed"
            >
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className="whitespace-nowrap text-left pl-6 pr-3 pt-3 pb-2 text-sm font-semibold"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="px-8">
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="text-left border-b border-dashed"
              >
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    className="pl-6 pr-3 py-3 text-sm text-gray-700"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end items-center py-4 gap-x-6 mt-6">
        <span className="text-[14px] font-medium text-[#344054] flex items-center gap-x-1">
          Page{" "}
          <span className="w-[27px] h-[27px] rounded-md flex justify-center items-center border border-[#D0D5DD]">
            {pageIndex + 1}
          </span>
          of
          <span>{pageOptions.length}</span>
        </span>
        <div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="mr-2 px-4 py-2 border text-[#344054] font-normal text-[14px] border-[#D0D5DD] rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="mr-2 px-4 py-2 border text-[#344054] font-normal text-[14px] border-[#D0D5DD] rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div>
          <label>
            <span className="text-[#344054] font-medium text-[14px]">
              Entries per page:{" "}
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="ml-2 border rounded px-2 py-1"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
