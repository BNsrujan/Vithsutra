import { text } from "@/lib/typography";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-screen h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-screen object-cover"
          style={{ 
            objectPosition: 'center',
            minWidth: '100vw',
            minHeight: '100vh'
          }}
        >
          <source src="/video/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 z-10">
        <p className={`${text.DisplayPrefixtext} dark:text-white text-white`}>
          Experience The
        </p>
        <h1 className={`${text.Displaytext} md:text-6xl dark:text-white text-white`}>
          Vithsutra 
        </h1>
        <p className={`${text.midtext} text-white/90 max-w-5xl`}>
          We create tailored solutions designed to meet your organization&apos;s
          unique needs and goals. Our team is committed to delivering projects
          on time, without compromising on quality. With a strong focus on
          detail and excellence.
        </p>
      </section>
    </div>
  );
}
