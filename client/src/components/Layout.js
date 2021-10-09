import React from "react";

export default function Layout({ children, styling }) {
  return (
    <div className={`container ${styling ? styling : null}`}>{children}</div>
  );
}
