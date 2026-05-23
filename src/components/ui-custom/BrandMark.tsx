import Image from "next/image";

export function BrandMark({ size = 36, footer = false }: { size?: number; footer?: boolean }) {
  return (
    <span
      className="relative inline-block flex-shrink-0 overflow-hidden rounded-[9px]"
      style={{ width: size, height: size }}
    >
      <Image
        src="/icon-light.svg"
        alt=""
        width={size}
        height={size}
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
          footer ? "opacity-100" : "opacity-0 dark:opacity-100"
        }`}
      />
      {!footer && (
        <Image
          src="/logo.svg"
          alt=""
          width={size}
          height={size}
          className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity duration-500 dark:opacity-0"
        />
      )}
    </span>
  );
}
