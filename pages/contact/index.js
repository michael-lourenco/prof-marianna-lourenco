"use client"

import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Contact = () => {
  const mailtoLink =
    "mailto:seu-email@exemplo.com?subject=Vamos%20Impactar%20a%20Educação%20Juntos&body=Olá,%0D%0A%0D%0AGostaria de saber mais sobre como podemos impactar a educação juntos.%0D%0A%0D%0AAtenciosamente,%0D%0A[Seu Nome]"

  return (
    <div className="bg-primary/30 text-center lg:h-full">
      <div className='container mx-auto h-full flex flex-col justify-center'>
        <div className="flex flex-col items-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8"
          >
            VAMOS <span className="text-accent">IMPACTAR</span> A EDUCAÇÃO JUNTOS!
          </motion.h2>

          <motion.div variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden">
            <Link
              href={mailtoLink}
              className="btn rounded-full border border-white/50 px-8 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                Entre em Contato
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

