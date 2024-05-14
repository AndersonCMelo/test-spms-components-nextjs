'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const RadioButton = dynamic(async () => (await import('@spms/ui-react')).RadioButton, {ssr: false})

export default function RadioButtonComponent() {
  function handleChange(value: any) {
		console.log('value outside', value)
	}

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Basic</h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <RadioButton
          options={[
            { id: 'opSmall', name: 'size', value: 'opSmall', size: 'small' },
            { id: 'opMedium', name: 'size', value: 'opMedium', size: 'medium' },
            {
              id: 'opLarge',
              name: 'size',
              value: 'opLarge',
              size: 'large',
              checked: true,
            },
            {
              id: 'opDisabled',
              name: 'size',
              value: 'opDisabled',
              disabled: true,
            },
          ]}
          onChange={(event, value) => handleChange(value)}
        />
      </div>

      <h2 className={styles.title}>Colors</h2>

      <RadioButton
        options={[
          { id: 'op1', name: 'option', value: 'option1', color: 'success' },
          { id: 'op2', name: 'option', value: 'option2', color: 'info' },
          { id: 'op3', name: 'option', value: 'option3', color: 'warning' },
          { id: 'op4', name: 'option', value: 'option4', color: 'error' },
          { id: 'op5', name: 'option', value: 'option5', color: 'yellow' },
          { id: 'op6', name: 'option', value: 'option6', color: '#FF6687' },
          { id: 'op7', name: 'option', value: 'option7', color: 'primary' },
          { id: 'op8', name: 'option', value: 'option8', color: 'secondary' },
        ]}
        onChange={(_, value) => console.log('value', value)}
      />

      <h2 className={styles.title}>Label</h2>

      <RadioButton
        options={[
          {
            id: 'op10',
            name: 'optionLabel',
            value: 'option9',
            label: 'Label example',
          },
          {
            id: 'op11',
            name: 'optionLabel',
            value: 'option10',
            label: 'Label example',
            labelPosition: 'left',
          },
        ]}
      />
    </main>
  );
}
