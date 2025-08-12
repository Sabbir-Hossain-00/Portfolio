const skills = [
  {
    title: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Powerful scripting language I use to create dynamic and interactive web experiences.",
  },
  {
    title: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "My favorite library for building modern, fast, and responsive user interfaces.",
  },
  {
    title: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "Backend runtime I use to build scalable APIs and server-side logic.",
  },
  {
    title: "HTML5",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "The foundation of every webpage I build, structured for SEO and accessibility.",
  },
  {
    title: "CSS3",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "I use CSS and utility-first frameworks like Tailwind to create beautiful designs.",
  },
  {
    title: "Tailwind CSS",
    image: "https://i.ibb.co/tTfnBYVt/pngwing-com.png",
    description: "My go-to utility-first CSS framework to build fast and modern UIs.",
  },
  {
    title: "Bootstrap",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    description: "A sleek, responsive CSS framework I use for fast front-end prototyping.",
  },
  {
    title: "Firebase",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description: "Backend-as-a-Service I use for authentication, hosting, and real-time databases.",
  },
  {
    title: "GitHub",
    image: "https://i.ibb.co/JWg6vfTh/pngfind-com-github-logo-png-1766942.png",
    description: "My primary platform for version control and collaboration using Git.",
  },
  {
    title: "Express.js",
    image: "https://i.ibb.co/Kj4rySzd/pngfind-com-pc-master-race-png-1363736.png",
    description: "Minimal and fast Node.js framework I use to build RESTful APIs.",
  },
  {
    title: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "My preferred NoSQL database for flexible and scalable data storage.",
  },
  {
    title: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "Design tool I use to prototype and collaborate on UI/UX before development.",
  },
];


export const Skills = () => {
  return (
    <section
      id="skills"
      className=" py-10 flex flex-col items-center"
    >
      <h2 className="text-4xl font-semibold  mb-20 text-center">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8  w-full ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card bg-[#151516] border border-gray-800 shadow-md hover:shadow-xl transition duration-300 text-white"
          >
            <figure className="px-4 pt-6">
              <img src={skill.image} alt={skill.title} className="w-20 h-20 object-contain" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-xl  font-semibold">{skill.title}</h3>
              <p className=" text-sm">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
