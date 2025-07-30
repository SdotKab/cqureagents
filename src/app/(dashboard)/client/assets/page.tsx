import Pagination from '@/components/tables/Pagination'
import Table from '@/components/tables/Tables'
import TableSearch from '@/components/tables/TableSearch'
import { assetsData } from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link';
import photo from "./profile.png"

type Asset = {
  id: number;
  assetId: string;
  name: string;
  os_version: string;
  last_patch: string;
  check_in: string;
  source: string,
  owner: string;
  vendor?: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Asset Id",
    accessor: "assetId",
    className: "hidden md:table-cell",
  },
  {
    header: "Name",
    accessor: "name",
    className: "hidden md:table-cell",
  },
  {
    header: "Last CheckIn",
    accessor: "check_in",
    className: "hidden md:table-cell",
  },
  {
    header: "OS Version",
    accessor: "os_version",
    className: "hidden md:table-cell",
  },
  {
    header: "Source",
    accessor: "source",
    className: "hidden lg:table-cell",
  },
  {
    header: "Owner",
    accessor: "owner",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];


const AssetsListPage = () => {
      const renderRow = (item: Asset) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        {/* <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
        <div className="flex flex-col">
          <h2 className="font-semibold">{item.owner}</h2>
          <p className="text-xs text-gray-500">{item.name}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.assetId}</td>
      <td className="hidden md:table-cell">{item.os_version}</td>
      <td className="hidden md:table-cell">{item.last_patch}</td>
      <td className="hidden md:table-cell">{item.source}</td>
      <td className="hidden md:table-cell">{item.check_in}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/assets/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {/* {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="teacher" type="delete" id={item.id}/>
          )} */}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Assets</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {/* {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="teacher" type="create"/>
            )} */}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assetsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default AssetsListPage