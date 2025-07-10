"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {  motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { text } from "@/lib/typography";
import { ArrowUpRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";


interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

interface ArrowButtonProps {
  onClick?: () => void;
  className?: string;
  isTouched?: boolean;
}

type Card = {
  src: string;
  title: string;
  link:string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -900, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 900, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 12 : 24;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };



  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full  overflow-x-visible ">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] "
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%]  bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-company-lg-24   w-screen md:w-full",
              "mx-auto ", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut"
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);
  const { onCardClose } = useContext(CarouselContext);
  const router = useRouter();
  const handleClose = React.useCallback(() => {
  
    onCardClose(index);
  }, [onCardClose, index]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }


    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ handleClose]);

  useOutsideClick(containerRef, handleClose);


  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  const ArrowButtons = ({ onClick, className = '', isTouched = false }: ArrowButtonProps) => {
    return (
      <button 
        onClick={onClick}
        className={`absolute  z-50 sm:right-1 md:right-8 bottom-4 sm:bottom-6 md:bottom-8 bg-company-white rounded-full p-4 sm:p-5 md:p-8 transition-all duration-700 ease-in-out  text-company-black group-hover:bg-company-primary-royalBlue group-hover:text-company-white-text'} ${className}`}
      >
        <ArrowUpRightIcon
          className={`h-4 w-4 sm:h-6 sm:w-6 text-company-black ${isTouched ? 'text-company-white Group-hover:text-company-primary-royalBlue'  : 'text-company-text-gray group-hover:text-company-white-text'} transition-all  duration-700 ease-in-out`}
          strokeWidth={3}
        />
      </button>
    );
  }

  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={()=>router.push(card.link)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleTouchStart}
        onMouseLeave={handleTouchEnd}
        whileInView={{
          scale:1
          
        }}
        initial={{
          scale:0.9
        }}
        transition={{
          delay:-1
        }}
        
        
        className="group relative w-[80vw] z-10 flex h-80 flex-col  items-start justify-start scale-0.9 overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-[50vw] dark:bg-neutral-900 transition-all duration-700 ease-in-out hover:scale-[1.0001]"
      >
        <div className="pointer-events-none  absolute w-auto inset-x-0 top-0 z-30 h-full bg-company-dark-gray/20  duration-700 ease-in-out " />
        <div className=" absolute bottom-0 left-1 z-40 p-company-lg-24">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className={`${text.cardBodytext} text-left text-company-black/70  transition-all duration-700 ease-in-out group-hover:text-company-black`}
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className={`${text.cardHeadingtext}  max-w-xs text-left text-company-black/70  transition-all duration-700 ease-in-out group-hover:text-company-black`}
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10   object-contain transition-all duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute  inset-y-0  right-16 md:right-3  z-40">
          <ArrowButtons isTouched={isTouched} />
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
