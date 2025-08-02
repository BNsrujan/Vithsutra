import { Product } from '@/core/entities/product'
import React from 'react'
import Heading from '../ui/heading.ui'
import Image from 'next/image'

function Gallery({gallery}:{gallery:Product["gallery"]}) {
  return (
    <div>
        <section className=" w-full flex  justify-center">
          <div className="max-w-company-section-width w-full">
            <Heading Display="Gallery" heading="" className="pb-1" />
            <div className="flex flex-wrap gap-company-lg-24">
              {gallery?.map((image) => (
                <div
                  key={image}
                  className="w-[12rem] rounded-company-button-8 border "
                >
                  <Image src={image} alt="" width={150} height={150} />
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Gallery