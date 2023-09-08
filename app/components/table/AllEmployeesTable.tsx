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
import { getAllEmployees } from "@/app/(...application)/lib/clientApiFns/employeeApi";
import { useMemo, useState } from "react";
import { Search } from "./TableSearchBox";
import { DateTime } from "luxon";
import Link from "next/link";
import { TableSkeleton } from "./TableSkeleton";
import getExpiredOrActiveTag from "@/app/(...application)/lib/helperFns/getExpiredOrActiveTag";
import { getActiveOrExpiredStatus } from "@/app/(...application)/lib/helperFns/dateHelperFns";
import getActiveOrInactiveTag from "@/app/(...application)/lib/helperFns/getActiveOrInactiveTag";

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
      cell: (info) => <p>{info.getValue()}</p>,
      header: () => <h6>Name</h6>,
    }),
    columnHelper.accessor((row) => row?.job?.workStatus, {
      id: "workStatus",
      cell: (info) => getActiveOrInactiveTag(info.getValue()),
      header: () => <h6>Work status</h6>,
    }),
    columnHelper.accessor((row) => row.iqama.iqamaNumber, {
      id: "iqamaNumber",
      cell: (info) => info.getValue(),
      header: () => <h6>Iqama no.</h6>,
    }),
    columnHelper.accessor((row) => row.iqama.iqamaExpiry, {
      id: "iqamaExpiry",
      cell: (info) =>
        info.getValue() ? (
          <p>
            {DateTime.fromJSDate(new Date(String(info.getValue()))).toFormat(
              "dd LLLL, yyyy"
            )}
          </p>
        ) : (
          ""
        ),
      header: () => <h6>Iqama expiry</h6>,
    }),
    columnHelper.accessor((row) => row.iqama.iqamaExpiry, {
      id: "iqamaStatus",
      cell: (info) =>
        getExpiredOrActiveTag(
          getActiveOrExpiredStatus(String(info.getValue()))
        ),
      header: () => <span>Iqama status</span>,
    }),
    columnHelper.accessor((row) => row.employeeId, {
      id: "employeeId",
      cell: (info) => (
        <Link
          href={`/employees/${info.getValue()}`}
          className="py-2 px-4 rounded-full border hover:bg-myDarkBlue hover:text-white"
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
