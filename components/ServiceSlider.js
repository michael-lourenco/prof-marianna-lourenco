"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog"
import { Button } from "../components/ui/button"

// import swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// icons
import { RxPencil2, RxArrowTopRight, RxCross2 } from "react-icons/rx"

// import required modules
import { FreeMode, Pagination } from "swiper"

// service data
export const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'A nova geração de professores',
    fullTitle:'A nova geração de professores: o professor no Século XXI',
    description: 'O professor no Século XXI',
    resume:'A nova geração de professores não se define apenas pelo domínio de tecnologias ou metodologias inovadoras, mas pela coragem de se colocar em primeiro lugar e se sentir protagonista da educação. Antes de transformar vidas, o educador precisa reconectar-se consigo mesmo, resgatar sua essência e alimentar seu brilho interior. Quando um professor se escolhe, ele se fortalece, encontra propósito e, assim, ilumina todos ao seu redor. Nesta palestra, exploro como essa reconexão pessoal é o primeiro passo para uma educação mais autêntica, inspiradora e sustentável. A Nova Geração de Professores não é composta por profissionais que visam apenas transmitir conhecimento focado no aprendizado, mas se entende a responsabilidade de ser um exemplo e, para ser um bom exemplo, precisa primeiramente estar bem consigo mesmo.',
  },
  {
    icon: <RxPencil2 />,
    title: `“O professor é o que há de mais tecnológico na educação”:`,
    fullTitle:`“O professor é o que há de mais tecnológico na educação”: Protagonismo Docente`,
    description: '',
    resume: 'Em tempos de inteligência artificial e metodologias digitais, uma verdade permanece: a tecnologia mais poderosa na educação é o próprio professor. Aqui, desvendamos como o protagonismo docente vai além das ferramentas, revelando-se na forma como o professor se posiciona, se reinventa e inspira. A chave para uma educação impactante está na confiança no próprio potencial e na habilidade de usar qualquer recurso – tecnológico ou não – para tocar vidas, despertar curiosidade e construir conhecimento significativo.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Brilhe e Ilumine',
    fullTitle:'Brilhe e Ilumine: escolha brilhar e ilumine o mundo ao seu redor ao se abraçar exatamente do jeito que você é!',
    description: 'escolha brilhar e ilumine o mundo ao seu redor ao se abraçar',
    resume: 'O maior presente que um professor pode oferecer ao mundo é a sua autenticidade. Nesta conversa transformadora, refletimos sobre como reconhecer e valorizar a própria trajetória fortalece não só a nossa luz, mas também a daqueles ao nosso redor. Quando nos permitimos brilhar, mostramos aos nossos alunos que eles também podem. É sobre coragem, autoaceitação e o impacto poderoso de sermos exatamente quem somos – sem medo, sem máscaras, apenas com verdade e propósito.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Desenvolvimento Pessoal',
    fullTitle:'Desenvolvimento Pessoal – Superando o medo de não ser “perfeito”',
    description: 'Superando o medo de não ser “perfeito”',
    resume:'Muitos professores sentem que precisam ser impecáveis para serem respeitados, mas a verdade é que a força do ensino está na vulnerabilidade, na aprendizagem contínua e na coragem de ser real. O objetivo desta palestra é desmistificar a busca pela perfeição e mostrar como aceitar as próprias falhas é um ato de crescimento e libertação. Você não precisa ser perfeito para ser um grande professor – você precisa ser humano, acessível e disposto a evoluir!'
  },
  {
    icon: <RxPencil2 />,
    title: 'Errar não é falhar',
    fullTitle:'Errar não é falhar: Resiliência, Empatia e Humanização',
    description: 'Resiliência, Empatia eHumanização',
    resume: 'A educação se fortalece no erro, na tentativa, na adaptação e principalmente, na persistência. Ao desconstruirmos a ideia de que errar é fracassar, abrimos espaço para o aprendizado genuíno e para uma cultura educacional mais empática e humanizada. Esta palestra fala sobre como desenvolver resiliência e transformar desafios em crescimento, tanto para os alunos quanto para os professores. Porque ensinar não é sobre nunca errar, mas sobre mostrar que cada erro pode ser um passo a mais na jornada do conhecimento.'
  },
  {
    icon: <RxPencil2 />,
    title: 'Confiança na Prática',
    fullTitle:'Confiança na Prática: reaprenda-se com Segurança, Autoridade e Propósito',
    description: 'reaprenda-se com Segurança, Autoridade e Propósito',
    resume: 'A insegurança pode silenciar até os professores mais experientes, mas confiança não é algo que nasce pronto – ela se constrói. Esta palestra vai além da teoria e explora estratégias práticas para fortalecer a presença em sala de aula, comunicar-se com autoridade e encontrar propósito em cada passo da jornada docente. Ser um professor seguro não significa ter todas as respostas, mas sim ter clareza sobre o seu valor e impacto na vida de seus alunos.'
  },
  {
    icon: <RxPencil2 />,
    title: 'Abrindo horizontes',
    fullTitle:'Abrindo horizontes: Conquistando Sonhos Através do Intercâmbio',
    description: 'Conquistando Sonhos Através do Intercâmbio',
    resume: 'Um intercâmbio pode mudar uma vida, abrir portas e expandir horizontes de maneira que nenhum livro ou sala de aula consegue fazer sozinho. Nesta palestra, compartilho algumas das minhas histórias de intercâmbio, estratégias e inspirações para quem deseja viver essa experiência que é, sem sombra de dúvidas, muito transformadora. O mundo está à espera daqueles que se atrevem a sonhar grande e conhecê-lo e o intercâmbio pode ser o primeiro passo para tornar esses sonhos realidade.'
  },
  {
    icon: <RxPencil2 />,
    title: 'Empowering English Teachers',
    fullTitle: 'Empowering English Teachers: Overcoming Insecurity, Building Confidence and Resilience',
    description: 'Building Confidence and Resilience',
    resume: 'Teaching English is not just about grammar and vocabulary, it is about navigating the insecurities that many teachers face when using and teaching the language. Doubts about pronunciation, fluency, or methodology can hold educators back, affecting their confidence in the classroom. In this session, we address these challenges head-on, providing practical strategies to help English teachers embrace their strengths, overcome self-doubt, and develop a resilient mindset. By strengthening their confidence, educators not only enhance their own teaching but also create a more encouraging and empowering learning environment for their students. Teaching with assurance and authenticity is the key to transforming the English language learning experience.'
  },
];


const ServiceSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const openModal = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="h-[240px] sm:h-[340px]"
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="bg-[#bd6905] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#272f3a] transition-all duration-300"
                onClick={() => openModal(item)}
              >
                {/* icon */}
                <div className="text-4xl text-accent mb-4">
                  <Image src={"/icon_topic.png"} width={40} height={40} alt="" className="" />
                </div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <Dialog open={isModalOpen} onOpenChange={closeModal} className="z-index-1000">
        <DialogContent className="sm:max-w-[425px] z-index-1000">
          <DialogHeader>
            <DialogTitle>{selectedItem?.fullTitle}</DialogTitle>
            <DialogDescription>{selectedItem?.resume}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            {/* <Button onClick={closeModal}>
              <RxCross2 className="mr-2 h-4 w-4" /> Close
            </Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ServiceSlider

