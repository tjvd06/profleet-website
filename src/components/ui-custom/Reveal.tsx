import React, { type CSSProperties } from "react";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "delay" | "className" | "children" | "style">;

export function Reveal<T extends React.ElementType = "div">({
  as,
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as React.ElementType;
  const mergedStyle: CSSProperties = {
    ...style,
    ...(delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : {}),
  };
  return (
    <Tag className={`reveal ${className}`} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
