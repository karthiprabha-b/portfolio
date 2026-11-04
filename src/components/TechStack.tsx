'use client';

import React from 'react';
import { AnimatedText } from './AnimatedText';

// ============================================================================
// OFFICIAL PURE BRAND VECTOR SVG LOGOS (Adapted for Crisp Light/White Canvas)
// ============================================================================

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="#087ea4"/>
    <g stroke="#087ea4" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextjsLogo = () => (
  <svg viewBox="0 0 180 180" className="w-full h-full">
    <circle cx="90" cy="90" r="86" fill="black"/>
    <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#nextg1)"/>
    <rect x="115" y="54" width="12" height="72" fill="url(#nextg2)"/>
    <defs>
      <linearGradient id="nextg1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="nextg2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" rx="16" fill="#3178C6"/>
    <text x="36" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="48" fontWeight="800" fontFamily="system-ui, sans-serif">T</text>
    <text x="68" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="48" fontWeight="800" fontFamily="system-ui, sans-serif">S</text>
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" rx="16" fill="#F7DF1E"/>
    <text x="36" y="70" textAnchor="middle" fill="#000000" fontSize="48" fontWeight="900" fontFamily="system-ui, sans-serif">J</text>
    <text x="68" y="70" textAnchor="middle" fill="#000000" fontSize="48" fontWeight="900" fontFamily="system-ui, sans-serif">S</text>
  </svg>
);

const NodejsLogo = () => (
  <svg viewBox="0 0 256 289" className="w-full h-full">
    <path fill="#539E43" d="M128 0L249 70v140l-121 70L7 210V70L128 0z"/>
    <path fill="#FFFFFF" d="M142 86c0-6-4-10-14-10s-14 4-14 10c0 14 36 10 36 34 0 14-10 22-26 22-17 0-26-8-26-21h14c0 6 4 10 12 10s12-4 12-10c0-14-36-10-36-34 0-14 10-22 26-22 17 0 26 8 26 21h-10z"/>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 110 110" className="w-full h-full">
    <path fill="#3776AB" d="M54.5 3C29.6 3 31.1 13.8 31.1 13.8l.03 11.2h23.9v3.4H21.5S3 26.2 3 51.5c0 25.2 16.2 24.3 16.2 24.3h9.7v-13.6s-.5-16.2 15.9-16.2h24.4s15.4.3 15.4-14.8c0-15.1-13.6-15.1-13.6-15.1H60.1V3H54.5zm-14.6 7.6c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4z"/>
    <path fill="#FFD43B" d="M55.5 107c24.9 0 23.4-10.8 23.4-10.8l-.03-11.2H55v-3.4h33.5s18.5 2.2 18.5-23.1c0-25.2-16.2-24.3-16.2-24.3h-9.7v13.6s.5 16.2-15.9 16.2H40.8s-15.4-.3-15.4 14.8c0 15.1 13.6 15.1 13.6 15.1h10.9V107h5.6zm14.6-7.6c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4z"/>
  </svg>
);

const DjangoLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" rx="16" fill="#092E20"/>
    <text x="50" y="70" textAnchor="middle" fill="#44B78B" fontSize="58" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-2">dj</text>
  </svg>
);

const FlaskLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#18181b" d="M44 14v16.5L25.3 64.2C22.2 69.8 26.2 76 32.5 76h35c6.3 0 10.3-6.2 7.2-11.8L56 30.5V14h3a3 3 0 000-6h-18a3 3 0 100 6h3zm6 22l16 28.5c1 1.8-.3 3.5-2 3.5H36c-1.7 0-3-1.7-2-3.5L50 36z"/>
  </svg>
);

const ExpressLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="46" fill="#18181b"/>
    <text x="50" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="36" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-2">ex</text>
  </svg>
);

const PostgreSQLLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#336791" d="M49 14c-18 0-33 13-35 30-2 12 2 24 11 31l-3 16 16-5c3 2 7 3 11 3 19 0 35-15 35-34S68 14 49 14zm-11 48c-3 0-6-3-6-6s3-6 6-6 6 3 6 6-3 6-6 6zm22 0c-3 0-6-3-6-6s3-6 6-6 6 3 6 6-3 6-6 6z"/>
    <path fill="#1d4ed8" d="M68 45c-2-8-8-15-16-18 1 3 1 7 0 10 4 2 8 5 11 9 2 0 4-1 5-1z"/>
  </svg>
);

const MongoDBLogo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#47A248" d="M64 12c-2 2-24 28-24 57 0 25 18 43 23 47 1 1 2 0 2-1V12zm2 0v103c0 1 1 2 2 1 5-4 23-22 23-47 0-29-22-55-24-57l-1-1z"/>
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#00758F" d="M22 68c14 4 28 3 40-3 10-6 16-16 19-27-8 2-17 2-25-1-13-5-23-4-34 31z"/>
    <path fill="#F29111" d="M68 35c-3-8-9-14-18-16 2 4 1 8-2 11 8 1 15 3 20 5z"/>
  </svg>
);

const SupabaseLogo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#3ECF8E" d="M72 13L16 80h44l-4 35 56-67H68l4-35z"/>
  </svg>
);

const FirebaseLogo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#FFA000" d="M26 95L44 14l15 28-33 53z"/>
    <path fill="#F57C00" d="M64 45l11-21 27 71L64 113 26 95l38-50z"/>
    <path fill="#FFCA28" d="M102 95L89 62 64 113l38-18z"/>
  </svg>
);

const PrismaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#5A67D8" d="M50 12L18 80l30 8 34-16L50 12zm2 18l18 42-22 10-18-5 22-47z"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#06B6D4" d="M32 48c5-11 13-16 24-16 17 0 21 12 31 16 7 2 13 1 21-4-5 11-13 16-24 16-17 0-21-12-31-16-7-2-13-1-21 4zm-24 32c5-11 13-16 24-16 17 0 21 12 31 16 7 2 13 1 21-4-5 11-13 16-24 16-17 0-21-12-31-16-7-2-13-1-21 4z"/>
  </svg>
);

const HTML5Logo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#E34F26" d="M15 10l7 78 28 8 28-8 7-78H15zm56 22H36l1 11h33l-3 30-17 5-17-5-1-12h10l1 6 7 2 7-2 1-13H24l-3-33h53l-2 11z"/>
  </svg>
);

const CSS3Logo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#1572B6" d="M15 10l7 78 28 8 28-8 7-78H15zm56 22H36l1 11h33l-3 30-17 5-17-5-1-12h10l1 6 7 2 7-2 1-13H24l-3-33h53l-2 11z"/>
  </svg>
);

const BootstrapLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" rx="20" fill="#7952B3"/>
    <text x="50" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="62" fontWeight="900" fontFamily="system-ui, sans-serif">B</text>
  </svg>
);

const ViteLogo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="url(#viteg)" d="M122 17L67 119c-1 2-4 2-5 0L6 17c-1-2 1-4 3-3l55 12 55-12c2-1 4 1 3 3z"/>
    <path fill="#FFD62E" d="M72 17L44 68h21l-8 30 35-46H72l14-35H72z"/>
    <defs>
      <linearGradient id="viteg" x1="6" y1="17" x2="122" y2="119" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF"/>
        <stop offset="1" stopColor="#BD34FE"/>
      </linearGradient>
    </defs>
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 120 100" className="w-full h-full">
    <rect x="36" y="22" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="48" y="22" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="60" y="22" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="24" y="33" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="36" y="33" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="48" y="33" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="60" y="33" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="72" y="33" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="36" y="44" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="48" y="44" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="60" y="44" width="10" height="9" rx="1" fill="#2496ED" />
    <rect x="72" y="44" width="10" height="9" rx="1" fill="#2496ED" />
    <path fill="#2496ED" d="M108 52c-2 0-8 1-12 5-3-9-11-15-21-16-1 0-2 0-3 1v12H21c-2 0-5 1-7 3-5 5-6 13-3 19 6 12 21 18 39 18 28 0 49-14 57-34 3 0 8-2 11-5v-3z"/>
    <circle cx="28" cy="62" r="2" fill="#030611"/>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 110 80" className="w-full h-full">
    <text x="55" y="42" textAnchor="middle" fill="#232F3E" fontSize="30" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">aws</text>
    <path fill="#FF9900" d="M22 56c15 11 36 14 53 6 3-1 7-4 9-7 1-1 2 0 1 1-3 5-8 9-14 12-16 7-35 5-49-4-2-1-1-3 0-3s0-1 0-2c-1-2 0-3 0-3z"/>
    <polygon points="87,55 93,59 86,64" fill="#FF9900"/>
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#F05032" d="M125 56L72 3c-4-4-10-4-14 0L46 15l18 18c4-1 9 0 12 3 4 4 4 10 1 14l17 17c4-1 9 0 12 3 5 5 5 13 0 18s-13 5-18 0c-4-4-4-10-1-14L70 57v24c1 1 2 3 2 5 0 7-6 13-13 13s-13-6-13-13c0-5 3-10 8-12V49c-5-2-8-7-8-12 0-2 1-4 2-5L29 14 3 40c-4 4-4 10 0 14l53 53c4 4 10 4 14 0l55-55c4-4 4-10 0-14z"/>
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#181717" fillRule="evenodd" clipRule="evenodd" d="M50 12C28.5 12 11 29.5 11 51c0 17.2 11.2 31.8 26.7 37 1.9.4 2.6-.8 2.6-1.9v-6.6c-10.8 2.3-13.1-5.2-13.1-5.2-1.8-4.5-4.3-5.7-4.3-5.7-3.5-2.4.3-2.3.3-2.3 3.9.3 5.9 4 5.9 4 3.5 5.9 9.1 4.2 11.3 3.2.4-2.5 1.4-4.2 2.5-5.2-8.6-1-17.7-4.3-17.7-19.3 0-4.3 1.5-7.7 4-10.4-.4-1-.1-2.4 1.7-4.2 0 0 3.3-1.1 10.7 4 3.1-.9 6.5-1.3 9.8-1.3s6.7.4 9.8 1.3c7.4-5.1 10.7-4 10.7-4 1.8 1.8 1.4 3.2 1.7 4.2 2.5 2.7 4 6.1 4 10.4 0 15-9.1 18.2-17.8 19.2 1.4 1.2 2.6 3.5 2.6 7.1v10.5c0 1.1.7 2.3 2.7 1.9C77.8 82.8 89 68.2 89 51c0-21.5-17.5-39-39-39z"/>
  </svg>
);

const LinuxLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#FCC624" d="M50 15c-12 0-20 10-20 23 0 8 4 16 11 20-3 3-5 7-5 12v15c0 10 6 15 14 15s14-5 14-15V70c0-5-2-9-5-12 7-4 11-12 11-20 0-13-8-23-20-23z"/>
    <circle cx="44" cy="32" r="2.5" fill="#000"/>
    <circle cx="56" cy="32" r="2.5" fill="#000"/>
    <path fill="#FFA500" d="M50 38c-3 0-5 2-5 4s2 4 5 4 5-2 5-4-2-4-5-4z"/>
  </svg>
);

const VSCodeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#007ACC" d="M72 15L38 43 22 31 12 36l15 14-15 14 10 5 16-12 34 28 16-8V23l-16-8zm0 50l-22-15 22-15v30z"/>
  </svg>
);

const FlutterLogo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <path fill="#02569B" d="M76 16L24 68l16 16 68-68H76zm0 48L44 96l16 16 48-48H76z"/>
    <path fill="#0175C2" d="M60 80l16-16 32 32-16 16-32-32z"/>
    <path fill="#29B6F6" d="M76 64l16 16-16 16-16-16 16-16z"/>
  </svg>
);

const DartLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#0175C2" d="M18 18l32 32-32 32V18z"/>
    <path fill="#02569B" d="M50 50l32-32H50v32z"/>
    <path fill="#29B6F6" d="M50 50l32 32H50V50z"/>
    <path fill="#00B0FF" d="M50 50l-16 32h48L50 50z"/>
  </svg>
);

const PlaywrightLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="42" cy="52" r="24" fill="#2EAD33"/>
    <circle cx="58" cy="46" r="22" fill="#D32F2F" opacity="0.9"/>
    <polygon points="50,42 62,49 50,56" fill="#FFFFFF"/>
  </svg>
);

const SeleniumLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="76" height="76" x="12" y="12" rx="16" fill="#43B02A"/>
    <text x="50" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="system-ui, sans-serif">Se</text>
  </svg>
);

const PuppeteerLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="44" fill="#00D8A2"/>
    <circle cx="36" cy="42" r="6" fill="#004A36"/>
    <circle cx="64" cy="42" r="6" fill="#004A36"/>
    <path d="M34 62c6 6 26 6 32 0" stroke="#004A36" strokeWidth="4" strokeLinecap="round" fill="none"/>
  </svg>
);

const PandasLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect x="20" y="16" width="14" height="68" rx="7" fill="#150458"/>
    <rect x="43" y="28" width="14" height="56" rx="7" fill="#FFD43B"/>
    <rect x="66" y="16" width="14" height="42" rx="7" fill="#E70488"/>
  </svg>
);

const NumPyLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" rx="16" fill="#013243"/>
    <text x="50" y="70" textAnchor="middle" fill="#4DABCF" fontSize="56" fontWeight="900" fontFamily="system-ui, sans-serif">N</text>
  </svg>
);

const ScikitLearnLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="42" cy="42" r="28" fill="#F89939" opacity="0.9"/>
    <circle cx="58" cy="58" r="28" fill="#3499CD" opacity="0.9"/>
    <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="system-ui, sans-serif">sk</text>
  </svg>
);

const PostmanLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="42" fill="#FF6C37"/>
    <polygon points="36,60 50,30 64,60" fill="#FFFFFF"/>
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#5382A1" d="M50 20c-8 6 6 12 0 18-5 5-10 6-6 10 3 4 12 3 10-6-3-9-12-8-4-22z"/>
    <path fill="#E76F00" d="M26 62c0 0-4 12 24 12s24-12 24-12H26zm48 2c6-1 10-5 8-10s-8-4-8-4 4 11 0 14z"/>
    <path fill="#5382A1" d="M22 78c18 4 38 4 56 0 3-1-3-3-6-3-15 2-30 2-44 0-4 0-8 2-6 3z"/>
  </svg>
);

const CppLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,12 85,32 85,68 50,88 15,68 15,32" fill="#00599C"/>
    <text x="50" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="32" fontWeight="900" fontFamily="system-ui, sans-serif">C++</text>
  </svg>
);

const CSharpLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <polygon points="50,12 85,32 85,68 50,88 15,68 15,32" fill="#9B4993"/>
    <text x="50" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="system-ui, sans-serif">C#</text>
  </svg>
);

const RestApiLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <rect width="100" height="100" rx="16" fill="#0284C7"/>
    <text x="50" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="30" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">API</text>
  </svg>
);

const CursorLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path fill="#0284C7" d="M22 18l56 28-32 8-14 28-10-64z"/>
  </svg>
);

// ============================================================================
// TECH DATA STREAMS (Incorporating user's full resume skills)
// ============================================================================

// TOP STREAM: Core Full-Stack, Languages & Databases (Runs Right to Left automatically)
const TOP_TECHS = [
  { name: 'React', Icon: ReactLogo },
  { name: 'Next.js', Icon: NextjsLogo },
  { name: 'TypeScript', Icon: TypeScriptLogo },
  { name: 'JavaScript', Icon: JavaScriptLogo },
  { name: 'Node.js', Icon: NodejsLogo },
  { name: 'Python', Icon: PythonLogo },
  { name: 'Django', Icon: DjangoLogo },
  { name: 'Flask', Icon: FlaskLogo },
  { name: 'Express.js', Icon: ExpressLogo },
  { name: 'PostgreSQL', Icon: PostgreSQLLogo },
  { name: 'MongoDB', Icon: MongoDBLogo },
  { name: 'MySQL', Icon: MySQLLogo },
  { name: 'Supabase', Icon: SupabaseLogo },
  { name: 'Firebase', Icon: FirebaseLogo },
  { name: 'Prisma', Icon: PrismaLogo },
  { name: 'Tailwind CSS', Icon: TailwindLogo },
  { name: 'HTML5', Icon: HTML5Logo },
  { name: 'CSS3', Icon: CSS3Logo },
  { name: 'Bootstrap', Icon: BootstrapLogo },
  { name: 'Vite', Icon: ViteLogo },
];

// BOTTOM STREAM: Cloud, DevOps, AI, Mobile, Data & Automation (Runs Left to Right automatically)
const BOTTOM_TECHS = [
  { name: 'Docker', Icon: DockerLogo },
  { name: 'AWS', Icon: AWSLogo },
  { name: 'Git', Icon: GitLogo },
  { name: 'GitHub', Icon: GitHubLogo },
  { name: 'Linux', Icon: LinuxLogo },
  { name: 'VS Code', Icon: VSCodeLogo },
  { name: 'Flutter', Icon: FlutterLogo },
  { name: 'Dart', Icon: DartLogo },
  { name: 'Playwright', Icon: PlaywrightLogo },
  { name: 'Selenium', Icon: SeleniumLogo },
  { name: 'Puppeteer', Icon: PuppeteerLogo },
  { name: 'Pandas', Icon: PandasLogo },
  { name: 'NumPy', Icon: NumPyLogo },
  { name: 'Scikit-learn', Icon: ScikitLearnLogo },
  { name: 'Postman', Icon: PostmanLogo },
  { name: 'Java', Icon: JavaLogo },
  { name: 'C++', Icon: CppLogo },
  { name: 'C#', Icon: CSharpLogo },
  { name: 'REST APIs', Icon: RestApiLogo },
  { name: 'Cursor AI', Icon: CursorLogo },
];

// Helper to double items for seamless infinite marquee loop
const doubleArray = <T,>(arr: T[]): T[] => [...arr, ...arr];

export const TechStack = () => {
  return (
    <section
      id="tech"
      className="relative z-10 w-full pt-12 sm:pt-16 pb-12 sm:pb-16 bg-white text-slate-900 select-none overflow-hidden"
    >
      {/* Atmospheric Soft Lighting on White Background */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-100/60 rounded-full blur-[140px] pointer-events-none" />

      {/* SECTION WRAPPER: Generous, Clean & Elegant Canvas */}
      <div className="w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 relative z-10">
        
        {/* SECTION HEADER: 07 // TECHNICAL STACK & CAPABILITIES */}
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            {/* Section 07 Numbering Badge */}
            <AnimatedText animation="swipe-left" delay={100} className="flex items-center gap-3">
              <span className="font-mono text-2xl sm:text-3xl font-black text-blue-600 tracking-tighter">07</span>
              <span className="h-4 w-px bg-slate-300" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase flex items-center gap-2">
                Technical Stack & Capabilities
                <span className="text-blue-600 text-sm animate-rotate-slow inline-block">⊙</span>
              </span>
            </AnimatedText>

            {/* Main Headline with Glowing Cyan-Blue Accent Bar */}
            <AnimatedText animation="fade-up" delay={280} className="flex items-center gap-4">
              <div className="w-2 h-12 sm:h-16 rounded-full bg-gradient-to-b from-blue-600 to-cyan-500 shadow-[0_4px_16px_rgba(37,99,235,0.35)] shrink-0" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Technologies{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Work With.
                </span>
              </h2>
            </AnimatedText>

            {/* Description Paragraph: Placed Under Title on the Left Side like Other Sections */}
            <AnimatedText animation="swipe-right" delay={460} as="p" className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-medium pl-6">
              Specialized engineering ecosystem spanning modern full-stack architectures, scalable cloud backends, AI integrations, data pipelines, and browser automation.
            </AnimatedText>
          </div>
        </div>

        {/* STREAM 1: TOP ROW (Running Right to Left Automatically - Prominent & Open) */}
        <div className="w-full relative overflow-hidden mb-10 sm:mb-14 lg:mb-16 py-4">
          {/* Soft edge masks for seamless entry & exit into white canvas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-left flex items-center gap-10 sm:gap-14 lg:gap-16">
            {doubleArray(TOP_TECHS).map((tech, index) => {
              const Icon = tech.Icon;
              return (
                <div
                  key={`top-${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0 py-2 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_8px_16px_rgba(37,99,235,0.25)]">
                    <Icon />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors text-center whitespace-nowrap tracking-wide">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* STREAM 2: BOTTOM ROW (Running Left to Right Automatically - Prominent & Open) */}
        <div className="w-full relative overflow-hidden py-3">
          {/* Soft edge masks for seamless entry & exit into white canvas */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          <div className="animate-marquee-right flex items-center gap-10 sm:gap-14 lg:gap-16">
            {doubleArray(BOTTOM_TECHS).map((tech, index) => {
              const Icon = tech.Icon;
              return (
                <div
                  key={`bottom-${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0 py-2 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_8px_16px_rgba(37,99,235,0.25)]">
                    <Icon />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors text-center whitespace-nowrap tracking-wide">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
