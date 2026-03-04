import { Outlet } from "react-router-dom";
import TopBar from "../components/dashComp/TopBar";
import SideBar from "../components/dashComp/sideBar/SideBar";

function DashboardLayout() {
    return (
      
      <div className="flex">
        
        {/* Side Bar */}
        <SideBar />

        {/* Top Bar + Dashboard */}
        <div className="ml-68 flex-1 flex flex-col min-h-screen bg-[#0a0a0a] text-white">
          <TopBar />
          <main className="p-6">
            <Outlet />
          </main>          
        </div>

      </div>
    );
  }
  
  export default DashboardLayout