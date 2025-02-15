// import Image from "next/image"

// export default function Lectures() {
//   return (
//     <section className="w-full pt-16">
//       <div className="mx-auto max-w-7xl px-8">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//         <div className="w-full max-w-[350px] flex flex-col items-center">
//           <div className="w-[250px] relative">
//             <Image 
//               src="/images/palestras.jpg"
//               width={250}
//               height={265}
//               alt="Speaker presenting"
//               className="rounded-lg object-cover"
//             />
//           </div>

//           <div className="rounded-lg bg-[#8B5E34] bg-opacity-20 p-6 relative text-[#4A3425]">
//             <p className="text-lg leading-relaxed mb-4">
//               Reconhecida por minha abordagem sensível e prática, combino conceitos teóricos com estratégias
//               acessíveis para impactar diretamente a vida de educadores e seus ambientes sociais.
//             </p>
//             <p className="text-lg leading-relaxed">
//               Por meio das minhas palestras, ofereço ferramentas transformadoras que conectam e auxiliam profissionais
//               da educação a florescerem em suas carreiras e vidas pessoais promovendo bem-estar, liderança e
//               colaboração.
//             </p>
//           </div>
//         </div>

//           <div className="flex flex-col w-full max-w-[350px] space-y-8">
//             <h1 className="font-serif text-4xl font-medium text-[#8B5E34] mt-24">
//               PALESTRAS
//               <br />
//               EM TÓPICOS
//             </h1>

//             <ul className="space-y-4 text-[#4A3425]">
//               <li>A nova geração de professores: o professor no Século XXI</li>
//               <li>"O professor é o que há de mais tecnológico na educação": Protagonismo Docente</li>
//               <li>
//                 Brilhe e Ilumine: escolha brilhar e ilumine o mundo ao seu redor ao se abraçar exatamente do jeito eu
//                 você é!
//               </li>
//               <li>Desenvolvimento Pessoal – Superando o medo de não ser "perfeito"</li>
//               <li>Errar não é falhar: Resiliência, Empatia e Humanização</li>
//               <li>Confiança na Prática: reaprenda-se com Segurança, Autoridade e Propósito</li>
//               <li>A Revolucione-se: Rupturas e Renovação</li>
//               <li>Abrindo horizontes: Conquistando Sonhos Através do Intercâmbio</li>
//               <li>Empowering English Teachers: Building Confidence and Resilience</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from "next/image";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Lectures() {
  return (
    <div className="flex border-none flex-col items-center">
      {/* Card da Imagem */}
      <Card className="w-full border-none rounded-none shadow-none bg-none p-0 m-0">
        <CardContent className="flex justify-center p-0">
          <div className="w-full flex items-center justify-center">
            {/* Substitua essa div pela sua imagem */}
            <Image 
            src="/images/lectures.png" // Replace with your image path
            width={1920}
            height={1080}
            alt="Speaker presenting"
            />
          </div>
        </CardContent>
      </Card>

      {/* Card de Contato */}
      {/* <Card className="w-full">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-gray-600" />
            <span>(21) 96436-2490</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-gray-600" />
            <span>profmariannalourenco@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Instagram className="w-6 h-6 text-gray-600" />
            <span>@profmariannalourenco</span>
          </div>
          <div className="flex items-center space-x-4">
            <Youtube className="w-6 h-6 text-gray-600" />
            <span>@profmariaNNalourenco</span>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
