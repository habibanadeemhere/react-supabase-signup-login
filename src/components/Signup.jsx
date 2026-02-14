import React, { useState } from "react";
import "./Signup.css";
import supabase from "../config";

const Signup = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: name,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Check your email.");
      setIsFlipped(true);
    }
  };

 
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
    }
  };

  return (
    <div className="container">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>


        <div className="front">
          <h2>Sign Up</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Create Account</button>
          <p>
            Already have account?{" "}
            <span onClick={() => setIsFlipped(true)}>Login</span>
          </p>
        </div>


        <div className="back">
          <h2>Login</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don’t have account?{" "}
            <span onClick={() => setIsFlipped(false)}>Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
