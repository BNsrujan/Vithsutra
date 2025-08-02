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

interface FaqProps {
  product: Product
}

export default function Faq({ product }: FaqProps) {
  return (
    <div>
        <section className=" px-4 md:px-0 flex justify-center">
        <div className="max-w-company-section-width w-full">
          <Heading heading="HAVE ANY Q&A" Display="Your Query" />
          <Accordion type="single" className="pt-company-xl-48 " defaultValue={product.FaQ[0]?.qution  || undefined} collapsible>
            {product.FaQ &&
              product.FaQ.length > 0 &&
              product.FaQ.map(({ qution, answer }) => (
                <AccordionItem  key={qution} value={qution}>
                  <AccordionTrigger
                    className={`${text.cardBodytext} font-bold text-company-primary-royalBlue px-company-lg-24`}
                  >
                    {qution}
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

