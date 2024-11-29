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
      <div>
        <h2>template: {count}</h2>
        <button className="test" onClick={() => setCount(count + 1)}>
          increment
        </button>
        <br />
        {children}
      </div>
    </Fragment>
  );
}
