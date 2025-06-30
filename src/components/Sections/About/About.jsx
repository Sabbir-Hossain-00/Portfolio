export const About = () => {
  return (
    <section
      className=" py-20  flex lg:flex-row-reverse  items-center flex-col-reverse justify-between gap-20"
    >
      <div className="lg:w-1/2 space-y-8 ">
        <h2 className="text-3xl font-semibold ">About Me</h2>

        <div className="space-y-4 text-lg ">
          <p>I'm a passionate web developer who enjoys solving real-world problems with code. I love building fast, user-friendly apps using tools like React, Node.js, and MongoDB. My journey began with curiosity, and over time I’ve grown by creating full-stack projects and learning how tech can make life easier. I'm inspired by how developers use technology to improve lives — that’s what keeps me motivated every day.</p>
          <p className=" hidden xl:block">What drives me the most is seeing how technology can truly transform lives. I'm inspired by developers who build solutions that improve access, efficiency, and everyday convenience — and I aspire to do the same. With every line of code, I aim to create tools that are both useful and impactful.</p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-start">
        <img src="/webdev.webp" className="w-full" />
      </div>
    </section>
  );
};
