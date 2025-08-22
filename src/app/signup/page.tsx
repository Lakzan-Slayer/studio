import { SignupForm } from "@/components/auth/signup-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MountainIcon } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
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
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
            </CardHeader>
            <CardContent>
            <SignupForm />
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline font-medium text-primary">
                Sign in
                </Link>
            </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}