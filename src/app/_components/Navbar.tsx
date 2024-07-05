import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto flex h-14 max-w-5xl items-center justify-between p-3 font-medium">
      <Link href="/">New Meeting</Link>
      <SignedIn>
        <div className="flex items-center gap-5">
          <Link href="/meetings">Meetings</Link>
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}