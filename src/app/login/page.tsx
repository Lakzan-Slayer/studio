import { LoginForm } from "@/components/auth/login-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MountainIcon } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <div className="w-full flex justify-center mb-6">
            <Link href="/" className="flex items-center gap-2 text-foreground">
                <MountainIcon className="h-7 w-7 text-primary" />
                <span className="text-2xl font-bold">FinTrackr</span>
            </Link>
        </div>
        <Card>
            <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
            <LoginForm />
            <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline font-medium text-primary">
                Sign up
                </Link>
            </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}