"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { brasika } from "@/app/fonts"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-[#FAF7F5] flex flex-col items-center justify-center p-8 text-center">
      {/* Imagem centralizada */}
      <div className="w-[550px] h-[290px] relative">
        <Image
          src="/images/about_2.png"
          width={550}
          height={290}
          alt="Speaker presenting"
          className="rounded-none object-cover w-full h-full"
        />
      </div>

      {/* Texto centralizado abaixo da imagem */}
      <h1 className="font-serif text-4xl font-medium text-[#8B5E34] mt-4">MARIANNA</h1>
      <h2 className="font-serif text-xl font-medium text-[#8B5E34]">além das palestras</h2>

      {/* Grid abaixo do cabeçalho */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 w-full max-w-7xl">
        {/* Left Column */}
        <div className="relative flex flex-col space-y-6">

          {/* Text content with overlay */} 
          <div className="h-[560px] w-[350px] relative rounded-lg bg-[#8B5E34] bg-opacity-20 p-6 text-[#4A3425]">
            Profissional apaixonada pela educação, Palestrante,
            mentora, professora com vasta experiência no setor, e
            apaixonada por transformar a educação a partir do
            fortalecimento humano.
            Minha missão é inspirar educadores, gestores e instituições a
            alcançar equilíbrio, confiança e propósito em suas jornadas.
            Encorajo transformar desafios em oportunidades de
            crescimento, através do gerenciamento emocional, o
            autoconhecimento e a valorização pessoal como pilares
            essenciais para construir uma educação mais harmoniosa e
            significativa.
            Graduada em Letras pela PUC-Rio, Pós-graduada em
            Ensino da Língua Inglesa pela UNESA e Professora da
            SMERJ.
            Em 2019, após processo seletivo, conquistei uma bolsa
            para o PDPI (Programa de Desenvolvimento
            Profissional Para Professores de Inglês nos EUA),
            oferecido em uma parceria CAPES, Fulbright e
            Embaixada dos Estados Unidos.
            Passei a fazer parte da rede Alumni dos EUA, coordenei o
            Chapter da USBEARJ, e venho atuando como
            mentora/tutora em alguns programas oferecidos pela
            Embaixada dos EUA para desenvolvimento de professores
            em várias regiões brasileiras.
            Desde então, venho desenvolvendo um trabalho cada vez
            mais voltado para enaltecer e inspirar educadores.
            “O PROFESSOR É O QUE HÁ
            DE MAIS TECNOLÓGICO NA
            EDUCAÇÃO”
          </div>

        </div>
  
        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          <div className="h-[560px] w-[335px] bg-gray-200">
              <Image 
                src="/images/about.jpg" 
                width={335}
                height={560}
                alt="Speaker presenting"
                className="rounded-lg object-cover"
              />
            </div>
        </div>
      </div>
    </div>
  )
}
