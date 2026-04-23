import React, { useMemo, useState } from "react";

// NOTE: Import fonts in your project
// Inter (English): <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
// Hind Siliguri (Bengali): <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet">

export default function BabyBeePortfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState("long");
  const [showNotification, setShowNotification] = useState(false);

  const portfolio = {
    long: [
      { id: 1, title: "Virgo Activation", url: "https://www.youtube.com/embed/k52XCGJTNis" },
      { id: 2, title: "Infinity Mega Mall Campaign", url: "https://www.youtube.com/embed/EMYGkNmYhv8" },
      { id: 3, title: "Virgo Activation Teaser", url: "https://www.youtube.com/embed/hyOK73jeKzc" },
      { id: 4, title: "LeReve Kids", url: "https://www.youtube.com/embed/8mEr92Flwm8" },
      { id: 5, title: "Yellow Activation", url: "https://www.youtube.com/embed/eDFHErCYxto" },
      { id: 6, title: "Talking Head", url: "https://www.youtube.com/embed/GRXumI4AfZE" },
      { id: 7, title: "Talking Head", url: "https://www.youtube.com/embed/LV8Iew4irP4" },
      { id: 8, title: "Cinematic", url: "https://www.youtube.com/embed/pA4tvwVWKsQ&t" },
      { id: 9, title: "Podcast Intro", url: "https://www.youtube.com/embed/bTGq2Cyqj2I" }
    ],
    short: [
      { id: 10, title: "Talking Head Reel", url: "https://www.youtube.com/embed/w_UwaIsEgZU" },
      { id: 11, title: "Talking Head Reel", url: "https://www.youtube.com/embed/btLZ-RiXS8w" },
      { id: 12, title: "Fashion Reel", url: "https://www.youtube.com/embed/fH0qe7HxvRU" },
      { id: 13, title: "Fashion Reel", url: "https://www.youtube.com/embed/-93UdvcMQrk" },
      { id: 14, title: "UGC", url: "https://www.youtube.com/embed/nS8pCWJJZdQ" },
      { id: 15, title: "UGC", url: "https://www.youtube.com/embed/hVZXml2_vpA" },
      { id: 16, title: "UGC", url: "https://www.youtube.com/embed/tsomcoJKKuY" },
      { id: 17, title: "UGC", url: "https://www.youtube.com/embed/yGqBZ9DTcwE" },
      { id: 18, title: "Talking Head Reel", url: "https://www.youtube.com/embed/JDLyXdoFwkI" }
    ]
  };

  // Add birthdays (MM-DD)
  const team = [
    { name: "Sakib S.", role: "Founder & Visual Lead", linkedin: "https://www.linkedin.com/", birthday: "04-30" },
    { name: "M. Bhuiyan", role: "Chief Operating Officer", linkedin: "https://www.linkedin.com/", birthday: "04-23" },
    { name: "Newaz", role: "Chief Strategy Advisor", linkedin: "https://www.linkedin.com/", birthday: "03-01" },
    { name: "Shithil", role: "Post-Production Lead", linkedin: "https://www.linkedin.com/", birthday: "03-19" },
    { name: "M. Hossin", role: "Cyber Security Mentor", linkedin: "https://www.linkedin.com/", birthday: "01-01" }
    { name: "Zinan", role: "Sr. Lead Expert", linkedin: "https://www.linkedin.com/", birthday: "01-01"}
  ];

  // Compute today's birthdays
  const todaysBirthdays = useMemo(() => {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const key = `${mm}-${dd}`;
    return team.filter((m) => m.birthday === key);
  }, [team]);

  const hasBirthday = todaysBirthdays.length > 0;

  // Scroll spy effect
  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0B0B0F] text-white font-['Inter','Hind_Siliguri']">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-lg font-semibold tracking-wide">BabyBee</h1>

          <div className="flex items-center gap-4">
            {/* Notification Button */}
            <button
              onClick={() => setShowNotification(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-xs text-white/80 hover:bg-white/20 transition relative"
            >
              <div className="w-6 h-6 rounded-full bg-white/20" />
              <span>🔔 Events</span>
              {hasBirthday && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white" />
              )}
            </button>

            <nav className="flex gap-6 text-sm text-white/60">
              {[
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "team", label: "Our Team" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative hover:text-white transition"
                >
                  {item.label}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#FFA500] transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

        {/* Accent Glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FFA500] opacity-20 blur-[120px] rounded-full" />
        {/* Secondary Glow */}
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#FFA500] opacity-10 blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight max-w-3xl">
            High-Converting Visual Content for Modern Brands
          </h1>
          <p className="mt-6 text-white/50 text-lg max-w-xl">
            Strategic video editing and motion design built for brands that value quality, clarity, and measurable impact.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#portfolio" className="px-6 py-3 rounded-full text-sm font-medium backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:bg-white/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition transform hover:scale-[1.02] active:scale-[0.98] active:bg-white/15 relative overflow-hidden">
              Explore Portfolio
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full text-sm backdrop-blur-xl bg-white/5 border border-white/20 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/10 hover:text-white transition transform hover:scale-[1.02] active:scale-[0.98] active:bg-white/10 relative overflow-hidden">
              Get Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-6 text-white/50 leading-relaxed">
            BabyBee is a visual production studio focused on delivering high-quality video content for modern brands. We combine storytelling, motion, and strategy to create content that not only looks premium but performs across platforms.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Services</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {["Video Editing", "Motion Graphics", "Social Media Ads", "Branding"]
              .map((service, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition hover:scale-[1.02]"
                >
                  <h3 className="text-lg font-medium">{service}</h3>
                  <p className="text-sm text-white/40 mt-2">
                    Clean execution with a premium visual standard.
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Portfolio</h2>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setActiveTab("long")}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                activeTab === "long"
                  ? "bg-white text-black"
                  : "border-white/20 text-white/60 hover:text-white"
              }`}
            >
              Long Form
            </button>
            <button
              onClick={() => setActiveTab("short")}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                activeTab === "short"
                  ? "bg-white text-black"
                  : "border-white/20 text-white/60 hover:text-white"
              }`}
            >
              Short Form
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {portfolio[activeTab].map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.url)}
                className="group relative aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden cursor-pointer transition transform hover:scale-[1.03]"
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm group-hover:scale-110 transition">
                  <img
                    src={`https://img.youtube.com/vi/${item.url.split('/embed/')[1]}/hqdefault.jpg`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Brands We’ve Collaborated With</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12 opacity-70">
            {["Brand 1","Brand 2","Brand 3","Brand 4","Brand 5"].map((brand,i)=>(
              <div key={i} className="h-16 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition">
                <span className="text-sm text-white/40">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Team</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:bg-white/10 transition cursor-pointer"
                onClick={() => window.open(member.linkedin, "_blank")}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white/10 mb-4" />
                <h3 className="text-sm font-medium">{member.name}</h3>
                <p className="text-xs text-white/40 mt-1">{member.role}</p>

                <div className="mt-4 flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 text-xs rounded-full border border-white/20 text-white/70 hover:bg-white/10 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold">Start Your Next Project</h2>
        <p className="mt-4 text-white/50">
          Let’s collaborate and build visuals that elevate your brand presence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-full text-sm backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:bg-white/20 transition transform hover:scale-[1.02] active:scale-[0.98] active:bg-white/15 relative overflow-hidden">WhatsApp</button>
          <button className="px-6 py-3 rounded-full text-sm backdrop-blur-xl bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 transition">Facebook</button>
          <button className="px-6 py-3 rounded-full text-sm backdrop-blur-xl bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 transition">Instagram</button>
          <button className="px-6 py-3 rounded-full text-sm backdrop-blur-xl bg-white/5 border border-white/20 text-white/80 hover:bg-white/10 transition">Email</button>
        </div>
      </section>

      {/* FOOTER */}
      {/* FINAL POLISH DIVIDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

      <footer className="py-8 text-center text-white/30 text-sm border-t border-white/10">
        © {new Date().getFullYear()} BabyBee Studios. All rights reserved.
      </footer>

      {/* NOTIFICATION PANEL */}
      {showNotification && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <h3 className="text-lg font-medium">🔔 BabyBee Notifications</h3>

            {hasBirthday ? (
              <div className="mt-4 space-y-4">
                {todaysBirthdays.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20" />
                      <div>
                        <p className="text-sm font-medium">🎉 Happy Birthday, {m.name}</p>
                        <p className="text-xs text-white/40">{m.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-white/50">
                      Wishing you a great year ahead. Keep creating impact.
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-white/50 text-sm">
                No birthdays today. Check back later for team celebrations.
              </p>
            )}

            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
{activeVideo && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="relative w-full max-w-4xl aspect-video">
      
      <iframe
        src={activeVideo}
        className="w-full h-full rounded-xl"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      <button
        onClick={() => setActiveVideo(null)}
        className="absolute -top-10 right-0 text-white text-sm"
      >
        ✕ Close
      </button>

    </div>
  </div>
)}
    </div>
  );
}
