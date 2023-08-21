import type { UIColors } from '@/components/index.types';
import React from 'react'

const COLOR_CLASS: Record<UIColors, string> = {
  "white": "text-white",
  "black": "text-black-primary",
  "black-soft": "text-black-soft",
  "blue": "text-blue-primary",
  "blue-secondary": "text-blue-secondary",
  "gray": "text-gray-primary",
  "gray-light": "text-gray-light",
  "red": "text-red"
};

interface Props {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: UIColors;
  weight?: "normal" | "semi-bold" | "bold";
}

const Text: React.FC<Props> = ({ children, size = "md", color = "black", weight = "normal" }) => {
  const sizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  }[size];

  const weightClass = {
    normal: "font-normal",
    "semi-bold": "font-semibold",
    bold: "font-bold",
  }[weight];

  return (
    <p className={`m-0 ${sizeClass} ${COLOR_CLASS[color]} ${weightClass}`}>
      {children}
    </p>
  )
}

export default Text