import { text } from "@/lib/typography";
import { cn } from "@/lib/utils";



export default function Heading({heading,Display,className}:{
  heading:string,
  Display:string
  className?:string,
}) {
    return (<div className={cn("mx-auto  max-w-company-section-width " ,className)}>
      <div className=
        "inline-block   bg-company-light-light-gray" >
        <h1 className="text-sm font-medium pb-company-xs-8 tracking-wider text-company-text-gray">
          {heading}
        </h1>
      </div>

      <h1 className={`${text.Sectiontexthead} text-company-black pb-company-xs-8`}>
        {Display}
      </h1>
    </div>)
    ;
  }