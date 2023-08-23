import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { AxiosError } from "axios";
import { getAllEmployees } from "@/app/clientApiFns/employeeApi";
import { useMemo, useState } from "react";
import { Search } from "./TableSearchBox";
import { DateTime } from "luxon";
import Link from "next/link";
import { TableSkeleton } from "./TableSkeleton";
import classNames from "classnames";

const EmployeeTable = () => {
  const [filtering, setFiltering] = useState("");
  const { data, isSuccess, isLoading, status } = useQuery<
    Employee[],
    AxiosError
  >({
    queryKey: ["get-employees"],
    queryFn: getAllEmployees,
  });

  const columnHelper = createColumnHelper<Employee>();

  const tableColumns = [
    columnHelper.accessor((row) => row.personal.fullName, {
      id: "fullName",
      cell: (info) => info.getValue(),
      header: () => <h6>Name</h6>,
    }),
    columnHelper.accessor((row) => row.iqama.iqamaNumber, {
      id: "iqamaNumber",
      cell: (info) => info.getValue(),
      header: () => <h6>Iqama number</h6>,
    }),
    columnHelper.accessor((row) => row.iqama.iqamaExpiry, {
      id: "iqamaExpiry",
      cell: (info) => info.getValue(),
      header: () => <h6>Iqama expiry</h6>,
    }),
    columnHelper.accessor((row) => row.iqama.iqamaStatus, {
      id: "iqamaStatus",
      cell: (info) => (
        <span
          className={classNames([
            "rounded-full p-2",
            { "bg-green-100 text-green-700": info.getValue() === "active" },
            { "bg-red-100 text-red-700": info.getValue() === "expired" },
          ])}
        >
          {info.getValue()}
        </span>
      ),
      header: () => <span>Iqama status</span>,
    }),
    columnHelper.accessor((row) => row.employeeId, {
      id: "employeeId",
      header: () => <h6>More details</h6>,
      cell: (info) => (
        <Link
          href={`/employees/${info.getValue()}`}
          className="px-4 p-2 rounded-full text-myLightBlue border border-myLightBlue hover:bg-myLightBlue hover:text-white"
        >
          View
        </Link>
      ),
    }),
  ];

  const table = useReactTable({
    columns: useMemo(() => tableColumns, []),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    data: isSuccess ? data : [],
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  const content = (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-myDarkBlue">Employees</h1>

        <Search setFiltering={setFiltering} />
      </div>

      <table className="border-separate px-8 border-spacing-y-8  border bg-white border-slate-300 rounded-lg">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th className=" text-myDarkBlue font-medium text-xl text-left">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody className="rounded-lg">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className="text-myDarkBlue mb-2 text-left"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      {status === "error" && <p>Error</p>}
      {isLoading ? <TableSkeleton /> : content}
    </>
  );
};

export default EmployeeTable;
