import {
    BookOpen,
    LayoutGrid,
    Library,
    ClipboardList,
    GraduationCap,
    CreditCard,
    Bookmark,
    User,
    Settings,
    HelpCircle,
} from "lucide-react"

function SideBar(){

    const SidebarItem = ({icon: Icon, label, active}) =>(
            <div
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer transition
                            ${active? "bg-blue-500 text-white font-semibold" :"text-gray-300 hover:bg-[#2f2f2f]"}
                            `}
            >
                <Icon className="w-4 h-4 "/>
                <span>{label}</span>
            </div>
    )

    return (

        <aside className="fixed h-screen w-68 bg-[#1a1a1a] border-r border-[#2e2e2e] flex flex-col overflow-y-auto pb-4">

            {/* User Info */}
            <div className="p-4">
                <h2 className="text-white text-lg">
                    Cen Philips
                </h2>
                <p className="text-sm text-gray-400">
                    Student
                </p>
                
            </div>
            
            {/* Divider */}
            <div className="border-b border-[#4f4f4f]"></div>

            {/* Main Menu */}
            <nav className="flex flex-col h-full pt-2 px-3">
                {/* Top */}
                <div className="flex-1 overflow-y-auto space-y-1 ">
                    <SidebarItem icon={LayoutGrid} label="Dashboard" active/>
                    <SidebarItem icon={BookOpen} label="My Learning"/>
                    <SidebarItem icon={Library} label="My Classes"/>
                    <SidebarItem icon={ClipboardList} label="Assignments"/>
                    <SidebarItem icon={GraduationCap} label="Certificates"/>
                    <SidebarItem icon={CreditCard} label="Payments"/>
                    <SidebarItem icon={Bookmark} label="Bookmarks"/>
                </div>

                {/* Bottom */}
                <div className="space-y-1  pb-3 border-t border-[#4f4f4f]">
                    <SidebarItem icon={User} label="Profile"/>
                    <SidebarItem icon={Settings} label="Settings"/>
                    <SidebarItem icon={HelpCircle} label="Help & Support"/>
                </div>
            </nav>
        </aside>
    )

}

export default SideBar