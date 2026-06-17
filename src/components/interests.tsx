import React from "react";
import {
  FaYoutube,
  FaPodcast,
  FaPlane,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

interface TravelLocation {
  city: string;
  country: string;
  coordinates: [number, number];
  year: string;
}

const travelLocations: TravelLocation[] = [
  { city: "Western Karnataka", country: "India", coordinates: [13.3409, 74.7421], year: "2024" },
  { city: "Kerala", country: "India", coordinates: [10.1632, 76.6413], year: "2023" },
  { city: "Bali", country: "Indonesia", coordinates: [8.4095, -115.1889], year: "2023" },
  { city: "Bastar", country: "India", coordinates: [19.1071, 81.9535], year: "2022" },
  { city: "Kashmir", country: "India", coordinates: [33.2778, -75.3412], year: "2016" },
  { city: "Andaman & Nicobar", country: "India", coordinates: [10.7449, 92.5], year: "2007" },
];

const InterestCard: React.FC<{
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  children: React.ReactNode;
}> = ({ icon, iconBg, title, children }) => (
  <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
    <div className="flex items-center mb-4">
      <div className={`${iconBg} p-3 rounded-full mr-4`}>{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    {children}
  </div>
);

const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-20 bg-white">
      <div className="container-section">
        <p className="section-eyebrow">Beyond work</p>
        <h2 className="section-title mb-12">Interests & hobbies.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InterestCard
            icon={<FaYoutube className="text-red-600 text-2xl" />}
            iconBg="bg-red-50"
            title="YouTube Channel"
          >
            <p className="text-gray-600 mb-4">
              I run a YouTube channel where I share videos about chasing dreams,
              science, tech and more. Subscribe to stay updated with my latest
              content!
            </p>
            <a
              href="https://www.youtube.com/@philosafars"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Visit Channel
            </a>
          </InterestCard>

          <InterestCard
            icon={<FaPodcast className="text-purple-600 text-2xl" />}
            iconBg="bg-purple-50"
            title="Podcast"
          >
            <p className="text-gray-600 mb-4">
              I did a podcast with my fellow Jagriti Yatri as the host, on my
              journey and lessons learned. Do listen to it if you would be
              interested in the journey of someone who wants to make a
              difference in the world.
            </p>
            <a
              href="https://www.youtube.com/watch?v=V3zfYxTUaM0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Listen Now
            </a>
          </InterestCard>

          <InterestCard
            icon={<FaPlane className="text-teal-600 text-2xl" />}
            iconBg="bg-teal-50"
            title="Travel"
          >
            <p className="text-gray-600 mb-4">
              I love exploring new places and experiencing different cultures.
              Here are some of the places I have visited:
            </p>
            <div className="flex flex-wrap gap-2">
              {travelLocations.map((location, index) => (
                <span key={index} className="technology-badge">
                  {location.city}
                </span>
              ))}
            </div>
          </InterestCard>

          <InterestCard
            icon={<FaInstagram className="text-pink-500 text-2xl" />}
            iconBg="bg-pink-50"
            title="Instagram"
          >
            <p className="text-gray-600 mb-4">
              Follow my Instagram page for behind-the-scenes content from my
              YouTube channel and personal life.
            </p>
            <a
              href="https://www.instagram.com/philosafars"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Follow Me
            </a>
          </InterestCard>

          <InterestCard
            icon={<FaHeart className="text-rose-500 text-2xl" />}
            iconBg="bg-rose-50"
            title="Family Time"
          >
            <p className="text-gray-600">
              I cherish spending quality time with my family. Whether it&apos;s
              weekend getaways, family dinners, or just relaxing together, these
              moments are precious to me.
            </p>
          </InterestCard>
        </div>
      </div>
    </section>
  );
};

export default Interests;
