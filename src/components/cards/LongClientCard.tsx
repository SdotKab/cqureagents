import Image from 'next/image'

const LongClientCard = ({ type, type2 }: { type: string; type2: string }) => {
  return (
    <div className="rounded-lg bg-white justify-around border-2 odd:border-slate-500 even:border-zinc-500 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-1 rounded-full border-2 border-slate-300">
          05/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-row justify-around">
        <div>
            <p className="text-2xl font-semibold my-4 text-">1,234</p>
            <p className="capitalize text-sm font-medium">{type}</p>
        </div>        
        <div className="inline-block h-[80px] min-h-[1em] w-0.5 self-stretch bg-slate-300"></div>
        <div className="">
            <p className="text-2xl font-semibold my-4 text-">1,234</p>
            <p className="capitalize text-sm font-medium">{type2}</p>
        </div>
      </div>
    </div>
  )
}

export default LongClientCard