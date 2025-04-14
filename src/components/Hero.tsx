import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center  p-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0  skew-y-12"
        )}
      />
      <section className="min-h-screen bg-company-white flex flex-col justify-center items-center text-center px-4">
        <p className="text-sm font-semibold text-company-black mb-2">
          Experience The
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-company-black">
          Vithsutra intelligence
        </h1>
        <p className="text-sm max-w-xl text-company-black">
          We create tailored solutions designed to meet your organization’s
          unique needs and goals. Our team is committed to delivering projects
          on time, without compromising on quality. With a strong focus on
          detail and excellence.
        </p>
      </section>
    </div>
  );
}
