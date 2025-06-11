import { useNavigate } from 'react-router-dom';
import dmtLogo from '../assets/dmt-logo.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSocialMediaClick = () => {
    const socialMediaSection = document.getElementById('social-media');
    if (socialMediaSection) {
      socialMediaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-20 lg:py-32">
        <div className="text-center">
          {/* DMT Logo */}
          <div className="mb-8">
            <a 
              href="https://uskudar.edu.tr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src={dmtLogo} 
                alt="DMT Logo" 
                className="mx-auto h-40 w-40 rounded-2xl object-cover shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </a>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Mohammad Jada
            </span>
          </h1>
          
          {/* Slogan */}
          <p className="text-2xl md:text-3xl font-light text-blue-100 mb-4">
            Fullstack Developer & Unity Game Designer
          </p>
          
          {/* Course Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-block mb-8">
            <p className="text-lg font-medium">ETI462 Digital Media Translation Portfolio</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleSocialMediaClick}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View My Social Media
            </button>
            <button
              onClick={() => navigate('/about')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View My Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 