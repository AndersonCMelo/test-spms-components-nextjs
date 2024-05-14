'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const AutoComplete = dynamic(async () => (await import('@spms/ui-react')).AutoComplete, {ssr: false})

const SPMSIcon  =  dynamic(async () => ((await import('@spms/react-icons')).SPMSIcon), {ssr: false});

export default function AutocompleteComponent() {
  const options = [
    { label: 'Aveiro', value: 'Aveiro' },
    { label: 'Beja', value: 'Beja' },
    { label: 'Braga', value: 'Braga' },
    { label: 'Bragança', value: 'Bragança' },
    { label: 'Castelo Branco', value: 'Castelo Branco' },
    { label: 'Santarém', value: 'Santarém' },
    { label: 'Setúbal', value: 'Setúbal' },
    { label: 'Viana do Castelo', value: 'Viana do Castelo' },
    { label: 'Vila Real e Viseu', value: 'Vila Real e Viseu' },
    { label: 'Coimbra', value: 'Coimbra' },
    { label: 'Évora', value: 'Évora' },
    { label: 'Faro', value: 'Faro' },
    { label: 'Guarda', value: 'Guarda' },
    { label: 'Leiria', value: 'Leiria' },
    { label: 'Lisboa', value: 'Lisboa' },
    { label: 'Portalegre', value: 'Portalegre' },
    { label: 'Porto', value: 'Porto' },
  ]

  return (
    <main className={styles.main}>
      <div className={styles['input-container']}>
        <AutoComplete
          input={{
            placeholder: 'Selecionar distrito',
          }}
          label="Distrito"
          icon="reload"
          multiple
          state="default"
          options={options}
        />
      </div>

      <div className={styles['input-container']}>
        <AutoComplete
          input={{
            placeholder: 'Selecionar distrito',
          }}
          label="Distrito - Disabled"
          icon={<SPMSIcon fontIcon="calendar" />}
          disabled
          state="default"
          options={options}
        />
      </div>

      <div className={styles['input-container']}>
        <AutoComplete
          input={{
            placeholder: 'Selecionar distrito',
          }}
          label="Distrito"
          state="success"
          options={options}
          hint={{
            active: true,
            status: 'success',
            color: 'success',
            icon: 'check-circle',
            content: 'Mensagem de sucesso',
          }}
        />
      </div>

      <div className={styles['input-container']}>
        <AutoComplete
          input={{
            placeholder: 'Selecionar distrito',
          }}
          label="Distrito"
          state="error"
          options={options}
        />
      </div>

      <div className={styles['input-container']}>
        <AutoComplete
          input={{
            placeholder: 'Selecionar distrito',
          }}
          label="Distrito"
          state="info"
          options={options}
        />
      </div>
    </main>
  );
}
