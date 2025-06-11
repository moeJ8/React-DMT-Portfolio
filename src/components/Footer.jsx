import dmtLogo from '../assets/dmt-logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-16">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={dmtLogo} className="h-8 w-8 rounded object-cover shadow-sm" alt="DMT Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
              Digital Media Translation
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <span className="hover:underline me-4 md:me-6">ETI462 Final Project</span>
            </li>
            <li>
              <span className="hover:underline">© 2025 DMT</span>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          Created for Digital Media Translation Course - ETI462
        </span>
      </div>
    </footer>
  );
};

export default Footer; 