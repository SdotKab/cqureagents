"use client"

import { useState } from "react"
import RiskMgtDash from "@/components/riskmgt/RiskMgtDash"
import RiskListPage from "@/components/riskmgt/RiskMgtTable"

const RiskMgt = () => {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="relative tab-group">
        <div className="flex bg-stone-100 p-0.5 relative rounded-lg" role="tablist">
          <div className="absolute top-1 left-0.5 h-8 bg-white rounded-md shadow-sm transition-all duration-300 transform scale-x-0 translate-x-0 tab-indicator z-0"></div>

          <button
            className={`tab-link text-sm inline-block py-2 px-4 text-stone-800 transition-all duration-300 relative z-1 mr-1 ${
              activeTab === "dashboard" ? "font-bold underline" : ""
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={`tab-link text-sm inline-block py-2 px-4 text-stone-800 transition-all duration-300 relative z-1 mr-1 ${
              activeTab === "list" ? "font-bold underline" : ""
            }`}
            onClick={() => setActiveTab("list")}
          >
            List
          </button>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "dashboard" && <RiskMgtDash />}
        {activeTab === "list" && <RiskListPage />}
      </div>
    </div>
  )
}

export default RiskMgt
