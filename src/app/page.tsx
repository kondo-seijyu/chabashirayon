"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const products = [
  {
    name: "ちゃばしら 一服",
    price: "300円",
    image: "/ippuku.png",
    link: "https://buy.stripe.com/test_xxx",
    poem: "そっと差し出す、ひとときのやさしさ。",
  },
  {
    name: "ちゃばしら 深煎り",
    price: "580円",
    image: "/fukairi.png",
    link: "https://buy.stripe.com/test_yyy",
    poem: "しずかに沁みる、あたたかなこころ。",
  },
  {
    name: "ちゃばしら 利休",
    price: "980円",
    image: "/rikyu.png",
    link: "https://buy.stripe.com/test_zzz",
    poem: "一服に宿る、静かな想いと余白。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] p-6 text-center flex flex-col items-center justify-center space-y-10">
      <FadeIn delay={0.1}>
        <h1 className="text-3xl md:text-4xl font-semibold">
          ちょっと一服、そっと応援を。
        </h1>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="text-gray-600 text-base md:text-lg">
          この世界には、言葉にならない応援がある。
        </p>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="grid gap-8 md:grid-cols-3 w-full max-w-4xl px-4">
          {products.map((item, i) => (
            <FadeIn key={item.name} delay={0.6 + i * 0.2}>
              <a
                href={`${item.link}?paid=true`}
                className="flex flex-col justify-between h-full p-4 border rounded-xl hover:shadow-md transition bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded-xl mx-auto"
                  priority={i === 0}
                />
                <div className="mt-4 flex flex-col grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600 mt-2 text-sm">{item.poem}</p>
                  <p className="text-gray-800 font-bold mt-3">{item.price}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </main>
  );
}