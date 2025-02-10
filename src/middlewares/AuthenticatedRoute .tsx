import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const AuthenticatedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const parsedUser = user ? JSON.parse(user) : null;

    if (!parsedUser?.isLoggedIn) {
      // Redirect to login if the user is not logged in
      router.push("/login");
    } else if (parsedUser.isLoggedIn && pathname !== "/reset-password") {
      // Redirect to admin-panel if logged in and not on reset-password
      router.push("/admin-panel");
    }
    // No redirect if logged in and on reset-password
  }, [router, pathname]);

  return <>{children}</>;
};

export default AuthenticatedRoute;
