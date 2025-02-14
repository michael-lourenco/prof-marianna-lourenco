import Image from "next/image"


export default function Lectures() {
    return (
      <div className="min-h-screen bg-[#FAF7F5] p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="w-[350px] relative flex flex-col space-y-6">
              {/* Image placeholder */}
              <div className="h-[265px] w-[250px] bg-gray-200">
                <Image 
                src="/images/palestras.jpg" // Replace with your image path
                width={250}
                height={265}
                alt="Speaker presenting"
                className="rounded-lg object-cover"
                />
              </div>
  
              {/* Text content with overlay */}
              <div className="relative rounded-lg bg-[#8B5E34] bg-opacity-20 p-6 text-[#4A3425]">
                <p className="text-lg leading-relaxed">
                  Reconhecida por minha abordagem sensível e prática, combino conceitos teóricos com estratégias
                  acessíveis para impactar diretamente a vida de educadores e seus ambientes sociais.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Por meio das minhas palestras, ofereço ferramentas transformadoras que conectam e auxiliam profissionais
                  da educação a florescerem em suas carreiras e vidas pessoais promovendo bem-estar, liderança e
                  colaboração.
                </p>
              </div>
  
            </div>
  
            {/* Right Column */}
            <div className="flex flex-col w-[350px]  space-y-8">
              <h1 className="font-serif text-4xl font-medium text-[#8B5E34]">
                PALESTRAS
                <br />
                EM TÓPICOS
              </h1>
  
              <ul className="space-y-4 text-[#4A3425]">
                <li>A nova geração de professores: o professor no Século XXI</li>
                <li>"O professor é o que há de mais tecnológico na educação": Protagonismo Docente</li>
                <li>
                  Brilhe e Ilumine: escolha brilhar e ilumine o mundo ao seu redor ao se abraçar exatamente do jeito eu
                  você é!
                </li>
                <li>Desenvolvimento Pessoal – Superando o medo de não ser "perfeito"</li>
                <li>Errar não é falhar: Resiliência, Empatia e Humanização</li>
                <li>Confiança na Prática: reaprenda-se com Segurança, Autoridade e Propósito</li>
                <li>A Revolucione-se: Rupturas e Renovação</li>
                <li>Abrindo horizontes: Conquistando Sonhos Através do Intercâmbio</li>
                <li>Empowering English Teachers: Building Confidence and Resilience</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    )
  }
  
  