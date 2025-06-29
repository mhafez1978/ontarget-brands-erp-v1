"use client";
import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const AuthClient = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-xl mb-4">
            <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            On-Target Brands
          </h1>
          <p className="text-gray-600">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </p>
        </div>

        {/* Auth Forms */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Tab Buttons */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                isLogin
                  ? "text-black border-b-2 border-black bg-gray-50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                !isLogin
                  ? "text-black border-b-2 border-black bg-gray-50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              Resgister
            </button>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} OnTarget Brands ERP. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthClient;
