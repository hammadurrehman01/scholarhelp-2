import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      router.push("/admin");
    } else {
      router.push("/login");
    }
  }, [router, pathname]);

  return <>{children}</>;
};

export default AuthenticatedRoute;
