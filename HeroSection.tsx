import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden w-full max-w-[100vw] py-24 bg-white text-center">
            <div className="container mx-auto px-4 relative z-10">

                {/* Hero Showcase Flex Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16 relative perspective-1500">

                    {/* Left Card (Small) */}
                    <div className="hero-video-card 
                        w-[280px] h-[500px] md:w-[200px] md:h-[355px] 
                        rounded-2xl overflow-hidden shadow-xl bg-black relative transform transition-all duration-300 ease-in-out
                        md:scale-90 md:-rotate-6 md:translate-y-8 md:z-0
                        opacity-90 hover:opacity-100 hover:scale-100 hover:z-20
                        mb-[-60px] md:mb-0 z-10
                    ">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="https://billo.app/wp-content/uploads/2025/04/5-Health_Wellness_111465_Alexis_California_4.93.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                            <div className="flex items-center gap-2 text-white text-xs font-semibold">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-6 h-6 rounded-full border border-white" />
                                <span>@alexis.ai</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-[10px] font-bold">ROAS 4.2x</div>
                        </div>
                    </div>

                    {/* Center Card (Main) */}
                    <div className="hero-video-card 
                        w-[300px] h-[533px] md:w-[240px] md:h-[426px] 
                        rounded-2xl overflow-hidden shadow-2xl bg-black relative transform transition-all duration-300 ease-in-out
                        z-20 md:z-10 border-4 border-yellow-400 shadow-yellow-400/25
                        hover:scale-105 hover:-translate-y-2
                        mb-[-60px] md:mb-0
                    ">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="https://billo.app/wp-content/uploads/2025/04/4-Regan-UK-cosmetics.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                            <div className="flex items-center gap-2 text-white text-xs font-semibold">
                                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" className="w-6 h-6 rounded-full border border-white" />
                                <span>@regan.glam</span>
                            </div>
                            <div className="bg-yellow-400 text-black px-2 py-1 rounded-md text-[10px] font-bold">CTR +145%</div>
                        </div>
                    </div>

                    {/* Right Card (Small) */}
                    <div className="hero-video-card 
                        w-[280px] h-[500px] md:w-[200px] md:h-[355px] 
                        rounded-2xl overflow-hidden shadow-xl bg-black relative transform transition-all duration-300 ease-in-out
                        md:scale-90 md:rotate-6 md:translate-y-8 md:z-0
                        opacity-90 hover:opacity-100 hover:scale-100 hover:z-20
                        z-30 md:z-0
                    ">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="https://billo.app/wp-content/uploads/2025/04/8-Home_Lifestyle_139191_Kerry_Pennsylvania_4.97.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                            <div className="flex items-center gap-2 text-white text-xs font-semibold">
                                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" className="w-6 h-6 rounded-full border border-white" />
                                <span>@kerry.home</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-[10px] font-bold">Conv. 3.8%</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
