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
        <div
          style={{
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link
            href="/dashboard/setting"
            style={{
              color:
                "/dashboard/setting" === linkData.path ? "purple" : "black",
            }}
          >
            Settings
          </Link>
          <Link
            href="/dashboard/about"
            style={{
              color: "/dashboard/about" === linkData.path ? "purple" : "black",
            }}
          >
            About
          </Link>
        </div>
        <h2>layout: {count}</h2>
        <button
          className="bg-black text-white"
          onClick={() => setCount(count + 1)}
        >
          increment
        </button>
        <br />
        {children}
      </div>
    </Fragment>
  );
}
