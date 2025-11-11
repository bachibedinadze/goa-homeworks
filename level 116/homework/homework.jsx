function App() {
  const userRole = "admin";
  const isAvailable = false;
  const isDaytime = true;
  const hasNotification = true;
  const email = "user@example.com";
  const discount = 10;

  return (
    <div>
      <p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>
      <p>{isAvailable ? "$19.99" : "Out of stock"}</p>
      <img
        src={isDaytime ? "/images/sun.png" : "/images/moon.png"}
        alt={isDaytime ? "Sun" : "Moon"}
        width="100"
      />
      {hasNotification && <p>New Notification</p>}
      {email && <p>{email}</p>}
      {discount > 0 && <p>Discount Available!</p>}
    </div>
  );
}

export default App;