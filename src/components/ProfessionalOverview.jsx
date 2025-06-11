const ProfessionalOverview = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 transition-colors duration-300">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Professional Overview</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4 transition-colors duration-300">
            I'm a passionate fullstack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). 
            My expertise spans from creating beautiful, responsive frontends to building robust, scalable backend systems.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
            Beyond web development, I'm also a Unity game developer who specializes in game mechanics, systems design, 
            and innovative gameplay ideas using C#. I love creating immersive gaming experiences that challenge and engage players.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Core Skills</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">React.js</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Node.js</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">MongoDB</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Express.js</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">Unity & C#</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalOverview; 