import React from "react";

const BackgroundAnimation = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="1%" stopColor="transparent" />
        </linearGradient>
        
        <linearGradient id="beam-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(0,240,255)" />
          <stop offset="50%" stopColor="transparent" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        
        <linearGradient id="beam-pink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(255,0,160)" />
          <stop offset="50%" stopColor="transparent" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Animations */}
        <animate
          xlinkHref="#grid"
          attributeName="opacity"
          values="0.05;0.1;0.05"
          dur="4s"
          repeatCount="indefinite"
        />
      </defs>

      {/* Grid Pattern */}
      <pattern id="grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
        <path d="M 64 0 L 0 0 0 64" fill="none" stroke="url(#grid)" strokeWidth="1" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />

      {/* Light Beams */}
      <g className="light-beams">
        <rect x="25%" width="1" height="100%" fill="url(#beam-blue)">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="75%" width="1" height="100%" fill="url(#beam-pink)">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="33%" width="1" height="100%" fill="url(#beam-blue)">
          <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        <rect x="66%" width="1" height="100%" fill="url(#beam-pink)">
          <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Floating Particles */}
      <circle r="2" fill="rgb(0,240,255)" opacity="0.5">
        <animate attributeName="cx" values="25%;30%;25%" dur="6s" repeatCount="indefinite" />
        <animate attributeName="cy" values="25%;20%;25%" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="rgb(255,0,160)" opacity="0.5">
        <animate attributeName="cx" values="75%;70%;75%" dur="6s" begin="2s" repeatCount="indefinite" />
        <animate attributeName="cy" values="75%;80%;75%" dur="6s" begin="2s" repeatCount="indefinite" />
      </circle>

      {/* Circular Interface Elements */}
      <circle cx="80" cy="80" r="32" fill="none" stroke="rgb(0,240,255)" strokeWidth="1" opacity="0.2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 80 80"
          to="360 80 80"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="calc(100% - 80)" cy="calc(100% - 80)" r="24" fill="none" stroke="rgb(255,0,160)" strokeWidth="1" opacity="0.2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 calc(100% - 80) calc(100% - 80)"
          to="0 calc(100% - 80) calc(100% - 80)"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Scanning Lines */}
      <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.05">
        <animate
          attributeName="y"
          values="-100%;100%"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Interface Lines */}
      <line x1="0" y1="25%" x2="100%" y2="25%" stroke="rgb(0,240,255)" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.2;0.1;0.2" dur="3s" repeatCount="indefinite" />
      </line>
      <line x1="0" y1="75%" x2="100%" y2="75%" stroke="rgb(255,0,160)" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0.2;0.1;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
      </line>
    </svg>
  );
};

export default BackgroundAnimation;