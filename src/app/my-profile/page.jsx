"use client";
import { UpdateUserModal } from "@/Components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
    console.log(user);
  return (
    <div className="min-h-[60vh]">
      <Card className="max-w-96 mx-auto text-black flex justify-center items-center mt-20 py-10 shadow-2xl">
        <Avatar className="h-20 w-20">
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
       <p className="font-bold text-2xl">{user?.name}</p>
       <p className="text-muted mb-5">{user?.email}</p>
       <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
