"use client"; // Ensure this component is client-side rendered

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({
      redirect: true, // Redirect the user after logout
      callbackUrl: "/", // Redirect to the homepage or any other route
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
    >
      Logout
    </button>
  );
}