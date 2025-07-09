import { text } from "@/lib/typography";

export default function Heading({heading,Display}:{
  heading:string,
  Display:string
}) {
    return (<div className="mx-auto  ">
      <div className="inline-block   bg-company-light-light-gray ">
        <h1 className="text-sm font-medium py-company-xs-8 tracking-wider text-company-text-gray">
          {heading}
        </h1>
      </div>

      <h1 className={`${text.Sectiontexthead} text-company-black pb-company-xs-8`}>
        {Display}
      </h1>
    </div>)
    ;
  }