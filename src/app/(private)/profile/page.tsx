import { Suspense } from "react";
import UserProfile from "@/components/UserProfile";
import { Loader } from "@/components/Loader";

export default async function ProfilePage() {
  return (
    <div className="pl-10">
      <Suspense fallback={<Loader />}>
        <UserProfile />
      </Suspense>
    </div>
  );
}
