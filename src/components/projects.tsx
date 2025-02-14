import Image from "next/image"


export default function Projects() {
    return (
      <div className="min-h-screen bg-[#FAF7F5] p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="relative w-[350px] flex flex-col space-y-6">
              {/* Image placeholder */}
              <div className="h-[365px] w-[350px] bg-gray-200 rounded-none rounded-tr-[100px] overflow-hidden">
                <Image 
                src="/images/projects.png" // Replace with your image path
                width={350}
                height={365}
                alt="Speaker presenting"
                />
              </div>
  
              {/* Text content with overlay */}
              <div className="relative rounded-lg bg-[#8B5E34] bg-opacity-20 p-6 text-[#4A3425]">
                <h1> PROJETOS <br/> REALIZADOS <br/> COM: </h1>
              </div>
  
              {/* Instagram handle */}
              <div className="text-[#8B5E34]">@profmariannalourenco</div>
            </div>
  
            {/* Right Column */}
            <div className="flex w-[350px] flex-col space-y-8">

            <div className="h-[800px] w-[350px] bg-gray-200 rounded-none rounded-tr-[100px] overflow-hidden">
                <Image 
                src="/images/partners.png" // Replace with your image path
                width={350}
                height={800}
                alt="Speaker presenting"
                />
              </div>
              {/* Speaker name */}
              <div className="mt-auto">
                <span className="font-serif text-xl text-[#8B5E34]">MARIANNA</span>
                <span className="font-serif text-xl font-light text-[#8B5E34]">LOURENÇO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  