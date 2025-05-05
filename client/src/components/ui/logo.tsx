import { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  variant?: "default" | "white";
}

export const Logo = ({ variant = "default", ...props }: LogoProps) => {
  const primaryColor = variant === "white" ? "#FFFFFF" : "#1E5B94";

  return (
    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center" style={{ backgroundColor: variant === "white" ? "#FFFFFF10" : "#1E5B9410" }}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="50" cy="50" r="45" fill={primaryColor} />
        <circle cx="50" cy="50" r="37" fill="#FFA62B" />
        <path 
          d="M50 10C27.909 10 10 27.909 10 50C10 72.091 27.909 90 50 90C72.091 90 90 72.091 90 50C90 27.909 72.091 10 50 10ZM50 20C66.569 20 80 33.431 80 50C80 66.569 66.569 80 50 80C33.431 80 20 66.569 20 50C20 33.431 33.431 20 50 20Z" 
          fill={primaryColor} 
          fillRule="evenodd" 
          clipRule="evenodd"
        />
        <path 
          d="M50 15L55 35H75L60 50L65 70L50 60L35 70L40 50L25 35H45L50 15Z" 
          fill={primaryColor}
        />
      </svg>
    </div>
  );
};
