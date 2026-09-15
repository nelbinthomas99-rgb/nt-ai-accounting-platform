"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey =
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

      if (
        !supabaseUrl ||
        !supabaseUrl.startsWith("https://") ||
        !supabaseKey
      ) {
        throw new Error(
          "Supabase configuration is missing or invalid."
        );
      }

      const supabase = createClient(
        supabaseUrl,
        supabaseKey
      );

      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        throw error;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      setMessage(
        error?.message || "Unable to sign in."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #061417 0%, #092326 50%, #061417 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          background: "#0b2023",
          border: "1px solid #174448",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 25px 70px rgba(0,0,0,0.45)",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "#38e8b0",
            fontWeight: "700",
            letterSpacing: "1.5px",
            marginBottom: "12px",
          }}
        >
          N&T AI ACCOUNTING
        </div>

        <h1
          style={{
            color: "#ffffff",
            fontSize: "30px",
            margin: "0 0 8px",
          }}
        >
          Welcome back
        </h1>

        <p
          style={{
            color: "#8faeb0",
            marginBottom: "30px",
            lineHeight: "1.5",
          }}
        >
          Sign in to your secure accounting portal.
        </p>

        <form onSubmit={handleLogin}>
          <label
            style={{
              display: "block",
              color: "#b8cbcc",
              marginBottom: "8px",
            }}
          >
            Email address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #245257",
              background: "#07191c",
              color: "white",
              fontSize: "15px",
            }}
          />

          <label
            style={{
              display: "block",
              color: "#b8cbcc",
              marginBottom: "8px",
            }}
          >
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #245257",
              background: "#07191c",
              color: "white",
              fontSize: "15px",
            }}
          />

          {message && (
            <div
              style={{
                background: "#35191c",
                border: "1px solid #78383e",
                color: "#ffb4b9",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "18px",
                fontSize: "14px",
              }}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#32d9a3",
              color: "#04201a",
              fontWeight: "800",
              fontSize: "15px",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p
          style={{
            color: "#607f81",
            textAlign: "center",
            fontSize: "12px",
            marginTop: "25px",
          }}
        >
          N&T AI-Powered Accounting & Bookkeeping Platform
        </p>
      </div>
    </main>
  );
}
