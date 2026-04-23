import React, { useMemo, useState, useEffect } from "react";

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
      { id: 8, title: "Cinematic", url: "https://www.youtube.com/embed/pA4tvwVWKsQ" },
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

  const team = [
    { name: "Sakib S.", role: "Founder & Visual Lead", linkedin: "https://www.linkedin.com/", birthday: "04-30" },
    { name: "M. Bhuiyan", role: "Chief Operating Officer", linkedin: "https://www.linkedin.com/", birthday: "04-23" },
    { name: "Newaz", role: "Chief Strategy Advisor", linkedin: "https://www.linkedin.com/", birthday: "03-01" },
    { name: "Shithil", role: "Post-Production Lead", linkedin: "https://www.linkedin.com/", birthday: "03-19" },
    { name: "M. Hossin", role: "Cyber Security Mentor", linkedin: "https://www.linkedin.com/", birthday: "01-01" },
    { name: "Zinan", role: "Sr. Lead Expert", linkedin: "https://www.linkedin.com/", birthday: "01-01" }
  ];

  const todaysBirthdays = useMemo(() => {
    const now = new Date();
    const key = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    return team.filter((m) => m.birthday === key);
  }, [team]);

  const hasBirthday = todaysBirthdays.length > 0;

  useEffect(() => {
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
    <div className="bg-[#0B0B0F] text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">BabyBee Portfolio</h1>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {portfolio[activeTab].map((item) => {
            const videoId = item.url.split("/embed/")[1].split("?")[0];

            return (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item.url)}
                className="cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={item.title}
                  className="rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="text-center">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={activeVideo}
              className="w-full h-full"
              allowFullScreen
            />
            <button onClick={() => setActiveVideo(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
