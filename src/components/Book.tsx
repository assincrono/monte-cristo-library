import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

interface BookProps {
  name: string;
  cover: string;
}

export default function Book({ name, cover }: BookProps) {
  const book = useRef<HTMLDivElement | null>(null);

  const handleHoverIn = () => {
    gsap.to(book.current, {
      scale: 1.05,
      rotationY: 10,
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverOut = () => {
    gsap.to(book.current, {
      scale: 1,
      rotationY: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="box w-[280px] overflow-hidden rounded-lg shadow-lg"
      ref={book}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <img src={cover} alt={name} className="w-full h-full object-cover" />
    </div>
  );
}
