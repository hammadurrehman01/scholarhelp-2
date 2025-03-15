"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthenticatedRoute from "@/middlewares/AuthenticatedRoute ";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      const data = response.data;

      if (data.message === "Login successful") {
        successLogin(data.message, data.token);
      } else {
        errorLogin(data.message);
      }
    } catch (error: any) {
      if (error.response) {
        const errorMessage =
          error.response.data?.message || "Something went wrong";
        toast.error(errorMessage);
        console.log(errorMessage);
      } else {
        toast.error(error.message);
        console.log(error.message);
      }
    }
  };

  const successLogin = (message: string, token: string) => {
    toast.success(message);
    router.push("/admin");
    localStorage.setItem("adminToken", token);
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  const errorLogin = (message: string) => {
    toast.error(message);
    setLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <AuthenticatedRoute>
      <div className=" w-full pt-40 pb-20">
        <form onSubmit={handleLogin}>
          <div className="w-[40%] m-auto p-12 border-[0.5px] border-[#27272a] rounded-lg">
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="border-[0.5px] border-gray-700"
              type="email"
              placeholder="Enter Email"
            />
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="mt-2 border-[0.5px] border-gray-700"
              type="password"
              placeholder="Enter Password"
            />
            {/* <Link href="/reset-password">
            <span className="mt-6 text-sm cursor-pointer ">Reset Password</span>
          </Link> */}
            <Button className="mt-6 w-full">
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Logging In
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </form>
      </div>
    </AuthenticatedRoute>
  );
};

export default Page;
