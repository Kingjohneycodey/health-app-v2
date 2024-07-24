'use client';
import { useState } from 'react';
import EnterOTP from './EnterOTP';
import InputResetPasswordEmail from './InputEmail';
import Image from 'next/image';

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  return (
    <main className="h-screen flex gap-5 items-center justify-center px-5 m-auto">
      {/* <button onClick={() => setStep(2)}>set step</button> */}

      <div className="md:w-1/2 ">
        {step === 2 ? <EnterOTP /> : <InputResetPasswordEmail />}
      </div>
      <div className="hidden md:block w-1/2">
        <Image src="" alt="" />
      </div>
    </main>
  );
}
