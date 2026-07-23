import HeroSection from '@/components/Sections/HeroSection';
import ExperienceSection from '@/components/Sections/ExperienceSection';
import EducationSection from '@/components/Sections/EducationSection';
import FeaturedProjectsSection from '@/components/Sections/FeaturedProjectsSection';
import TechStackSection from '@/components/Sections/TechStackSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />

      <ExperienceSection />

      <FeaturedProjectsSection />

      <TechStackSection />

      <EducationSection />
    </div>
  );
}
