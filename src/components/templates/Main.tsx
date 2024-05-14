import { ReactElement } from "react";

const Main = ({ children }: { children: ReactElement }) => {
  return <div className=" bg-black">{children}</div>;
};

export default Main;
