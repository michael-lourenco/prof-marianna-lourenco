import Image from "next/image"


export default function Footer() {
    return (
      <div className="p-8">
        <div className="mx-auto max-w-7xl border-opacity-100 border-lime-300">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Column */}
            <div className="relative w-[350px] flex flex-col space-y-6 text-left">
  
              {/* Instagram handle */}
              <div className="text-[#8B5E34]">@profmariannalourenco</div>
            </div>
  
            {/* Right Column */}
            <div className="flex w-[350px] flex-col space-y-8">
              {/* Speaker name */}
              <div className="mt-auto text-right">
                <span className="font-serif text-xl font-bold text-[#8B5E34]">MARIANNA</span>
                <span className="font-serif text-xl font-light text-[#8B5E34]">LOURENÇO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  