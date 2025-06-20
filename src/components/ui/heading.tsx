import { text } from "@/lib/typography";

export default function Heading({heading,Display}:{
  heading:string,
  Display:string
}) {
    return (<div className="mx-auto  ">
      <div className="inline-block  rounded-full bg-company-light-light-gray ">
        <span className="text-sm font-medium tracking-wider text-company-text-gray">
          {heading}
        </span>
      </div>

      <h1 className={`${text.Sectiontexthead} text-company-black mb-6`}>
        {Display}
      </h1>
    </div>)
    ;
  }