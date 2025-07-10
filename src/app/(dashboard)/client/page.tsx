import ClientAssetsCard from "@/components/cards/ClientAssetsCard";
import ClientComplianceCard from "@/components/cards/ClientComplianceCard";
import ClientDashScoreCard from "@/components/cards/ClientDashScoreCard";
import ClientPersonnelCard from "@/components/cards/ClientPersonnelCard";
import ClientRisksCard from "@/components/cards/ClientRisksCard";
import ClientTopCard from "@/components/cards/ClientTopCard";
import ClientVulCard from "@/components/cards/ClientVulCard";
import LongClientCard from "@/components/cards/LongClientCard";
import SampleCard from "@/components/cards/SampleCard";
import RadarsChart from "@/components/charts/RadarsChart";
import RiskHeatMatrix from "@/components/charts/RiskHeatMatrix";
import ThreatFeeds from "@/components/tables/ThreatFeeds";


const ClientPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-2 rounded-md">
          <h1 className="text-xl font-semibold p-4">Score and Charts</h1>
          <div className="h-full w-full bg-white p-2 rounded-md md:flex md:flex-row">
            <div className="md:w-1/2">
              <ClientDashScoreCard />
              <ClientRisksCard />
              <ClientVulCard />
              <ClientPersonnelCard />
              <ClientAssetsCard />
            </div>
            <div className="md:w-1/2">
              <RadarsChart />
              <ClientComplianceCard />
            </div>
          </div>
              <RiskHeatMatrix />
              <SampleCard />
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