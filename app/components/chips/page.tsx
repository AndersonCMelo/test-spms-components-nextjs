'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Chips = dynamic(async () => (await import('@spms/ui-react')).Chips, {ssr: false})

export default function ChipsComponent() {
  function handleClick(event: any) {
		console.log('Clicado!', event)
	}

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Basic</h2>

      <div className={styles.line}>
        <Chips label="Chip" />
        <Chips label="Chip" variant="secondary" />
      </div>

      <h2 className={styles.title}>Inactive</h2>

      <div className={styles.line}>
        <Chips label="Inativo" disabled />
        <Chips label="Inativo" variant="secondary" disabled />
      </div>

      <h2 className={styles.title}>Colors</h2>

      <div className={styles.line}>
        <Chips
          color="primary"
          variant="primary"
          label="Primária"
        />
        <Chips
          color="success"
          variant="primary"
          label="Sucesso"
        />
        <Chips
          color="warning"
          variant="primary"
          label="Atenção"
        />
        <Chips color="danger" variant="primary" label="Erro" />
        <Chips
          color="informative"
          variant="primary"
          label="Informação"
        />

        <Chips
          color="primary"
          variant="secondary"
          label="Primária"
        />
        <Chips
          color="success"
          variant="secondary"
          label="Sucesso"
        />
        <Chips
          color="warning"
          variant="secondary"
          label="Atenção"
        />
        <Chips color="danger" variant="secondary" label="Erro" />
        <Chips
          color="informative"
          variant="secondary"
          label="Informação"
        />
      </div>

      <h2 className={styles.title}>Sizes</h2>

      <div className={styles.line}>
        <Chips size="medium" variant="primary" label="Padrão" />
        <Chips size="medium" variant="secondary" label="Padrão" />

        <Chips size="large" variant="primary" label="Grande" />
        <Chips size="large" variant="secondary" label="Grande" />
      </div>

      <h2 className={styles.title}>Clickable</h2>

      <div className={styles.line}>
        <Chips
          size="medium"
          variant="primary"
          label="Clicável"
          onClick={event => handleClick(event)}
        />
        <Chips
          size="medium"
          variant="secondary"
          label="Clicável"
          onClick={event => handleClick(event)}
        />

        <Chips
          size="medium"
          variant="secondary"
          label="Clicável Link (URL)"
          href="https://google.com"
          target="_blank"
        />
      </div>

      <h2 className={styles.title}>Avatar</h2>

      <div className={styles.line}>
        <Chips
          variant="primary"
          label="Avatar Texto"
          avatar="Avatar"
        />
        <Chips
          variant="primary"
          label="Avatar Texto"
          avatar="Design System"
          size="large"
        />

        <Chips
          variant="primary"
          label="Avatar Imagem URL"
          avatar="https://mui.com/static/images/avatar/1.jpg"
          size="medium"
        />
        <Chips
          variant="primary"
          label="Avatar Imagem URL"
          avatar="https://mui.com/static/images/avatar/2.jpg"
          size="large"
        />

        <Chips
          variant="primary"
          label="Avatar Ícone"
          icon="avatar"
          size="medium"
        />
        <Chips
          variant="primary"
          label="Avatar Ícone"
          icon="calendar"
          size="large"
        />
      </div>

      <h2 className={styles.title}>Deletable</h2>

      <div className={styles.line}>
        <Chips
          size="medium"
          icon="avatar"
          label="Removível"
          onDelete={() => {}}
        />
        <Chips
          size="medium"
          variant="secondary"
          icon="avatar"
          label="Removível"
          onDelete={() => {}}
        />
      </div>
    </main>
  );
}
