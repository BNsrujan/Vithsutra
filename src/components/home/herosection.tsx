import { text } from "@/lib/typography";

export default function Hero() {
  return (
    <div className="relative w-full h-[100vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center'
          }}
        >
          <source src="/video/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
        <div className="absolute inset-0 bg-white/30" />
      </div>
      
      <section className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          <p className={`${text.DisplayPrefixtext} text-gray-900 text-base sm:text-lg md:text-xl`}>
            Experience The
          </p>
          <h1 className={`${text.Displaytext} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900 font-bold`}>
            Vithsutra 
          </h1>
          <p className={`${text.midtext} text-gray-700 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8`}>
            We create tailored solutions designed to meet your organization&apos;s
            unique needs and goals. Our team is committed to delivering projects
            on time, without compromising on quality. With a strong focus on
            detail and excellence.
          </p>
          <div className="pt-4 sm:pt-6 md:pt-8">
            <a 
              href="/contact" 
              className="inline-block bg-company-blue text-white px-6 py-3 rounded-lg hover:bg-company-blue-dark transition-colors shadow-lg text-sm sm:text-base md:text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
