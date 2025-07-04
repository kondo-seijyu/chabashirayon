"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThanksFukairi() {
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
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-[#fdfaf5]">
      <Image
        src="/thanks_fukairi.png"
        alt="深煎りのお礼"
        width={280}
        height={180}
        className="mb-6 rounded-xl max-w-full h-auto"
      />
      <h1 className="text-xl sm:text-2xl font-semibold mb-2">
        深い想い、受け取りました。
      </h1>
      <p className="text-gray-700 text-base sm:text-lg">
        あなたのあたたかさが、静かに響いています。
      </p>
    </main>
  );
}