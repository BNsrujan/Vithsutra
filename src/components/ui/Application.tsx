"use client"
import { Carousel , Card} from "@/components/ui/Applicationcard"
import { ProductApplication } from "@/data/products";
import Heading from "./heading";

interface ApplicationProps {
  applications: ProductApplication[];
}


function Application({ applications }: ApplicationProps) {
  const cards = applications.map(({image,industry,disription})=>{
    <Card key={image} card={{image,industry,disription}} index={image}/>
  })

  return (
    <div className="md:py-company-lg-24">
      <div className="max-w-company-section-width mx-auto  w-full">
        <Heading Display="APPLICATION" heading="Use Cases" />
        <div className="flex justify-center items-center w-full  h-[400px] md:h-[600px] min-h-96 relative overflow-hidden">
          <Carousel items={cards}/>
        </div>
        <div className="w-full flex justify-end">
         
        </div>
      </div>
    </div>
  );
}

export default Application;
