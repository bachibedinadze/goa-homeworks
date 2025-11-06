import React from "react";

export default function ConditionalRenderingExample() {
  const userRole = "admin";
  const isAvailable = false;
  const isDaytime = true;
  const hasNotification = true;
  const email = "user@example.com";
  const discount = 10;

  return (
    <div className="p-6 space-y-3">
      {/* 1) ternary operator */}
      <p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>

      {/* 2) ternary operator */}
      <p>{isAvailable ? "$49.99" : "Out of stock"}</p>

      {/* 3) ternary operator */}
      <img
        src={
          isDaytime
            ? "https://img.icons8.com/emoji/96/sun-emoji.png"
            : "https://img.icons8.com/emoji/96/new-moon-emoji.png"
        }
        alt={isDaytime ? "Sun" : "Moon"}
        width={60}
      />

      {/* 4) && operator */}
      {hasNotification && <p>New Notification</p>}

      {/* 5) && operator */}
      {email && <p>User Email: {email}</p>}

      {/* 6) && operator */}
      {discount > 0 && <p>Discount Available!</p>}
    </div>
  );
}