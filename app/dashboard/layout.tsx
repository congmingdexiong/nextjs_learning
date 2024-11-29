import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      layout
      <br />
      {children}
    </Fragment>
  );
}
