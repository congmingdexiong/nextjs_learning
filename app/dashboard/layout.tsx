"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const linkData = [
  {
    name: "About",
    path: "/dashboard/setting",
  },
  {
    name: "Settings",
    path: "/dashboard/about",
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "3px dashed black",
          flexDirection: "column",
        }}
      >
      
        {children}
      </div>
    </Fragment>
  );
}
