import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed z-50 w-full">
      <div className="h-20 flex justify-between items-center transition-all duration-500 backdrop-blur-md px-6 md:px-12 px-7 py-3 text-sm tracking-widest text-[#B5A898]">
        
        <Image
            src={"/log.png"}
            width={40}
            height={40}
        />

        <a 
        href="#fav"
        className="text-[#FFFFFF]/60 font-inter text-xs tracking-widest">
            Our Favourites
        </a>

      </div>
    </div>
  );
}