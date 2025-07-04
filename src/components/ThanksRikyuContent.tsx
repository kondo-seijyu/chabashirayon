"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThanksRikyuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const paid = searchParams.get("paid");
    if (paid === "true") {
      setIsValid(true);
    } else {
      router.replace("/");
    }
  }, [searchParams, router]);

  if (!isValid) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-[#fdf7ef]">
      <Image
        src="/thanks_rikyu.png"
        alt="利休のお礼"
        width={320}
        height={240}
        className="mb-6 rounded-xl max-w-full h-auto"
      />
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">
        心より感謝申し上げます。
      </h1>
      <p className="text-gray-800 text-base sm:text-lg">
        この一服が、世界のどこかにやさしい風を吹かせますように。
      </p>
    </main>
  );
}