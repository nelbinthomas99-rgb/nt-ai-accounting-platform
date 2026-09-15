"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background:
            radial-gradient(
              circle at 75% 20%,
              rgba(32, 227, 162, 0.14),
              transparent 25%
            ),
            linear-gradient(135deg, #05111d, #071b2b, #06131f);
          color: white;
        }

        .loginPage {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 25px;
        }

        .loginBox {
          width: 100%;
          max-width: 440px;
          padding: 38px;
          border-radius: 24px;
          background: rgba(10, 31, 47, 0.88);
          border: 1px solid rgba(83, 185, 221, 0.18);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
        }

        .brand {
          text-align: center;
          margin-bottom: 32px;
        }

        .logo {
          width: 62px;
          height: 62px;
          display: grid;
          place-items: center;
          margin: auto;
          border-radius: 18px;
          background: linear-gradient(135deg, #35efaa, #087d72);
          color: #04231b;
          font-size: 20px;
          font-weight: 900;
          box-shadow: 0 0 35px rgba(53, 239, 170, 0.2);
        }

        h1 {
          margin: 18px 0 6px;
          font-size: 27px;
        }

        .subtitle {
          color: #829fb3;
          font-size: 13px;
          line-height: 1.5;
        }

        label {
          display: block;
          margin: 18px 0 7px;
          color: #a9bdcb;
          font-size: 12px;
          font-weight: 700;
        }

        input {
          width: 100%;
          height: 50px;
          padding: 0 15px;
          border-radius: 11px;
          border: 1px solid rgba(116, 177, 216, 0.18);
          outline: none;
          background: #071a29;
          color: white;
          font-size: 14px;
        }

        input:focus {
          border-color: #31dca2;
          box-shadow: 0 0 0 3px rgba(49, 220, 162, 0.08);
        }

        button {
          width: 100%;
          height: 52px;
          margin-top: 24px;
          border: 0;
          border-radius: 11px;
          background: linear-gradient(135deg, #2de5a2, #11a978);
          color: #03251b;
          font-weight: 900;
          font-size: 14px;
          cursor: pointer;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .message {
          margin-top: 15px;
          padding: 10px;
          border-radius: 8px;
          background: rgba(255, 80, 100, 0.08);
          color: #ff8796;
          font-size: 12px;
          text-align: center;
        }

        .security {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid rgba(126, 177, 210, 0.12);
          color: #708ca0;
          text-align: center;
          font-size: 10px;
          line-height: 1.7;
        }

        .prototype {
          color: #43e8af;
          font-weight: 800;
        }
      `}</style>

      <main className="loginPage">
        <div className="loginBox">
          <div className="brand">
            <div className="logo">N&T</div>

            <h1>N&T AI Accounting</h1>

            <div className="subtitle">
              Secure Client Accounting & Financial Intelligence
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <label>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="business@email.com"
              autoComplete="email"
              required
            />

            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Secure Sign In →"}
            </button>

            {message && <div className="message">{message}</div>}
          </form>

          <div className="security">
            Authentication powered by Supabase
            <br />
            <span className="prototype">
              N&T Accounting • Prototype v0.1
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
