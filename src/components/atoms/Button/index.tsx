import React from 'react'

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "full";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({
  children,
  width = "fit-content",
  variant = "primary",
  size = "md"
}) => {
  const sizeClass = {
    sm: "py-1 px-2 text-sm rounded",
    md: "py-2 px-3 text-md rounded-lg",
    lg: "py-3 px-4 text-lg rounded-xl",
  }[size];

  const variantClass = {
    primary: "bg-blue-primary text-white",
    secondary: "bg-blue-secondary text-white",
  }[variant];

  const widthClass = {
    "fit-content": "w-auto",
    full: "w-full"
  }[width];

  return (
    <button className={`font-semibold ${sizeClass} ${variantClass} ${widthClass} hover:bg-[#5895df]`}>
      {children}
    </button>
  )
}

export default Button