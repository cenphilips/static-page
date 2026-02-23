import { Play, RefreshCcw } from "lucide-react";


function Dashboard() {
    return (
        <div className="space-y-6">

            {/* Welcome Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-xl text-black font-semibold">
                        CP
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">
                            Welcome back, Cen!
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Ready to continue learning?
                        </p>
                    </div>
                </div>

                {/* Refresh Icon + Continue Learning Button*/}
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition">
                        <RefreshCcw className="w-4 h-4 text-gray-300"/>
                    </button>
                    <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-black font-semibold text-sm px-6 py-3 rounded-full transition">
                        <Play className="w-4 h-4 fill-black stroke-black"/>
                        Continue Learning
                    </button>
                </div>
            </div>

        </div>
    );
  }
  
  export default Dashboard