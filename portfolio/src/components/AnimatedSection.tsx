import { type ReactNode, type CSSProperties } from "react";
import {
  useScrollProgress,
  type AnimationVariant,
} from "../hooks/useScrollAnimation";

// Easing function for smoother animations
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

// Interpolate between two values based on progress
const lerp = (start: number, end: number, progress: number): number => {
  return start + (end - start) * progress;
};

// Get animation styles based on scroll progress (0-1)
const getAnimationStyles = (
  variant: AnimationVariant,
  progress: number
): CSSProperties => {
  const easedProgress = easeOutCubic(progress);

  const variants: Record<
    AnimationVariant,
    { opacity: number; transform: string }
  > = {
    fadeUp: {
      opacity: easedProgress,
      transform: `translateY(${lerp(40, 0, easedProgress)}px)`,
    },
    fadeDown: {
      opacity: easedProgress,
      transform: `translateY(${lerp(-40, 0, easedProgress)}px)`,
    },
    fadeLeft: {
      opacity: easedProgress,
      transform: `translateX(${lerp(40, 0, easedProgress)}px)`,
    },
    fadeRight: {
      opacity: easedProgress,
      transform: `translateX(${lerp(-40, 0, easedProgress)}px)`,
    },
    fadeIn: {
      opacity: easedProgress,
      transform: "none",
    },
    scaleUp: {
      opacity: easedProgress,
      transform: `scale(${lerp(0.9, 1, easedProgress)})`,
    },
    slideUp: {
      opacity: easedProgress,
      transform: `translateY(${lerp(60, 0, easedProgress)}px)`,
    },
  };

  return variants[variant];
};

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  // Apply delay by reducing progress (elements with delay animate later)
  const delayedProgress = Math.max(0, (progress - delay / 1000) / (1 - delay / 1000));
  const animationStyles = getAnimationStyles(variant, delayedProgress);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animationStyles,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: AnimationVariant;
}

export function StaggeredContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  variant = "fadeUp",
}: StaggeredContainerProps) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => {
            // Stagger the progress for each child
            const staggeredProgress = Math.max(
              0,
              Math.min(1, (progress - index * staggerDelay) / (1 - index * staggerDelay * 0.5))
            );
            const animationStyles = getAnimationStyles(variant, staggeredProgress);

            return (
              <div
                key={index}
                style={{
                  ...animationStyles,
                  willChange: "transform, opacity",
                }}
              >
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}
