import { 
    GraduationCap,
    CheckCircle2,
    TrendingUp,
    ClipboardList,
    Award,
    DollarSign,
 } from "lucide-react";


 const stats = [
    { label: "Active Classes", value: "0", icon: GraduationCap, color: "bg-blue-500"},
    { label: "Completed", value: "0", icon: CheckCircle2, color: "bg-green-500"},
    { label: "Average Progress", value: "0", icon: TrendingUp, color: "bg-purple-500"},
    { label: "Pending Assignment", value: "0", icon: ClipboardList, color: "bg-orange-500"},
    { label: "Certificates", value: "0", icon: Award, color: "bg-green-600"},
    { label: "Pending Payments", value: "0", icon: DollarSign, color: "bg-green-400"},
 ]

 function DashboardCards () {

    return (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((item, i) => (
                <div
                    key={i}
                    className="bg-[#292929] p-4 rounded-2xl shadow-md shadow-[#1c1c1c] transition-transform hover:-translate-y-1 hover:shadow-none flex flex-col gap-4"
                >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}> 
                             <item.icon className=" w-5 h-5 text-black"/>
                        </div>

                        <h2 className="text-2xl font-semibold">
                            {item.value}
                        </h2>

                        <p className="text-[#b3b3b3] text-sm">
                            {item.label}
                        </p>

                </div>

                
            ))}
            
        </div>
    )

 }

 export default DashboardCards