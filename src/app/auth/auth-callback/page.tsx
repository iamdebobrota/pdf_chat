"use client";

import { trpc } from "@/app/_trpc/client";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const origin = searchParam.get("origin");

  const { data, isLoading, isError } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        //user is synced to
        router.push(origin ? `${origin}` : "/dashboard");
      }
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in");
      }
    },
    retry: true,
    retryDelay: 500,
  });

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-4xl">Setting up your account...</h3>
        <p className="">You will be redirected automatically</p>
      </div>
    </div>
  );
};

export default Page;
