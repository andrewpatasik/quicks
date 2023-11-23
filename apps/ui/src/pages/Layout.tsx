import { FC, ReactElement } from "react";

type LayoutProps = {
  children: ReactElement;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-col h-screen">{children}</div>;
};
