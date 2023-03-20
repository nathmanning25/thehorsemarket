import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push("/");
    }, 15000);
  }, []);

  return (
    <div className="not-found">
      <h2>404 PAGE NOT FOUND</h2>
      <p>
        Going back to the <Link href="/">homepage</Link> in.....
      </p>
    </div>
  );
};

export default NotFound;
