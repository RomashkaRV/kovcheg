"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";

function setCookie(name: string, value: string) {
  let expires = "";

  const date = new Date();
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
  expires = "; expires=" + date.toUTCString();

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export default function Auth() {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("key");

    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    }
  }, []);

  const redirectPath = useMemo(() => {
    if (token.length > 0) {
      setCookie("userToken", token);

      axios.interceptors.request.use(
        (config) => {
          config.headers["x-api-key"] = token;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      return "/admin";
    } else {
      Cookies.remove("userToken");

      return "/";
    }
  }, [token]);

  useEffect(() => {
    router.push(redirectPath);
  }, [redirectPath, router]);

  return null;
}
