import Heading from "./ui/heading.ui" 
import { text  
 } from "@/shared/lib/typography"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/presentation/components/ui/accordion.component"
import { Product } from "@/core/entities/product"



export default function Faq({ FaQ }: {FaQ: Product["FaQ"] }
) {
  return (
    <div>
        <section className="h-screen w-full px-4 md:px-0 flex justify-center items-center">
        <div className="max-w-company-section-width w-full md:min-w-company-section-width">
          <Heading heading="HAVE ANY Q&A" Display="Your Query" />
          <Accordion type="single" className="pt-company-xl-48 " defaultValue={FaQ[0]?.question  || undefined} collapsible>
            {FaQ &&
              FaQ.length > 0 &&
              FaQ.map(({ question, answer }) => (
                <AccordionItem  key={question} value={question}>
                  <AccordionTrigger
                    className={`${text.cardBodytext} font-bold text-company-primary-royalBlue px-company-lg-24`}
                  >
                    {question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={`${text.cardBodytext} text-company-dark-gray `}
                  >
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}

