import { ContainerProps } from "@/types/types";
import React from "react";

const Container = ({ children }: ContainerProps) => {
  return <div className=" mx-auto max-w-7xl">{children}</div>;
};

export default Container;
