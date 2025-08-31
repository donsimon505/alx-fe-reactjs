import { useState } from "react";

function RegistrationForm() {
  // Separate state for each input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [errors, setErrors] = useState({});

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });
      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
