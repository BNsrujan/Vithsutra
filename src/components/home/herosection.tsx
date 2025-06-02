import { text } from "@/lib/typography";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
      
      <section className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <p className={`${text.DisplayPrefixtext} text-gray-900`}>
            Experience The
          </p>
          <h1 className={`${text.Displaytext} text-4xl md:text-6xl text-gray-900`}>
            Vithsutra 
          </h1>
          <p className={`${text.midtext} text-gray-700 max-w-3xl mx-auto`}>
            We create tailored solutions designed to meet your organization&apos;s
            unique needs and goals. Our team is committed to delivering projects
            on time, without compromising on quality. With a strong focus on
            detail and excellence.
          </p>
        </div>
      </section>
    </div>
  );
}
