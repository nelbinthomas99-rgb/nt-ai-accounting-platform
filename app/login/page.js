"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>N&T</div>

        <h1 style={styles.title}>N&T AI Accounting</h1>

        <p style={styles.subtitle}>
          Accounting & Financial Intelligence Platform
        </p>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>Email Address</label>

          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />

          <label style={styles.label}>Password</label>

          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />

          <button style={styles.button} type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Secure Sign In"}
          </button>

          {errorMessage && (
            <p style={styles.error}>{errorMessage}</p>
          )}
        </form>

        <p style={styles.footer}>
          N&T AI-Powered Accounting • Prototype v0.1
        </p>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #04121d 0%, #082638 50%, #04121d 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "430px",
    background: "#0a1f2e",
    border: "1px solid #183e50",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 25px 70px rgba(0,0,0,0.4)",
  },

  logo: {
    width: "64px",
    height: "64px",
    borderRadius: "18px",
    background: "#35e8a6",
    color: "#03251b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    fontSize: "20px",
    fontWeight: "900",
  },

  title: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "8px",
    fontSize: "28px",
  },

  subtitle: {
    color: "#829fb3",
    textAlign: "center",
    fontSize: "13px",
    marginBottom: "30px",
  },

  label: {
    display: "block",
    color: "#b5c8d5",
    fontSize: "12px",
    fontWeight: "700",
    marginTop: "18px",
    marginBottom: "8px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    height: "50px",
    background: "#061824",
    border: "1px solid #214052",
    borderRadius: "10px",
    padding: "0 14px",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
  },

  button: {
    width: "100%",
    height: "52px",
    marginTop: "26px",
    border: "none",
    borderRadius: "10px",
    background: "#35e8a6",
    color: "#03251b",
    fontWeight: "900",
    cursor: "pointer",
  },

  error: {
    color: "#ff8291",
    textAlign: "center",
    marginTop: "15px",
    fontSize: "12px",
  },

  footer: {
    color: "#647f91",
    textAlign: "center",
    fontSize: "10px",
    marginTop: "28px",
  },
};
