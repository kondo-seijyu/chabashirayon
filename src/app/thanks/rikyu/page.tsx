"use client";

import { Suspense } from "react";
import ThanksRikyuContent from "@/components/ThanksRikyuContent";

export default function Page() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ThanksRikyuContent />
    </Suspense>
  );
}