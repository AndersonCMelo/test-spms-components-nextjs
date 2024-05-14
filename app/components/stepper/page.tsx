'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Stepper = dynamic(async () => (await import('@spms/ui-react')).Stepper, {ssr: false})
const Button = dynamic(async () => (await import('@spms/ui-react')).Button, {ssr: false})

export default function StepperComponent() {
  const [step, setStep] = useState(1)
  const [steps] = useState(6)

  function handleBack() {
    setStep(step - 1)
  }

  function handleNext() {
    setStep(step + 1)
  }

  const [stepString, setStepString]  = useState(1)
  const [stepsString]  = useState(4)

  const items = [
		'First step',
		'Step 2',
		'Step 3',
		'Last step',
	]

  function handleBackString() {
    setStepString(stepString - 1)
  }

  function handleNextString() {
    setStepString(stepString + 1)
  }

  return (
    <main className={styles.main}>
      <h2>Stepper</h2>

      <div className="stepper-container">
        <Stepper
          steps={steps}
          activeStep={step}
        />

        <div className="button-container">
          <Button text="Back" disabled={step === 0} onClick={() => handleBack()} />
          <Button text={ step === steps - 1 ? 'Finish' : 'Next' } disabled={step === steps} onClick={() => handleNext()} />
        </div>
      </div>

      <div className="stepper-container">
        <Stepper
          steps={stepsString}
          activeStep={stepString}
          items={items}
        />

        <div className="button-container">
          <Button text="Back" disabled={stepString === 0} onClick={() => handleBackString()} />
          <Button text={ stepString === stepsString - 1 ? 'Finish' : 'Next' } disabled={stepString === stepsString} onClick={() => handleNextString()} />
        </div>
      </div>
    </main>
  );
}
