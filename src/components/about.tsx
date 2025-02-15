"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { seguiemj, tondu, tulpenone } from "@/app/fonts"

export default function About() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center p-8 text-center">
      <div className="w-[550px] h-[290px] relative">
        <Image
          src="/images/about_2.png"
          width={550}
          height={290}
          alt="Speaker presenting"
          className="rounded-none object-cover w-full h-full"
        />
      </div>

      <h1 className={`font-serif text-7xl font-medium text-[#8B5E34] mt-4 ${tulpenone.className}`}>MARIANNA</h1>
      <h2 className="font-serif text-xl font-medium text-[#8B5E34]">além das palestras</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 w-full max-w-7xl pb-16">
        <div className="relative flex flex-col items-center md:items-start">
          <div className="h-auto min-h-[560px] w-[350px] relative rounded-lg bg-[#8B5E34] bg-opacity-20 p-6 text-[#4A3425] text-justify">
            <div className="text-sm space-y-3">
              <p>Profissional apaixonada pela educação, Palestrante,
              mentora, professora com vasta experiência no setor, e
              apaixonada por transformar a educação a partir do
              fortalecimento humano.</p>
              
              <p>Minha missão é inspirar educadores, gestores e instituições a
              alcançar equilíbrio, confiança e propósito em suas jornadas.
              Encorajo transformar desafios em oportunidades de
              crescimento, através do gerenciamento emocional, o
              autoconhecimento e a valorização pessoal como pilares
              essenciais para construir uma educação mais harmoniosa e
              significativa.</p>
              
              <p>Graduada em Letras pela PUC-Rio, Pós-graduada em
              Ensino da Língua Inglesa pela UNESA e Professora da
              SMERJ.</p>
              
              <p>Em 2019, após processo seletivo, conquistei uma bolsa
              para o PDPI (Programa de Desenvolvimento
              Profissional Para Professores de Inglês nos EUA),
              oferecido em uma parceria CAPES, Fulbright e
              Embaixada dos Estados Unidos.</p>

              <p>Passei a fazer parte da rede Alumni dos EUA, coordenei o
              Chapter da USBEARJ, e venho atuando como
              mentora/tutora em alguns programas oferecidos pela
              Embaixada dos EUA para desenvolvimento de professores
              em várias regiões brasileiras.</p>

              <p>Desde então, venho desenvolvendo um trabalho cada vez
              mais voltado para enaltecer e inspirar educadores.</p>

              <p className="font-bold text-center mt-6">"O PROFESSOR É O QUE HÁ
              DE MAIS TECNOLÓGICO NA
              EDUCAÇÃO"</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="h-[560px] w-[335px]">
            <Image 
              src="/images/about.jpg" 
              width={335}
              height={560}
              alt="Speaker presenting"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}