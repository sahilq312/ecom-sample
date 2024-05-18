import Image from "next/image";
import LoginForm from "@/components/auth/loginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

        <div className="h-full pt-20 overflow-hidden">
        <LoginForm/>
        </div>
    </main>
  );
}
