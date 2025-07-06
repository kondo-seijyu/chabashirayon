"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const products = [
  {
    name: "ちゃばしら 一服",
    price: "300円",
    image: "/ippuku.png",
    link: "https://buy.stripe.com/test_28EfZaf8O0cq5Crbkp4ko00",
    poem: "そっと差し出す、ひとときのやさしさ。",
  },
  {
    name: "ちゃばしら 深煎り",
    price: "580円",
    image: "/fukairi.png",
    link: "https://buy.stripe.com/test_fZu7sE0dUcZc0i76054ko02",
    poem: "しずかに沁みる、あたたかなこころ。",
  },
  {
    name: "ちゃばしら 利休",
    price: "980円",
    image: "/rikyu.png",
    link: "https://buy.stripe.com/test_6oUeV6aSy2kyd4T6054ko01",
    poem: "一服に宿る、静かな想いと余白。",
  },
];

export default function Home() {
  return (
    <>
      <header className="w-full px-4 py-3 flex items-center justify-center bg-[#fcfbf9] shadow-sm">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="ちゃばしらロゴ"
            width={160}
            height={160}
            className="w-16 h-auto"
          />
        </div>
      </header>

      <main className="min-h-screen bg-[#fcfbf9] pt-4 pb-6 px-6 text-center flex flex-col items-center justify-center space-y-10">
        <FadeIn delay={0.1}>
          <h1 className="mt-0 sm:mt-4 text-[1.5rem] sm:text-4xl font-bold leading-tight sm:leading-snug tracking-tight sm:tracking-normal text-center font-serif">
            ちょっと一服、そっと応援を。
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="hero-poem text-gray-600 text-base md:text-lg">
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
                    <h2 className="text-xl font-semibold font-shippori-mincho">{item.name}</h2>
                    <p className="text-gray-600 mt-2 text-sm">{item.poem}</p>
                    <p className="text-gray-800 font-bold mt-3">{item.price}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <footer className="text-sm text-gray-400 mt-10">
          © Reflection Inc. – <a href="https://reflection-inc.com" className="underline">reflection-inc.com</a>
        </footer>
      </main>
    </>
  );
}