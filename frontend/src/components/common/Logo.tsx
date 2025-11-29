import React, { memo } from "react";

interface LogoProps {
  className?: string;
  alt?: string;
  variant?: "colour" | "monochrome";
}

// Correct image path (your folder structure)
import COLOUR_LOGO from "../../assets/iyyansoft-colour.png";

// You don't have mono logo, so use same image
const MONO_LOGO = COLOUR_LOGO;

const Logo: React.FC<LogoProps> = ({
  className = "",
  alt = "IyyanSoft Technologies",
  variant = "colour",
}) => {
  const src = variant === "colour" ? COLOUR_LOGO : MONO_LOGO;

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      draggable="false"
    />
  );
};

export default memo(Logo);
