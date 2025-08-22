import { SignupForm } from "@/components/auth/signup-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  return (
    <div className="w-full lg:grid lg:min-h-dvh lg:grid-cols-2 xl:min-h-dvh">
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://placehold.co/1200x900.png"
          alt="Image"
          width="1200"
          height="900"
          data-ai-hint="finance abstract"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
                 <Link href="/" className="flex items-center gap-2 text-foreground justify-center mb-4">
                    <MountainIcon className="h-7 w-7 text-primary" />
                    <span className="text-2xl font-bold">FinTrackr</span>
                </Link>
                <h1 className="text-3xl font-bold">Create an account</h1>
                <p className="text-balance text-muted-foreground">
                    Enter your information to create an account
                </p>
            </div>
            <SignupForm />
            <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline font-medium text-primary">
                Sign in
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
