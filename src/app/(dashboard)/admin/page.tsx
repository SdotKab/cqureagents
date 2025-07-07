import AdminTopCard from "@/components/cards/AdminTopCard";
import Announcements from "@/components/charts/admin/Announcement";
import EventCalendar from "@/components/charts/admin/EventCalendar";
import TaskBugBar from "@/components/charts/admin/TaskBugBar";
import TaskScoreBar from "@/components/charts/admin/TaskScoreBar";
import CountChart from "@/components/charts/CountChart";
import RadarsChart from "@/components/charts/RadarsChart";

const AdminPage = () => {
  return (
    <div className="p-4">
      {/* STAT CARDS */}
      <div className="flex gap-4 justify-between flex-wrap">
        <AdminTopCard type="client" />
        <AdminTopCard type="project" />
        <AdminTopCard type="task" />
      </div>
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
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
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
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
  );
};

export default AdminPage;