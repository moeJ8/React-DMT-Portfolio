import AboutHeader from '../components/AboutHeader';
import ProfessionalOverview from '../components/ProfessionalOverview';
import WebProjectsSection from '../components/WebProjectsSection';
import GameProjectsSection from '../components/GameProjectsSection';
import SkillsExpertiseSection from '../components/SkillsExpertiseSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <AboutHeader />
        <ProfessionalOverview />
        <WebProjectsSection />
        <GameProjectsSection />
        <SkillsExpertiseSection />
      </div>
    </div>
  );
};

export default About;