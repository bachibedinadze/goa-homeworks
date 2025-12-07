import { useState, useEffect } from "react";

function FormInfo() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    alert(username);
  }, [username]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default FormInfo;