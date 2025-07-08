import Image from 'next/image'

const LongClientCard = ({ type, type2 }: { type: string; type2: string }) => {
  return (
    <div className="rounded-xl bg-white border-1 odd:border-slate-500 even:border-zinc-500 p-2 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] px-2 py-1 rounded-full text-purple-600 border-2 border-slate-300">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-row justify-around">
        <div>
            <h1 className="text-2xl font-semibold my-4 text-">1,234</h1>
            <h2 className="capitalize text-sm font-medium">{type}</h2>
        </div>
        <div>
            <h1 className="text-2xl font-semibold my-4 text-">1,234</h1>
            <h2 className="capitalize text-sm font-medium">{type2}</h2>
        </div>
      </div>
    </div>
  )
}

export default LongClientCard