'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Select = dynamic(async () => (await import('@spms/ui-react')).Select, {ssr: false})

export default function Home() {
  const options = [
    { label: 'Australia', value: 'AU' },
    { label: 'Brazil', value: 'BR' },
    { label: 'China', value: 'CN' },
    { label: 'Egypt', value: 'EG', icon: 'user' },
    { label: 'France', value: 'FR', icon: 'reload' },
    { label: 'Germany', value: 'DE', icon: 'calendar' },
    { label: 'India', value: 'IN' },
    { label: 'Japan', value: 'JP' },
    { label: 'Spain', value: 'ES' },
    { label: 'United States', value: 'US' },
  ]

  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.title}>multiple</h2>

        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            state="default"
            multiple
            input={{
              placeholder: 'Selecionar país',
            }}
            onChange={value => console.log('value', value)}
          />
        </div>

        <h2 className={styles.title}>multiple with chips</h2>

        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            state="default"
            multiple
            displayChips
            input={{
              placeholder: 'Selecionar país',
            }}
          />
        </div>

        <h2 className={styles.title}>basic</h2>

        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            state="default"
            input={{
              placeholder: 'Selecionar país',
            }}
            onChange={value => console.log('value', value)}
          />
        </div>

        <h2 className={styles.title}>disabled</h2>

        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            disabled
            state="default"
            input={{
              placeholder: 'Selecionar país',
            }}
          />
        </div>

        <h2 className={styles.title}>read only</h2>
        
        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            icon="calendar"
            readonly
            state="default"
            input={{
              placeholder: 'Selecionar país',
            }}
          />
        </div>

        <h2 className={styles.title}>success</h2>

        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            state="success"
            input={{
              placeholder: 'Selecionar país',
            }}
          />
        </div>

        <h2 className={styles.title}>error</h2>

        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            state="error"
            input={{
              placeholder: 'Selecionar país',
            }}
          />
        </div>

        <h2 className={styles.title}>info</h2>

        <div className={styles['input-container']}>
          <Select
            label="Country"
            options={options}
            state="info"
            input={{
              placeholder: 'Selecionar país',
            }}
          />
        </div>
      </div>
    </main>
  );
}
