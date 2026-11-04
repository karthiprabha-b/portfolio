import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { Services } from '@/components/Services';
import { CreativeStudio } from '@/components/CreativeStudio';
import { AboutMe } from '@/components/AboutMe';
import { Journey } from '@/components/Journey';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-[#030614]">
      {/* Light Atmosphere: Hero, Featured Projects pod, Services, Creative Studio pod, and About Me */}
      <div className="bg-[#f8fafc] w-full relative">
        {/* 01: Hero Section */}
        <Hero />

        {/* 02: Featured Projects (Organic Pod Environment) */}
        <FeaturedProjects />

        {/* 03: Comprehensive Digital Solutions (Services) */}
        <Services />

        {/* 04: AI Creative Studio (Organic Panoramic Pod Banner) */}
        <CreativeStudio />

        {/* 05: About Me */}
        <AboutMe />
      </div>

      {/* 06: Professional Journey / Experience (Panoramic Banner with Top & Bottom Curves) */}
      <Journey />

      {/* 07: Tech Stack (Top curve matches 06 bottom, bottom curve matches 08 top) */}
      <TechStack />

      {/* 08: Contact & Footer */}
      <Contact />
    </div>
  );
}
