import { useEffect } from "react";

export const useMouseTracking = (
  ref: React.RefObject<HTMLElement>,
  color: string
) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;

      if (element) {
        const x = e.pageX - element.offsetLeft;
        const y = e.pageY - element.offsetTop;

        // Update CSS variables

        element.style.setProperty("--x", `${x}px`);
        element.style.setProperty("--y", `${y}px`);
        element.style.setProperty("--bento-item-color", color);
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [ref, color]);
};
