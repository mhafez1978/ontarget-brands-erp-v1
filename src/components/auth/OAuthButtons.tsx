import { Button } from "@/components/ui/button";
import Image from "next/image";

interface OAuthButtonsProps {
  isRegister?: boolean;
}

export const OAuthButtons = ({ isRegister }: OAuthButtonsProps) => {
  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full h-12 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
      >
        <span className="w-1/3 flex justify-end">
          <Image
            src="/gmail.svg"
            alt=""
            width={52}
            height={52}
            className="object-cover border-0"
          />
        </span>
        <span className="w-2/3 flex justify-start text-gray-700 font-medium">
          {isRegister ? "Register" : "Login"} with Gmail
        </span>
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full h-12 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
      >
        <span className="w-1/3 flex justify-end">
          <Image
            src="/microsoft.svg"
            alt=""
            width={50}
            height={50}
            className="border-0"
          />
        </span>
        <span className="w-2/3 flex justify-start text-gray-700 font-medium">
          {isRegister ? "Register" : "Login"} with Microsoft
        </span>
      </Button>
    </div>
  );
};
