'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { text } from '@/lib/typography'

export default function Error({
  error,
  reset,
}:{
  error: Error & { digest?: string }
  reset: () => void
}){
  useEffect(() => {
    console.error('App Error:', error)
},[error])

  return (
    <motion.div
      className="min-h-screen px-4  flex flex-col justify-center items-center text-center bg-company-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        src="/errors.png"
        alt="Error illustration"
        width={400}
        height={400}
        className="w-[300px] md:w-[400px] mb-company-xl-48"
        priority
      />

      <h2 className={`${text.cardHeadingsmall} font-bold mb-company-xs-8 text-company-primary-royalBlue`}>Something went wrong!</h2>
      <p className={`max-w-md mb-6 text-gray-600  `}>
        We&apos;re sorry, an unexpected error has occurred. Please try again or come back later.
      </p>

      <Button variant={'neumorphic'} onClick={reset}>
        Try Again
      </Button>
    </motion.div>
  )
}
