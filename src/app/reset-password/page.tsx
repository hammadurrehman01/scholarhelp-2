"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Loader2, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import AuthenticatedRoute from "@/middlewares/AuthenticatedRoute ";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = (e: any) => {
    e.preventDefault();
    if (oldPassword === "" && newPassword === "") {
      toast.error("Please enter the inputs");
      return;
    }
    setLoading(true);

    const user: any = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);

    if (oldPassword === parsedUser.password) {
      const newCredentials = {
        email: "admin@gmail.com",
        password: newPassword,
        isLoggedIn: true,
      };
      localStorage.setItem("user", JSON.stringify(newCredentials));
      toast.success("Password reset successfully!");
      emptyState();
      router.push("/login");
    } else {
      toast.error("Please enter the correct password");
      emptyState();
    }
  };

  const emptyState = () => {
    setLoading(false);
    setOldPassword("");
    setNewPassword("");
  };

  return (
    <AuthenticatedRoute>
      <div className=" w-full py-8">
        <form onSubmit={handleResetPassword}>
          <div className="w-[40%] m-auto p-8 border-[0.5px] border-[#27272a] rounded-lg">
            <Link href="/login">
              <MoveLeft className="cursor-pointer" />
            </Link>
            <div>
              <Input
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                value={oldPassword}
                className="mt-2"
                type="password"
                placeholder="Enter Old Password"
              />
              <Input
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                value={newPassword}
                className="mt-2"
                type="password"
                placeholder="Enter New Password"
              />
            </div>
            <Button className="mt-6 w-full">
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  {/* Reset Password */}
                </div>
              ) : (
                "Reset Password"
              )}
            </Button>
          </div>
        </form>
      </div>
    </AuthenticatedRoute>
  );
};

export default Page;
