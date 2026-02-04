"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useActionState } from "react";
import { authClient } from '@/lib/auth-client';


async function login(prevState: unknown, formData: FormData) {  
  const { error } = await authClient.signIn.email({
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString() || "",
      callbackURL: '/',
  });

  return error?.message || "";
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, formAction, isPending] = useActionState(login, undefined);

  const handleSignup = () => {
    // TODO: Implement signup functionality
    console.log("signup not yet implemented");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">w8room</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12"
              />
            </div>
            {errorMessage && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {errorMessage}
              </div>
            )}
            <div className="space-y-3 pt-2">
              <Button
                type="submit"
                className="w-full h-12 text-base font-medium"
                variant="default"
                disabled={isPending}
              >
                {isPending ? "Logging in..." : "Login"}
              </Button>
              <Button
                type="button"
                onClick={handleSignup}
                className="w-full h-12 text-base font-medium"
                variant="outline"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
