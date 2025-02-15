import Image from "next/image";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      {/* Card da Imagem */}
      <Card className="w-full border-none rounded-none shadow-none bg-none p-0 m-0">
        <CardContent className="flex justify-center p-0">
          <div className="w-full flex items-center justify-center">
            {/* Substitua essa div pela sua imagem */}
            <Image 
            src="/images/call-to-action.png" // Replace with your image path
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
