import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com"|| password === "admin1234") {
      alert("Login Success");
      navigate('/admin')
    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {/* {error  && <p style={{color: "red"}}> wrong email and password</p>} */}
    </>
    )
}
export default LoginPage;
