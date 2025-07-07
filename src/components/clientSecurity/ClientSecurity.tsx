import React from 'react'
import ClientTopCard from '../cards/ClientTopCard'
import TaskScoreBar from '../charts/admin/TaskScoreBar'
import TaskBugBar from '../charts/admin/TaskBugBar'
import EventCalendar from '../charts/admin/EventCalendar'
import Announcements from '../charts/admin/Announcement'


const ClientSecurity = () => {
  return (
    <div className="p-4">
      {/* STAT CARDS */}
      <div className="flex gap-4 justify-between flex-wrap">
        <ClientTopCard type="score" />
        <ClientTopCard type="asset" />
        <ClientTopCard type="risk" />
        <ClientTopCard type="vulnerabilitie" />
      </div>
      <div className="flex gap-4 flex-col py-4 md:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <p className="text-2xl font-semibold">Security</p>
          {/* MIDDLE CHARTS */}
          <div className="flex gap-4 flex-col">
            {/* TASK SCORE BAR CHART */}
            <div className="w-full h-[450px]">
              <TaskScoreBar />
            </div>
            {/* ATTENDANCE CHART */}
            {/* <div className="w-full h-[450px]">
              <RadarsChart />
            </div> */}
          </div>
          {/* BOTTOM CHART */}
          {/* <div className="w-full h-[500px]">
            <FinanceChart />
          </div> */}
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <p className="text-2xl font-semibold">Web Dev</p>
          <div className="flex gap-4 flex-col">
            {/* TASK BUG BAR CHART */}
            <div className="w-full h-[450px]">
              <TaskBugBar />
            </div>
          </div>
            {/* ATTEN
          {/* <EventCalendar />
          <Announcements/> */}
        </div>
      </div>
      <div className="p-4">
        {/* CALENDAR */}
        <EventCalendar />
        {/* ANNOUNCEMENTS */}
        <Announcements />
        {/* PROJECTS TABLE */}
        <div>
          PROJECTS
        </div>
        {/* TEAM MEMBER TABLE */}
        <div>
          TEAM MEMBERS
        </div>
      </div>
    </div>
  )
}

export default ClientSecurity