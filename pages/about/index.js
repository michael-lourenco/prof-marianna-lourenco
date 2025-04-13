"use client"

import { useState } from "react"

//  about data
export const aboutData = [
  // {
  //   title: "parceiros",
  //   info: [
  //     { id: "parceiro1", img: "/avatar.png", url: "https://google.com" },
  //     { id: "parceiro2", img: "/avatar.png", url: "https://google.com" },
  //     { id: "parceiro3", img: "/avatar.png", url: "https://google.com" },
  //     { id: "parceiro4", img: "/avatar.png", url: "https://google.com" },
  //   ],
  // },
  {
    title: "credenciais",
    info: [
      {
        title: "Graduada em Letras pela PUC-Rio",
        stage: "",
      },
      {
        title: "Pós-graduada em Ensino da Língua Inglesa pela UNESA",
        stage: "",
      },
      {
        title: "Professora Concursada da SMERJ",
        stage: "",
      },
    ],
  },
  {
    title: "conquistas",
    info: [
      {
        title: "Bolsa para o PDPI-2019",
        stage: "",
      },
      {
        title: "Faz parte da rede Alumni dos EUA",
        stage: "",
      },
      {
        title: "Coordenei o Chapter da USBEARJ,",
        stage: "",
      },
      {
        title: "Atua como mentora/tutora em alguns programas oferecidos pela Embaixada dos EUA como o ACCESS FOR TEACHERS VIEWING PARTIES.",
        stage: "",
      },
      {
        title: "Nos últimos 2 anos palestrou no PDO do PDPI para que os participantes pudessem otimizar a sua participação no programa",
        stage: "",
      },
    ],
  },
]
import Circles from "../../components/Circles"
import Image from "next/image"
import Link from "next/link"

// framer motion
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const About = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className="bg-primary/30 flex items-center lg:h-full">
      <Circles />
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[420px] z-0"
      >
        <Avatar width={400} height={400} />
      </motion.div> */}
      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6 z-10">
        <div className="flex-1 flex flex-col justify-center text-left lg:text-left">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-center">
            INSPIRANDO <span className="text-accent">EDUCADORES</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            <strong>Marianna Lourenço </strong> é professora, palestrante e mentora — uma voz potente quando o assunto é valorização docente, bem-estar e autoconhecimento na carreira educacional.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Graduada em Letras pela PUC-Rio e pós-graduada em Ensino da Língua Inglesa, também atua como mentora em programas de formação de professores promovidos pela Embaixada dos Estados Unidos.
        </motion.p>
        <motion.p
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                  >
          Com uma trajetória sólida e sensível, Marianna se destaca como uma das principais referências no Brasil quando o tema é o cuidado com quem educa. Ela inspira professores a se priorizarem sem culpa, acreditando que o bem-estar do educador é o primeiro passo para qualquer transformação verdadeira na educação.
        </motion.p>
        <motion.p
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    animate="show"                  
                    exit="hidden"
                    className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
                  >
            Reconhecida por sua abordagem acolhedora e prática, conduz educadores no reencontro com a autoestima, a confiança e o propósito. Sua missão é clara: ajudar professores a se olharem com mais orgulho, carinho e verdade — e, assim, impactarem positivamente suas vidas, suas salas de aula e o futuro da educação.  
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={item.title}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-start">
            {aboutData[index].title === "parceiros" ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {aboutData[index].info.map((partner) => (
                  <Link key={partner.id} href={partner.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={partner.img || "/placeholder.svg"}
                      alt={`Partner ${partner.id}`}
                      width={100}
                      height={100}
                      className="transition-transform hover:scale-105"
                    />
                  </Link>
                ))}
              </div>
            ) : (
              aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center  text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {/* <div className="hidden md:flex">-</div> */}
                  <div>{item.stage}</div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

