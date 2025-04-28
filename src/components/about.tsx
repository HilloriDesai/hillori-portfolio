import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiRedux,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiRabbitmq,
  SiTerraform,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiClickhouse,
  SiGrafana,
  SiPrometheus,
  SiAnthropic,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import {
  FaDatabase,
  FaServer,
  FaCode,
  FaBrain,
  FaTools,
  FaChartLine,
  FaAws,
} from "react-icons/fa";

const About: React.FC = () => {
  const skills = {
    languages: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "Python", icon: <SiPython className="text-blue-600" /> },
      { name: "SQL", icon: <FaDatabase className="text-blue-700" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-800" /> },
    ],
    frameworks: [
      { name: "React.js", icon: <SiReact className="text-blue-400" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black" />,
      },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-800" />,
      },
      { name: "Django", icon: <SiDjango className="text-green-800" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
    ],
    aiTools: [
      { name: "RAG", icon: <FaBrain className="text-purple-500" /> },
      {
        name: "Prompt Engineering",
        icon: <FaTools className="text-orange-500" />,
      },
      { name: "ThorV2", icon: <FaCode className="text-blue-600" /> },
      { name: "Weaviate", icon: <FaDatabase className="text-blue-700" /> },
      { name: "OpenAI", icon: <TbBrandOpenai className="text-green-600" /> },
      {
        name: "Anthropic",
        icon: <SiAnthropic className="text-purple-600" />,
      },
    ],
    infrastructure: [
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-orange-500" /> },
      { name: "Terraform", icon: <SiTerraform className="text-purple-600" /> },
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
    ],
    databases: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "ClickHouse", icon: <SiClickhouse className="text-blue-700" /> },
    ],
    monitoring: [
      { name: "Grafana", icon: <SiGrafana className="text-orange-500" /> },
      { name: "Prometheus", icon: <SiPrometheus className="text-red-600" /> },
      { name: "Loki", icon: <FaChartLine className="text-blue-500" /> },
    ],
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-section">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">About Me</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I am a passionate software engineer with a love for building
            scalable applications and AI-driven solutions.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            With hands-on experience across frontend, backend, distributed
            systems, and artificial intelligence, I enjoy bringing ideas to life
            by solving complex problems with thoughtful, user-centered designs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Beyond code, I’m an explorer — constantly learning, growing, and
            creating. You’ll often find me reading thought-provoking books,
            sharing knowledge through my YouTube channel, or discovering new
            corners of the world.
          </p>
        </div>
        <div className="flex m-2 my-6">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium mb-3 flex items-center text-gray-700">
                    <FaCode className="mr-2 text-primary-600" /> Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        <span className="mr-1.5">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center text-gray-700">
                    <FaTools className="mr-2 text-primary-600" /> Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        <span className="mr-1.5">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center text-gray-700">
                    <FaBrain className="mr-2 text-primary-600" /> AI/LLM Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.aiTools.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        <span className="mr-1.5">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium mb-3 flex items-center text-gray-700">
                    <FaServer className="mr-2 text-primary-600" />{" "}
                    Infrastructure
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.infrastructure.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        <span className="mr-1.5">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center text-gray-700">
                    <FaDatabase className="mr-2 text-primary-600" /> Databases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        <span className="mr-1.5">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center text-gray-700">
                    <FaChartLine className="mr-2 text-primary-600" /> Monitoring
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.monitoring.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        <span className="mr-1.5">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
