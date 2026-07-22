import HeroSection from '@/components/Sections/HeroSection';
import ExperienceSection from '@/components/Sections/ExperienceSection';
import EducationSection from '@/components/Sections/EducationSection';
import FeaturedProjectsSection from '@/components/Sections/FeaturedProjectsSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />

      <ExperienceSection />

      <FeaturedProjectsSection />

      <EducationSection />
    </div>
  );
}
