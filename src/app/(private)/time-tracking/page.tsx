import React from "react";
import { auth } from "@/auth";
import { TimeEntryMgr } from "@/components/erp/TimeEntryMgr";

const TimeTracking = async () => {
  const session = await auth();

  if (
    !session ||
    !["MANAGER", "ADMIN", "STAFF", "SUPER_ADMIN"].includes(session.user.role)
  ) {
    return (
      <>
        <h1>you dont have access ...</h1>
      </>
    );
  }
  return <TimeEntryMgr />;
};

export default TimeTracking;
