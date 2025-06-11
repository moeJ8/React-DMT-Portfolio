import dmtLogo from '../assets/dmt-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-lg mt-16 transition-colors duration-300">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={dmtLogo} className="h-8 w-8 rounded object-cover shadow-sm" alt="DMT Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white transition-colors duration-300">
              Digital Media Translation
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0 transition-colors duration-300">
            <li>
              <span className="hover:underline me-4 md:me-6">ETI462</span>
            </li>
            <li>
              <span className="hover:underline">© 2025 DMT</span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8 transition-colors duration-300" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center transition-colors duration-300">
          Created for Digital Media Translation Course - ETI462
        </span>
      </div>
    </footer>
  );
};

export default Footer; 