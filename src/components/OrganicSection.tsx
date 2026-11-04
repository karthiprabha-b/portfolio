import React from 'react';

interface OrganicDividerProps {
  type: 'top' | 'bottom';
  className?: string;
  fillColor?: string;
  showAccent?: boolean;
}

/**
 * Reusable OrganicDivider component providing exact asymmetric Bézier flowing curves
 * matching the reference visual identity.
 */
export const OrganicDivider: React.FC<OrganicDividerProps> = ({
  type,
  className = '',
  fillColor = '#050814',
  showAccent = true,
}) => {
  if (type === 'top') {
    return (
      <div className={`w-full overflow-hidden leading-none relative select-none pointer-events-none z-10 ${className}`}>
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-36 md:h-44 lg:h-52 block preserve-3d"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="topAccentGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="topOrangeAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff3300" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#ff6a00" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#ffaa00" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#ff5500" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Separate Decorative Highlight: Thin Orange Illuminated Accent following the curve */}
          {showAccent && (
            <path
              d="M-30,115 C110,170 210,175 305,120 C380,75 460,38 580,36"
              stroke="url(#topOrangeAccentGrad)"
              strokeWidth="10"
              filter="url(#topAccentGlow)"
              fill="none"
            />
          )}

          {/* Main Organic Section Background Path */}
          <path
            d="M0,90 C110,150 210,155 305,105 C370,68 440,32 560,30 L1440,30 L1440,180 L0,180 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  // Deep, asymmetric bottom wave
  return (
    <div className={`w-full overflow-hidden leading-none relative select-none pointer-events-none z-10 ${className}`}>
      <svg
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-20 sm:h-28 md:h-36 lg:h-44 block preserve-3d"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="bottomCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fillColor} />
            <stop offset="100%" stopColor={fillColor} />
          </linearGradient>
        </defs>

        {/* Deep, asymmetric bottom wave transition to the light section */}
        <path
          d="M0,0 L1440,0 L1440,40 C1280,110 1060,20 820,70 C540,125 280,15 0,85 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

interface OrganicSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  topDivider?: boolean;
  bottomDivider?: boolean;
  showOrangeAccent?: boolean;
  backgroundColor?: string;
}

/**
 * Reusable OrganicSection wrapper component creating the flowing organic section silhouette.
 */
export const OrganicSection: React.FC<OrganicSectionProps> = ({
  id,
  className = '',
  children,
  topDivider = true,
  bottomDivider = true,
  showOrangeAccent = true,
  backgroundColor = '#050814',
}) => {
  return (
    <div id={id} className={`relative w-full ${className}`}>
      {topDivider && (
        <OrganicDivider
          type="top"
          fillColor={backgroundColor}
          showAccent={showOrangeAccent}
          className="-mt-16 sm:-mt-24 md:-mt-32 lg:-mt-36"
        />
      )}

      <div style={{ backgroundColor }} className="relative w-full z-20">
        {children}
      </div>

      {bottomDivider && (
        <OrganicDivider
          type="bottom"
          fillColor={backgroundColor}
          className="-mb-1"
        />
      )}
    </div>
  );
};

