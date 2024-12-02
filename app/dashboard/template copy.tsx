"use client";
import { Fragment, useState } from "react";

export default function DashboardTemplate({
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
          flexDirection: "column",
        }}
      >
        <h2>template: {count}</h2>
        <button className="test" onClick={() => setCount(count + 1)}>
          increment
        </button>
        <br />
        content:{children}
      </div>
    </Fragment>
  );
}
