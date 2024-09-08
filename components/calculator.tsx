import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Music, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const Calculator = () => {
  return (
    <div className="bg-custom bg-cover flex h-screen items-center justify-center p-4">
      <Card className="bg-transparent max-w-md w-full border-black border-2">
        <CardHeader className="bg-cover">
          <textarea 
            className="w-full border border-black rounded-sm p-2 resize-none" 
            readOnly 
            defaultValue="Your calculation result will appear here"
          />
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-4 gap-2 mb-2">
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
        <div className="flex justify-between items-center p-4 flex-wrap relative overflow-auto">
  <div className="flex items-center space-x-1 sm:text-xs md:text-sm lg:text-base xl:text-lg shrink-0">
    <span className="whitespace-nowrap flex font-bold font-sans">MADE BY M ARYAN</span>
    <Music size={16} className="hover:text-blue-900 ease-in-out" />
  </div>
  <div className="flex space-x-2 shrink-0">
    <Link href="https://github.com/MuhammadAriyan">
      <img
        src="/github.png"
        alt="GITHUB"
        width={25}
        className="opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
      />
    </Link>
    <Link href="https://www.linkedin.com/in/muhammad-aryan">
      <LinkedinIcon className="opacity-75 hover:opacity-100 transition duration-200 ease-in-out" size={25} />
    </Link>
  </div>
</div>

      </Card>
    </div>
  );
}

export default Calculator;
