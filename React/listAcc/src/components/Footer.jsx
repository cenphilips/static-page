import github from "../assets/icons/githubicon.png"
import facebook from "../assets/icons/facebookIcon.png"
import instagram from "../assets/icons/instagramicon.png"
import twitter from "../assets/icons/twittericon.png"




function Footer (){
    return (
        <footer className="bg-[#111827] text-gray-300 pt-16">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 gap-10 pb-12 flex items-center justify-between">

                {/* Brand Column */}
                <div className="md:col-span-2 space-y-4">
                    <div>
                        <h2 className="text-white text-xl font-bold tracking-wide">
                            listacctech
                        </h2>
                        <span className="block text-xs tracking-widest text-gray-400">
                            ACADEMY
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        High quality coding education
                    </p>
                    <div className="flex gap-5 text-gray-400">
                        <div>
                            <a href="#">
                                <img src={github} alt="Logo" className="w-6 h-auto invert"/>
                            </a>                            
                        </div>
                        <div>
                            <a href="#">
                                <img src={facebook} alt="Logo" className="w-6 h-auto invert"/>
                            </a>                          
                        </div>
                        <div>
                            <a href="#">
                                <img src={instagram} alt="Logo" className="w-6 h-auto invert"/>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={twitter} alt="Logo" className="w-6 h-auto invert"/>
                            </a>
                        </div>
                    </div>
                </div>


                {/* About Us */}
                <div>
                    <h3 className="text-[#d0d4da] font-semibold mb-4">
                        About Us
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Success stories</a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-[#d0d4da] font-semibold mb-4">
                        Support
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Contribute</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Contact Us</a>
                        </li>                        
                    </ul>                    
                </div>

                {/* Our Programs */}
                <div>
                    <h3 className="text-[#d0d4da] font-semibold mb-4">
                        Our Programs
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">Learning Paths</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Available Classes</a>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-[#d0d4da] font-semibold mb-4">
                        Legal
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">Terms</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">Privacy</a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-[#020617]"></div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto px-6 py-6">
                <p className="text-sm text-[#d1d5db]">
                    © 2026 Listacc Tech Academy All rights reserved
                </p>
            </div>

        </footer>
    )
}

export default Footer