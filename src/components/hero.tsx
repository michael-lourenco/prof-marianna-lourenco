"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { brasika } from "@/app/fonts"

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Container da imagem de fundo */}
      <div className="absolute inset-0 flex justify-center items-start">
        <div className="relative h-full">
          <Image
            src="/images/hero.png"
            alt="Background image"
            width={1080}
            height={1920}
            style={{
              height: "100%",
              width: "auto",
              objectFit: "cover",
            }}
            priority
          />

          {/* Card do ano (2025) posicionado em relação à imagem de fundo */}
          <Card className="absolute top-0 left-5 px-4 pt-12 bg-[#FAF7F5] border-t-0 rounded-none rounded-b-md shadow-ml z-20">
            <span className={`text-3xl font-bold text-[#8B5E34] ${brasika.className}`}>2025</span>
          </Card>
        </div>
      </div>

      {/* Overlay para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Conteúdo centralizado */}
      <div className={`relative z-20 h-full flex flex-col items-center justify-center text-center`}>
        <div className={`text-[#FAF7F5] text-6xl font-bold w-full drop-shadow-xl ${brasika.className}`}>MARIANNA</div>
        <div className={`text-[#FAF7F5] text-6xl font-bold w-full drop-shadow-xl ${brasika.className}`}>LOURENCO</div>
        <div className="text-[#FAF7F5] text-3xl font-bold w-full drop-shadow-xl">PROFESSORA PALESTRANTE</div>
      </div>
    </div>
  )
}
