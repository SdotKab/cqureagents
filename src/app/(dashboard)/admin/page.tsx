import AdminTopCard from "@/components/cards/adminTopCard";
import CountChart from "@/components/charts/CountChart";
import RadarsChart from "@/components/charts/RadarsChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <AdminTopCard type="team Members" />
          <AdminTopCard type="companies" />
          <AdminTopCard type="contacts" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
            {/* <CountChart /> */}
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <RadarsChart />
            {/* <AttendanceChart /> */}
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          {/* <FinanceChart /> */}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* <EventCalendar />
        <Announcements/> */}
      </div>
    </div>
  );
};

export default AdminPage;