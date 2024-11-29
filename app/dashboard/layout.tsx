"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
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
            color: "blue",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link href="/dashboard/setting">setting</Link>
          <Link href="/dashboard/about">about</Link>
        </div>
        <h2>layout: {count}</h2>
        <button className="test" onClick={() => setCount(count + 1)}>
          increment
        </button>
        <br />
        {children}
      </div>
    </Fragment>
  );
}
