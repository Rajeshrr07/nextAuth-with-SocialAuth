'use client';
import { Button } from "./ui/button";
import { doCredentialLogin } from "@/app/actions";
import SocialLogin from "@/components/SocialLogin";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      console.log('formData: ', formData);

      if (response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <div className="text-xl text-red-500">{error}</div>

      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            aria-label="Email Address"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            aria-label="Password"
          />
        </div>

        <Button type="submit" className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          Credential Login
        </Button>
      </form>

      <div className="my-6 border-t border-gray-300"></div>
      <SocialLogin />
    </div>
  );
};

export default LoginForm;
