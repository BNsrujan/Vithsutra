// heading
// lablel
// tital  mid-bold
// dispaly 


const text = {
  // 16px, 22px, 24px, 28px
  logo:
  "text-[1rem] sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[1em] font-semibold text-wrap ",

  // 96px, 140px, 90px, 100px, 100px
  Displaytext:
    "text-[6rem] sm:text-[8.75rem] md:text-[5.625rem] lg:text-[6.25rem] xl:text-[6.25rem] leading-[1] tracking-tighter font-semibold text-wrap",

  // base (16px), 18px, 24px, 30px, 30px
  midtext:
    "text-base font-bold text-black/20 dark:text-white/20 flex flex-wrap sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl text-wrap",

  // 14px, 18px, 20px, 21px, mt: 7px, mb: 18px
  DisplaySupportingtext:
    "text-[0.875rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.3125rem] md:leading-[1.2] tracking-tight font-semibold md:mt-[0.4375rem] md:mb-[1.125rem] text-wrap",

  // 11px, 16px, 17px, mt: 7px, mb: 18px
  DisplayPrefixtext:
    "text-[0.6875rem] sm:text-[1rem] md:text-[1.0625rem] sm:leading-[1] w-full md:leading-[1.2] tracking-tight font-normal md:max-w-full md:mt-[0.4375rem] md:mb-[1.125rem] text-wrap",

  // 30px, 48px, 56px, 64px
  Sectiontexthead:
    "text-[1.875rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1em] tracking-tight font-semibold text-wrap",

  // 16px, 22px, 24px, 28px
  Sectionbodytext:
    "text-[1rem] sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[1em] font-bold text-wrap",

  // 16px, 22px, 24px, 28px
  Extratext:
    "text-[1rem] sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[1.6em] font-light text-wrap",

  // 11px, 16px, 17px, max-w: 270px, 400px
  Sectionbodytexts:
    "text-[0.6875rem] sm:text-[1rem] md:text-[1.0625rem] leading-[1.3] tracking font-normal max-w-[16.875rem] sm:max-w-[25rem] md:max-w-full text-wrap",

  // 24px, 36px, 42px, 48px
  Sectionprefixtext:
    "text-[1.5rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3rem] leading-[1.1] tracking-tight font-semibold",

  // 24px, 36px, 42px, 48px
  SectionHeader:
    "text-[1.5rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3rem] leading-[1.1] tracking-tight font-semibold text-wrap",

  // 24px, 32px, 34px, 36px, leading: 0.8–1, tracking: -0.4px, max-w: 800px, 1200px
  cardHeadingtext:
    "text-[1.5rem] sm:text-[2rem] md:text-[2.125rem] lg:text-[2.25rem] leading-[1.3] md:leading-[1] -tracking-[0.025rem] font-semibold sm:max-w-[50rem] md:max-w-[75rem] text-wrap",

  // 14px, 18px, 20px, 21px
  cardHeadingsmall:
    "text-[0.875rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.3125rem] md:leading-[1.2] tracking-tight font-semibold text-wrap",

  // 14px, 18px, 18px, 16px
  cardBodytext:
    "text-[1.1rem] sm:text-[1.425rem] md:text-[1rem] lg:text-[1.3rem] leading-[1.1] md:leading-[1.3] tracking-[0]  font-medium",

  // 14px, 18px, 18px, 16px
  cardBodytextlight:
    "text-[0.875rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1rem] leading-[1.1] md:leading-[1.3] tracking-[0] font-light text-wrap",

  // 14px, 18px, 16px, 16px, leading: 0.9–1.3, width: 270px
  cardBodytextwrape:
    "text-[0.875rem] sm:text-[1.125rem] md:text-[1rem] lg:text-[1rem] leading-[0.9] md:leading-[1.3] tracking-[0] font-semibold w-[16.875rem] ... truncate",

  // 10px, 12px, 16px
  Navtext:
    "text-[0.625rem] sm:text-[0.75rem] md:text-[1rem] font-semibold font-[500] text-wrap",

  // 10px, 12px, 12px, tracking: 0.8px → 0.05rem, 0.01em, mb: 2.6px, max-w: 600px
  FooterHeadingtext:
    "text-[0.75rem] sm:text-[0.75rem] md:text-[0.875rem] leading-[1.5em] tracking-[0.05rem] md:tracking-[0.1] font-bold text-black/70 max-w-[37.5rem] mb-[0.1625rem] text-wrap",

  // 10px, 12px, 16px, tracking: 0.8em → 0.8em, 0.01em
  Footerlinktext:
    "text-[0.75rem] sm:text-[0.75rem] md:text-[0.875rem] leading-[1em] tracking-[1.1] md:tracking-[0.01em] font-semibold text-black/50 text-wrap",

  // 12px, 13px, 14px, tracking: 0.15px–0.22px → rems
  Buttontext:
    "text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] font-bold leading-[1.5] tracking-[0.009375rem] sm:tracking-[0.0125rem] md:tracking-[0.01375rem] max-w-[25rem] text-wrap",

  // 12px, 13px, 14px, tracking: 0.02em, 0.025em, 0.03em
  secondaryButtontext:
    "text-[0.75rem] sm:text-[0.8125rem] md:text-[0.875rem] font-bold leading-[1.5] tracking-[0.02em] sm:tracking-[0.025em] md:tracking-[0.03em] text-wrap",

  // 14px, 15px, 16px, tracking: 0.04em, 0.08em
  inputplaceholdertext:
    "text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] tracking-[0.04em] md:tracking-[0.08em] text-justify text-wrap",
};

  
  export { text };