import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className=" h1 mb-6">
              Hello I'm <br /> <span className="text-[#bc48f9]">Jefri Jaya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eligendi voluptatibus, ducimus dolorum asperiores facere culpa accusamus at optio recusandae.
            </p>
          
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
              variant = "outline"
              size = "lg"
              className = "uppercase flex items-center gap-2 border border-[#bc48f9]"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-[#bc48f9] rounded-full flex justify-center items-center text-[#bc48f9] text-base hover:bg-[#bc48f9] hover:text-primary:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home