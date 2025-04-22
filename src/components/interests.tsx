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
  {
    city: "Western Karnataka",
    country: "India",
    coordinates: [13.3409, 74.7421],
    year: "2024",
  },
  {
    city: "Kerala",
    country: "India",
    coordinates: [10.1632, 76.6413],
    year: "2023",
  },
  {
    city: "Bali",
    country: "Indonesia",
    coordinates: [8.4095, -115.1889],
    year: "2023",
  },
  {
    city: "Bastar",
    country: "India",
    coordinates: [19.1071, 81.9535],
    year: "2022",
  },
  {
    city: "Kashmir",
    country: "India",
    coordinates: [33.2778, -75.3412],
    year: "2016",
  },

  {
    city: "Andaman & Nicobar",
    country: "India",
    coordinates: [10.7449, 92.5],
    year: "2007",
  },
];

const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-16 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title text-center mb-12">Interests & Hobbies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* YouTube Channel */}
          <div className="bg-white bg-primary-50 p-6 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 bg-red-100 p-3 rounded-full mr-4">
                <FaYoutube className="text-red-700 text-red-100 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">YouTube Channel</h3>
            </div>
            <p className="text-gray-600 text-gray-300 mb-4">
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
          </div>

          {/* Podcast */}
          <div className="bg-white bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 bg-purple-100 p-3 rounded-full mr-4">
                <FaPodcast className="text-purple-400 text-purple-100 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Podcast</h3>
            </div>
            <p className="text-gray-600 text-gray-300 mb-4">
              I did a podcast with my fellow Jagriti Yatri as the host, on my
              journey and lessons learned. Do listen to it if you are would be
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
          </div>

          {/* Travel */}
          <div className="bg-white bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 bg-blue-100 p-3 rounded-full mr-4">
                <FaPlane className="text-blue-400 text-blue-100 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Travel</h3>
            </div>
            <p className="text-gray-600 text-gray-300 mb-4">
              I love exploring new places and experiencing different cultures.
              Here are some of the places I have visited:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {travelLocations.map((location, index) => (
                <span key={index} className="technology-badge">
                  {location.city}
                  {/* ({location.year}) */}
                </span>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-white bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-pink-100 bg-pink-100 p-3 rounded-full mr-4">
                <FaInstagram className="text-pink-400 text-pink-100 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Instagram</h3>
            </div>
            <p className="text-gray-600 text-gray-300 mb-4">
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
          </div>

          {/* Family Time */}
          <div className="bg-white bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 bg-green-100 p-3 rounded-full mr-4">
                <FaHeart className="text-green-400 text-green-100 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Family Time</h3>
            </div>
            <p className="text-gray-600 text-gray-300 mb-4">
              I cherish spending quality time with my family. Whether it&apos;s
              weekend getaways, family dinners, or just relaxing together, these
              moments are precious to me.
            </p>
            {/* <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-100 bg-gray-600 h-24 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-gray-400">
                  Family Photo
                </span>
              </div>
              <div className="bg-gray-100 bg-gray-600 h-24 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-gray-400">
                  Family Photo
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
