'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { text } from '@/lib/typography'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('App Error:', error)
  }, [error])

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-company-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        src="/errors.png"
        alt="Error illustration"
        width={400}
        height={400}
        className="mb-company-xl-48"
      />

      <h2 className={`${text.cardHeadingsmall}text-3xl font-bold mb-company-xs-8 text-company-primary-royalBlue`}>Something went wrong!</h2>
      <p className={`text-gray-600 mb-6 max-w-md`}>
        We&apos;re sorry, an unexpected error has occurred. Please try again or come back later.
      </p>

      <Button variant={'neumorphic'} onClick={() => reset()} className="">
        Try Again
      </Button>
    </motion.div>
  )
}
