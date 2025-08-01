import { Button } from '@/presentation/components/ui/button.ui'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/presentation/components/ui/card.component'
import { Input } from '@/presentation/components/ui/input.ui'
import Largecard from '@/presentation/components/ui/largecard.ui'
import { text } from '@/shared/lib/typography'
import React from 'react'

function Components() {
  return (
    <div className='h-full w-full flex flex-col justify-center gap-8 items-center'>
       <Button variant="destructive">Cancel</Button>
       <Button className="">Submit</Button>
     

      {/* Interactive Card */}
      <Card className="w-full flex flex-col justify-center gap-y-[20px]  max-w-[1600px] max-h-[1200px] ">
        <CardHeader>
          <CardTitle className={`${text.cardHeadingtext}`}>Interactive Card</CardTitle>
          <CardDescription className={`${text.cardBodytext}`}>Hover over this card to see the effect</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-[20px]">
            <Input 
              type="text"
              placeholder="Enter your name"
              className="w-full"
            />
            <Input 
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Learn More</Button>
          <Button>Get Started</Button>
        </CardFooter>
      </Card>

   

      <Largecard 
        index={1}
        feature={{
          bgImage: '/robotics/image.png',
          title: 'Advanced Robotics',
          description: 'Discover our cutting-edge robotics solutions for industrial automation and smart manufacturing.'
        }}
      />
    </div>
  )
}

export default Components