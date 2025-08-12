import { FaGraduationCap } from "react-icons/fa";

export const Education = () => {
  return (
    <div className=" bg-[#151516] py-10 rounded-2xl mt-10">
      <h1 className="md:text-4xl text-2xl  font-medium text-center mb-10">
        Education
      </h1>
      <div>
        <div className="max-w-md mx-auto bg-[#111] rounded-lg p-6 text-white font-sans">
        <div className="flex items-start space-x-4 border border-[#3c3c5e] rounded-lg p-6">
          <div className="w-6 h-6 border-2 mt-1 border-green-500 rounded-full"></div>
          <div className="flex-1">
            <div className="flex justify-between items-start flex-col md:flex-row gap-3">
              <h2 className="font-bold text-lg">Bachelor of Science</h2>
              <span className="bg-[#3c5e4d] px-3 py-1 rounded-full text-sm text-gray-300">
                2024 - 2028
              </span>
            </div>
            <p className="text-green-400 mt-1">National University</p>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">
              I have been studying BSc in Zoology with strong analytical thinking and
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
