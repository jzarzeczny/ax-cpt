import React from "react";

export default function Button({ name, styling, type }) {
  return (
    <>
      <button type={type && `${type}`} className={`btn ${styling}`}>
        {name}
      </button>
    </>
  );
}
