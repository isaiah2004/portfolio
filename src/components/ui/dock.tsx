"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { PropsWithChildren, useRef } from "react";

import { cn } from "@/lib/utils";

export type DockProps = {
  className?: string;
  children: React.ReactNode;
};

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ className, children_ }, ref) => {
    const mouseX = useMotionValue(Infinity);

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-background/20 px-4 pb-3 backdrop-blur-lg",
          className,
        )}
      >
        {React.Children.map(children_, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any, string | React.JSXElementConstructor<any>>, {
              mouseX: mouseX,
            });
          }
          return child;
        })}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export type DockIconProps = {
  mouseX?: any;
};

const DockIcon = ({
  mouseX,
  className,
  children,
  ...props
}: PropsWithChildren<DockIconProps & React.HTMLAttributes<HTMLDivElement>>) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn("flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-muted/50", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
