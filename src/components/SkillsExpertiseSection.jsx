const SkillsExpertiseSection = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills & Expertise</h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 transition-colors duration-300">
        Professional development across multiple domains
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full font-medium transition-colors duration-300">MERN Stack</span>
        <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full font-medium transition-colors duration-300">Unity & C#</span>
        <span className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 px-4 py-2 rounded-full font-medium transition-colors duration-300">Game Systems</span>
        <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full font-medium transition-colors duration-300">Full Stack Development</span>
      </div>
    </div>
  );
};

export default SkillsExpertiseSection; 