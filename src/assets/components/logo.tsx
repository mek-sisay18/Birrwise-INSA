

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size * 2}
      height={size}
      viewBox="0 0 246 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="FinWise Logo"
      style={{ display: "block" }}
    >
    
      <rect
        x="3"
        y="3"
        width="240"
        height="129"
        rx="0"
        fill="#facc15" // Golden yellow
        stroke="#22c55e"
        strokeWidth="6"
      />

      {/* Decorative Arcs */}
      <path
        d="M3 36 a33 33 0 0 1 33 -33"
        stroke="#22c55e"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M243 36 a33 33 0 0 0 -33 -33"
        stroke="#22c55e"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M3 99 a33 33 0 0 0 33 33"
        stroke="#22c55e"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M243 99 a33 33 0 0 1 -33 33"
        stroke="#22c55e"
        strokeWidth="6"
        fill="none"
      />

      
<circle
  cx="123"
  cy="67.5"
  r="42"
  stroke="#0f172a"
  strokeWidth="6"  
  fill="#facc15"   
/>

<text
  x="123"
  y="80"
  textAnchor="middle"
  fontFamily="Arial, sans-serif"
  fontSize="40"
  fill="#1a1a1a" 
  fontWeight="bold"
  letterSpacing="2"
  dominantBaseline="middle"
>
  ETB
</text>

    </svg>
  );
}
