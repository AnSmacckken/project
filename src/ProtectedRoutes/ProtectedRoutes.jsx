'use client'

import { jwtDecode } from "jwt-decode";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { tokenContext } from "../Context/TokenContext";

export default function ProtectedRoutes({ children }) {
  let { setToken } = useContext(tokenContext);
  const router = useRouter();
  let token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token) {
      router.push("/auth/signin");
    } else {
      try {
        const decoded = jwtDecode(token);
        if (!decoded) {
          throw new Error("Invalid token");
        }
      } catch (err) {
        if (typeof window !== 'undefined') {
          localStorage.clear();
        }
        setToken(null);
        router.push("/auth/signin");
      }
    }
  }, [token, router, setToken]);

  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    if (decoded) return children;
  } catch (err) {
    return null;
  }
}
