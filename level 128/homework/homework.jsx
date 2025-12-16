import { useEffect, useState } from "react";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif"
  };

  const userItemStyle = {
    padding: "10px",
    marginBottom: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer"
  };

  const detailStyle = {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #333",
    borderRadius: "4px"
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div style={containerStyle}>
      <h2>User Dashboard</h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={userItemStyle}
          onClick={() => setSelectedUser(user)}
        >
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      ))}

      {selectedUser && (
        <div style={detailStyle}>
          <div>Name: {selectedUser.name}</div>
          <div>Email: {selectedUser.email}</div>
          <div>Phone: {selectedUser.phone}</div>
          <div>Company: {selectedUser.company.name}</div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;