const SocialMediaCard = ({ 
  platform, 
  url, 
  gradientFrom, 
  gradientTo, 
  icon, 
  description, 
  hashtags, 
  footer 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} p-6`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{platform}</h3>
          </div>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
          {description}
        </p>
        <div className="mb-4">
          {hashtags.map((hashtag, index) => (
            <span 
              key={index}
              className={`inline-block ${hashtag.bgColor} ${hashtag.textColor} px-3 py-1 rounded-full text-sm mr-2 mb-2 transition-colors duration-300`}
            >
              {hashtag.text}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
          {footer}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaCard; 