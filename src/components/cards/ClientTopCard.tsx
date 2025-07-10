
const ClientTopCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-lg bg-white m-3 border-2 odd:border-slate-500 even:border-zinc-500 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        <span className="text-[10px] px-2 py-1 rounded-full border-2 border-slate-300">
          05/25
        </span>
      </div>
      <div className="flex justify-around items-center mt-2">
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
      </div>
      <div className="flex justify-around items-center mt-2">
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
      </div>
      {/* <h1 className="text-2xl font-semibold my-4 text-">1,234</h1> */}
      
    </div>
  );
};

export default ClientTopCard;