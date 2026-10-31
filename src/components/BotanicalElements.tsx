import React from 'react';

export const PressedFlower: React.FC<{ className?: string; color?: string }> = ({
  className = "w-8 h-8",
  color = "#D8A6A3"
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stem */}
    <path d="M50 50 Q48 80 46 95" stroke="#344D3D" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    {/* Leaf */}
    <path d="M48 70 Q35 65 32 75 Q42 80 47 73" fill="#A6B49A" opacity="0.8"/>
    {/* Petals */}
    <ellipse cx="50" cy="35" rx="9" ry="16" fill={color} opacity="0.85" />
    <ellipse cx="50" cy="35" rx="9" ry="16" fill={color} opacity="0.85" transform="rotate(72 50 50)" />
    <ellipse cx="50" cy="35" rx="9" ry="16" fill={color} opacity="0.85" transform="rotate(144 50 50)" />
    <ellipse cx="50" cy="35" rx="9" ry="16" fill={color} opacity="0.85" transform="rotate(216 50 50)" />
    <ellipse cx="50" cy="35" rx="9" ry="16" fill={color} opacity="0.85" transform="rotate(288 50 50)" />
    {/* Center */}
    <circle cx="50" cy="50" r="7" fill="#8B7562" opacity="0.9" />
    <circle cx="50" cy="50" r="4" fill="#F8F5EC" opacity="0.7" />
  </svg>
);

export const EucalyptusSprig: React.FC<{ className?: string }> = ({ className = "w-6 h-12" }) => (
  <svg viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M30 10 Q28 60 30 115" stroke="#344D3D" strokeWidth="1.8" strokeLinecap="round" opacity="0.75"/>
    <ellipse cx="20" cy="30" rx="14" ry="10" fill="#A6B49A" opacity="0.8" transform="rotate(-20 20 30)"/>
    <ellipse cx="40" cy="45" rx="15" ry="10" fill="#A6B49A" opacity="0.8" transform="rotate(25 40 45)"/>
    <ellipse cx="18" cy="65" rx="16" ry="11" fill="#A6B49A" opacity="0.8" transform="rotate(-15 18 65)"/>
    <ellipse cx="42" cy="80" rx="17" ry="11" fill="#A6B49A" opacity="0.8" transform="rotate(20 42 80)"/>
    <ellipse cx="22" cy="98" rx="15" ry="10" fill="#A6B49A" opacity="0.7" transform="rotate(-10 22 98)"/>
  </svg>
);

export const DelicateCloud: React.FC<{ className?: string; opacity?: number }> = ({ 
  className = "w-24 h-14",
  opacity = 0.8
}) => (
  <svg viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M30 65 Q10 65 15 45 Q20 25 45 28 Q55 10 80 12 Q105 10 115 30 Q145 25 150 48 Q155 70 130 68 Z" 
      fill="#FFFDF7" 
      opacity={opacity}
      filter="drop-shadow(0 4px 12px rgba(183, 208, 225, 0.4))"
    />
  </svg>
);

export const WaxSeal: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M50 10 C65 8 82 20 88 35 C94 50 88 72 76 85 C62 96 35 94 22 83 C8 71 8 46 16 32 C25 16 38 12 50 10 Z" 
      fill="#D8A6A3" 
      filter="drop-shadow(0 4px 6px rgba(181, 125, 122, 0.4))"
    />
    <circle cx="50" cy="50" r="30" stroke="#FFFDF7" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
    <path d="M42 45 C42 40 48 38 52 42 C56 46 44 54 44 58 L58 58" stroke="#FFFDF7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const StorybookDivider: React.FC<{ className?: string }> = ({ className = "my-8" }) => (
  <div className={`flex items-center justify-center space-x-3 opacity-60 ${className}`}>
    <div className="h-[1px] w-12 bg-sage"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-dusty"></div>
    <div className="w-2.5 h-2.5 rotate-45 border border-forest"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-dusty"></div>
    <div className="h-[1px] w-12 bg-sage"></div>
  </div>
);

