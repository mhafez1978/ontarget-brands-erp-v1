"use client";
import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { TargetIcon } from "lucide-react";

const AuthClient = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 bg-[url('/business.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="w-full text-center mb-8">
          <div className="w-full flex flex-row items-center justify-center">
            <TargetIcon size={58} color="#ffffff" />
            <h1 className="text-5xl font-bold text-white mb-2">
              n-Target Brands
            </h1>
          </div>
        </div>

        {/* Auth Forms */}
        <div className="block bg-white rounded-2xl shadow-xl overflow-hidden min-h-[55vh] border border-sky-500">
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
              <span className="hover:scale-150">Login</span>
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${
                !isLogin
                  ? "text-black border-b-2 border-black bg-gray-50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="hover:scale-150">Register</span>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-8 h-full flex flex-col justify-center items-center">
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthClient;
