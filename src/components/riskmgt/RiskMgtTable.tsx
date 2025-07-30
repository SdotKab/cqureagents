import Pagination from '@/components/tables/Pagination'
import Table from '@/components/tables/Tables'
import TableSearch from '@/components/tables/TableSearch'
import { riskmgtData } from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link';
import photo from "./profile.png"

type RiskMgt = {
  id: number;
  desc: string;
  categories: string;
  owner: string;
  inherent: string;
  treatment: string;
  residual: string;
  status: string;
};

const columns = [
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Categories",
    accessor: "categories",
    className: "hidden md:table-cell",
  },
  {
    header: "Owner",
    accessor: "owner",
    className: "hidden md:table-cell",
  },
  {
    header: "Inherent",
    accessor: "inherent",
    className: "hidden lg:table-cell",
  },
  {
    header: "Treatment",
    accessor: "treatment",
    className: "hidden lg:table-cell",
  },
  {
    header: "Residual",
    accessor: "residual",
    className: "hidden lg:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden lg:table-cell",
  },
];


const RiskListPage = () => {
      const renderRow = (item: RiskMgt) => (
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
          <h2 className="font-semibold">{item.desc}</h2>
          {/* <p className="text-xs text-gray-500">{item.email}</p> */}
        </div>
      </td>
      <td className="hidden md:table-cell">{item.categories}</td>
      <td className="hidden md:table-cell">{item.owner}</td>
      <td className="hidden md:table-cell">{item.inherent}</td>
      <td className="hidden md:table-cell">{item.treatment}</td>
      <td className="hidden md:table-cell">{item.residual}</td>
      <td className="hidden md:table-cell">{item.status}</td>



      {/* <td> */}
        {/* <div className="flex items-center gap-2">
          <Link href={`/list/personnel/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link> */}
          {/* {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="teacher" type="delete" id={item.id}/>
          )} */}
        {/* </div>
      </td> */}
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Risk Management List</h1>
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
      <Table columns={columns} renderRow={renderRow} data={riskmgtData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default RiskListPage