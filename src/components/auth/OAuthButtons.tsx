import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";

interface OAuthButtonsProps {
  isRegister?: boolean;
}

const OAuthButtons = ({ isRegister = false }: OAuthButtonsProps) => {
  const handleOAuthLogin = (provider: string) => {
    console.log(`${isRegister ? "Register" : "Login"} with ${provider}`);
  };

  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        onClick={() => handleOAuthLogin("Google")}
        className="w-full h-12 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
      >
        <div className="flex items-center justify-center space-x-3">
          <Chrome className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700 font-medium">
            {isRegister ? "Sign up" : "Continue"} with Google
          </span>
        </div>
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => handleOAuthLogin("Microsoft")}
        className="w-full h-12 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
      >
        <div className="flex items-center justify-center space-x-3">
          <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
          <span className="text-gray-700 font-medium">
            {isRegister ? "Sign up" : "Continue"} with Microsoft
          </span>
        </div>
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => handleOAuthLogin("GitHub")}
        className="w-full h-12 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
      >
        <div className="flex items-center justify-center space-x-3">
          <Github className="w-5 h-5 text-gray-700" />
          <span className="text-gray-700 font-medium">
            {isRegister ? "Sign up" : "Continue"} with GitHub
          </span>
        </div>
      </Button>
    </div>
  );
};

export default OAuthButtons;
