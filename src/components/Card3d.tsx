import { useState } from "react";

type Props = {
    src: string
    alt: string
}

export default function Card3D({ src, alt }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        perspective: "1000px",
        transition: "all 0.5s ease",
        transform: hovered
          ? "rotateX(20deg) rotateY(20deg) scale3d(1.1, 1.1, 1.1)"
          : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
      className="cursor-pointer"
    >
      <img
        src={src}
        alt={alt}
        className='w-full h-full border-gray-800 border-b-3 border-r-3'
      />
    </div>
  );
}