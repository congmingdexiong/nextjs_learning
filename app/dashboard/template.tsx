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
      <div></div>
    </Fragment>
  );
}
