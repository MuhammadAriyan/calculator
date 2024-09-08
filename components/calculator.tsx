'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { LinkedinIcon, CalculatorIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Calculator = () => {
  const [input, setInput] = useState('');

  const setterinput = (a: string) => {
    setInput((prevInput) => prevInput + a);
  };

  const evaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      console.log(e);
    }
  };

  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="bg-custom bg-cover flex h-screen items-center justify-center p-4">
      <Card className="bg-transparent max-w-md w-full border-black border-2">
        <CardHeader className="bg-cover">
          <textarea
            className="w-full border border-black rounded-sm pl-2 pt-1 resize-none bg-transparent size-8"
            readOnly
            value={input}
          />
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-4 gap-2 mb-2">
            <Button onClick={() => setterinput('7')}>7</Button>
            <Button onClick={() => setterinput('8')}>8</Button>
            <Button onClick={() => setterinput('9')}>9</Button>
            <Button onClick={() => backspace()}>←</Button>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            <Button onClick={() => setterinput('4')}>4</Button>
            <Button onClick={() => setterinput('5')}>5</Button>
            <Button onClick={() => setterinput('6')}>6</Button>
            <Button onClick={() => setterinput('/')}>÷</Button>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-2">
            <Button onClick={() => setterinput('1')}>1</Button>
            <Button onClick={() => setterinput('2')}>2</Button>
            <Button onClick={() => setterinput('3')}>3</Button>
            <Button onClick={() => setterinput('+')}>+</Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button onClick={() => setterinput('*')}>×</Button>
            <Button onClick={() => setterinput('0')}>0</Button>
            <Button onClick={() => setterinput('-')}>-</Button>
            <Button onClick={() => evaluate()}>=</Button>
          </div>
        </CardContent>
        <div className="flex justify-between items-center p-4 flex-wrap relative overflow-auto">
          <div className="flex space-x-2 shrink-0">
            <Link href="https://github.com/MuhammadAriyan">
              <Image
                src="/github.png"
                alt="GITHUB"
                width={25}
                height={25}
                className="opacity-75 hover:opacity-100 transition duration-200 ease-in-out"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-aryan">
              <LinkedinIcon className="opacity-75 hover:opacity-100 transition duration-200 ease-in-out" size={25} />
            </Link>
          </div>
           <CalculatorIcon className='flex relative'/>
        </div>
      </Card>
    </div>
  );
}

export default Calculator;
