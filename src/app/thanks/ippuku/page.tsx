"use client";

import { Suspense } from "react";
import ThanksIppukuContent from "@/components/ThanksIppukuContent";

export default function Page() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ThanksIppukuContent />
    </Suspense>
  );
}