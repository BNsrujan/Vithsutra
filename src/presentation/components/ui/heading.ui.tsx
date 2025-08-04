import { text } from "@/shared/lib/typography";
import { cn } from "@/shared/lib/utils";



export default function Heading({heading,Display,className}:{
  heading:string,
  Display:string,
  className?:string,
}) {
    return (<div className={cn("mx-auto  max-w-company-section-width " ,className)}>
      <div className=
        "inline-block   bg-company-light-light-gray" >
        <h1 className={`${text.labelText}pb-company-xs-8`}>
          {heading}
        </h1>
      </div>

      <h1 className={`${text.Sectiontexthead} text-company-black pb-company-xs-8`}>
        {Display}
      </h1>
    </div>)
    ;
  }