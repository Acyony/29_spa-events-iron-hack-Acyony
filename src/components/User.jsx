import React, { Component } from "react";
import "../index.css";

export default function User({ event, bgColor }) {
  return (
    <>
      <div className="greeting_style" style={{
      backgroundColor: bgColor
    }} >
        <p>Welcome to {event}!</p>
      </div>
    </>
  );
}
