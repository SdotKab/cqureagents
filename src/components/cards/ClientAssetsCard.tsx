import React from 'react'

const ClientAssetsCard = () => {
  return (
    <div className="bg-white border-2 border-slate-500 rounded-lg p-4 m-3 w-full md:w-[100%] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="capitalize text-xs md:text-sm font-medium text-gray-500">Assets</h2>
        <span className="text-[9px] md:text-[10px] px-2 py-1 rounded-full border-2 border-slate-300">
          05/25
        </span>
      </div>

      <table className="w-full text-[10px] md:text-sm text-left table-auto">
        <thead>
          <tr className="text-gray-600 border-b border-slate-200">
            <th className="py-1 px-1 w-1/3">Total</th>
            <th className="py-1 px-1 w-1/3">Unassigned</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-800">
            <td className="py-1 px-1">41</td>
            <td className="py-1 px-1">7</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ClientAssetsCard