import { Bell, Settings } from "lucide-react"

function TopBar (){
    return (
        <div className="h-14 bg-[#2f2f2f] px-6 flex items-center justify-between">
        
            {/* Top Left */}
            <h1 className="text-base font-semibold">
                Dashboard
            </h1>

            {/* Top Right */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#2f2f2f] rounded-full hover:bg-[#3b3b3b] flex items-center justify-center cursor-pointer">
                    <Settings className="w-7 h-7 text text-[#2f2f2f] fill-white"/>
                </div>
                <div className="w-10 h-10 bg-[#2f2f2f] rounded-full hover:bg-[#3b3b3b] flex items-center justify-center cursor-pointer">
                    <div className="relative">
                        <Bell className="w-7 h-7 text text-[#2f2f2f] fill-white"/>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            3
                        </span>
                    </div>
                </div>
                <div className="w-12 h-12 bg-[#2f2f2f] rounded-full hover:bg-[#3b3b3b] flex items-center justify-center cursor-pointer">
                    <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-black text-lg">
                        C
                    </div>
                </div>


            </div>

        </div>
    )
}

export default TopBar