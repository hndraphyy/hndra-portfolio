"use client";

import { forwardRef } from "react";
import type { ReactNode, HTMLAttributes } from "react";

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`mx-auto w-full max-w-screen-xl px-7 md:px-10 lg:px-12 xl:px-16 relative z-20 ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
