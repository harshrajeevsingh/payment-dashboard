import SideNav from "@/app/UI/SideNav/sideNav";
import Dashboard from "./UI/Dashboard/dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-lightGray">
      <div className="relative w-full flex-none md:w-[244px]">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <Dashboard />
      </div>
    </main>
  );
}
