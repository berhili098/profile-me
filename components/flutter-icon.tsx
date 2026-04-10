/**
 * Flutter mark (Simple Icons path), currentColor — sized to match hero row FA icons.
 */
export function FlutterIcon ({ className = '' }: { className?: string }) {
  return (
    <span
      className={`hero-tech-icon-slot${className ? ` ${className}` : ''}`}
      aria-hidden
    >
      <svg
        className="hero-tech-svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        <path
          fill="currentColor"
          d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
        />
      </svg>
    </span>
  )
}
