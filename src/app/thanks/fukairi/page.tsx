"use client";

import { Suspense } from "react";
import ThanksFukairi from "@/components/ThanksFukairiContent";

export default function Page() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ThanksFukairi />
    </Suspense>
  );
}