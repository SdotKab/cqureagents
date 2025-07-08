import ClientTopCard from "@/components/cards/ClientTopCard";
import LongClientCard from "@/components/cards/LongClientCard";
import ThreatFeeds from "@/components/tables/ThreatFeeds";


const ClientPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Score and Charts</h1>
          <div className="flex gap-4 justify-between flex-wrap">
            <ClientTopCard type="score" />
            <ClientTopCard type="assets" />
            <ClientTopCard type="personnel" />
          </div>
          <div className="flex gap-4 justify-between flex-wrap mt-4">
            <LongClientCard type="risk" type2="vulernabilties" />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <ThreatFeeds />
      </div>
    </div>
  );
};

export default ClientPage;