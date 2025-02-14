import Image from "next/image";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-[#FAF7F5] space-y-6 p-6 pt-0">
      {/* Card da Imagem */}
      <Card className="w-full max-w-md">
        <CardContent className="flex justify-center p-4 pt-0">
          <div className="w-full h-64 flex items-center justify-center">
            {/* Substitua essa div pela sua imagem */}
            <Image 
            src="/images/contact.png" // Replace with your image path
            width={250}
            height={250}
            alt="Speaker presenting"
            className="rounded-lg object-cover"
            />
          </div>
        </CardContent>
      </Card>

      {/* Card de Contato */}
      <Card className="w-full max-w-md">
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
      </Card>
    </div>
  );
}
