// import React from 'react'

const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];

function HeroSection() {
  return (
    <section id="home" className="app-container pt-24 pb-12 overflow-hidden sm:overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div class="space-y-6"> 
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-light">
            <span className="gradient-text">Artifical Intelligence</span>
            <br />
            for a Smarter Future
           </h1>
           <p className="text-lg text-gray-600 max-w-lg">Discover how artificial intelligence is transforming industries and creating new opportunities for growth  and innovation.</p> 
           <div className="flex flex-col sm:flex-row gap-4 pt-4">
             <a href="#" className="btn-primary">Explore Ai Solutions</a>
             <a href="#" className="btn-outline">Learn More</a>
           </div>
           <div className="pt-4 flex items-center space-x-4">
            <div className="flex">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`User ${index + 1}`}
                  className="avatar -ml-2"
                />
                
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">Trusted by{" "}<span className="font-bold text-primary">+10.000</span>{" "}People Worldwide</p>
           </div>
        </div>

        {/* Right */}
          <div className="relative w-full h-80 md:h-[600px]">
            <img
              alt="hero section"
              className="w-full h-full object-cover rounded-2xl"
              src="https://images.unsplash.com/photo-1651601787600-40ad979813ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE3fHxmdXR1cmUlMjBhaSUyMGltYWdlcyUyMDhrfGVufDB8fDB8fHww"
              />
              <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
              <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
          </div>
      </div>
    </section>
  )
}

export default HeroSection
