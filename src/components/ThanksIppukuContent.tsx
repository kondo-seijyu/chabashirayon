"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ThanksIppukuContent() {
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
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#f8f8f4]">
      <h1 className="text-2xl font-semibold mb-4">ありがとうございます。</h1>
      <p className="text-gray-700">あなたの「一服」が、そっと届きました。</p>
    </main>
  );
}