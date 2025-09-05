"use client";

import { useState } from "react";

const categories = [
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "databases", name: "Databases" },
  { id: "cms", name: "CMS" },
  { id: "cloud-testing", name: "Cloud/Testing" },
  { id: "devops", name: "DevOps" },
];

const technologies = [
  { name: "Node.js", image: "/icons/node.svg", category: "backend" },
  {
    name: "PHP",
    image: "https://www.php.net/images/logos/new-php-logo.svg",
    category: "backend",
  },
  {
    name: "MySQL",
    image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    category: "backend",
  },
  { name: "Java", image: "/icons/java.svg", category: "backend" },
  { name: ".NET", image: "/icons/dotnet.svg", category: "backend" },
  {
    name: "Python",
    image: "https://www.python.org/static/community_logos/python-logo.png",
    category: "backend",
  },
  { name: "Ruby on Rails", image: "/icons/rails.svg", category: "backend" },
  { name: "Go", image: "/icons/golang.svg", category: "backend" },
  { name: "MongoDB", image: "/icons/mongo.svg", category: "backend" },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("backend");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-gray-800">
            Our
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Tech Stack
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="font-inter font-semibold text-sm sm:text-base leading-6 transition-colors px-3 py-1"
            >
              <span
                className={`block ${
                  activeCategory === category.id
                    ? "text-transparent bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] bg-clip-text"
                    : "text-gray-500"
                }`}
              >
                {category.name}
              </span>
              {activeCategory === category.id && (
                <span className="block w-6 h-[2px] bg-green-700 mx-auto mt-1"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
          {technologies.slice(0, 5).map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center p-4 sm:p-6 bg-white "
            >
              <img
                src={tech.image}
                alt={tech.name}
                className={`h-14 sm:h-16 object-contain ${
                  tech.name === "Node.js" ? "sm:h-20" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
          {technologies.slice(5).map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center p-4 bg-white "
            >
              <img
                src={tech.image}
                alt={tech.name}
                className={`h-14 sm:h-16 object-contain ${
                  ["MongoDB", "Ruby on Rails"].includes(tech.name)
                    ? "sm:h-20"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
