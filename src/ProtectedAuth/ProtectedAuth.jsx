'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedAuth({ children }) {
  const router = useRouter();
  let token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  if (token) return null;

  return children;
}
