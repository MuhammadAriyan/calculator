import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Heart, Swords, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

const Calculator = () => {
  return (
    <div className=" bg-custom bg-cover flex h-screen items-center justify-center p-4 ">
      <Card className='bg-transparent max-w-md w-full border-black border-2'>
        <CardHeader className='bg-cover'>
          <textarea className='  w-full border border-black rounded-sm p-2 resize-none' readOnly><p></p></textarea>
        </CardHeader>
        <CardContent className='p-4 '>
          <div className="grid grid-cols-4 gap-2 mb-2 ">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>←</Button>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>÷</Button>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button>×</Button>
            <Button>0</Button>
            <Button>-</Button>
            <Button>=</Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <div className="text-sm font-medium flex items-center space-x-2 p-1 sm:p-0">
            MADE WITH <Heart className="text-red-500 hover:fill-red-500 m-1 " size={16} /> BY MUHAMMAD ARYAN <Swords size={16} className='hover:text-orange-600 ease-in-out' />
          </div>
          <div className="flex space-x-2">
            <Link href={'https://github.com/MuhammadAriyan'}>
              <img src="github.png" alt="GITHUB" width={30} className="opacity-75 hover:opacity-100 transition duration-200 ease-in-out" />
            </Link>
            <Link href={'https://www.linkedin.com/in/muhammad-aryan'}>
              <LinkedinIcon className=" hover:opacity-100 transition duration-200 ease-in-out" size={30} />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Calculator
