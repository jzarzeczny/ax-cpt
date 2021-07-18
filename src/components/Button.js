import React from "react";

export default function Button({ name, styling }) {
  return (
    <>
      <button className={`btn ${styling}`} btn>
        {name}
      </button>
    </>
  );
}
