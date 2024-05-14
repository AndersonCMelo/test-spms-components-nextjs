'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const TextInput = dynamic(async () => (await import('@spms/ui-react')).TextInput, {ssr: false})
const SPMSIcon = dynamic(async () => (await import('@spms/react-icons')).SPMSIcon, {ssr: false})

export default function TextInputComponent() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>default</h2>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Pronto para inserir"
          placeholder="Texto exemplo"
          onChange={(event: any) => console.log(event)}
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Ativo / Focus"
          value="Valor"
          onChange={(event: any) => console.log(event)}
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Somente Leitura"
          state="read-only"
          value="Valor"
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false} label="Desabilitado" state="disabled" value="Valor" />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Sucesso"
          state="success"
          value="Valor"
          hint="Mensagem de sucesso"
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Erro"
          state="error"
          value="Valor"
          hint="Mensagem de erro"
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Informação"
          state="info"
          value="Valor"
          hint="Mensagem de info"
        />
      </div>

      <h2 className={styles.title}>password</h2>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Pronto para inserir"
          placeholder="Texto exemplo"
          variant="password"
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Ativo / Focus"
          value="Valor"
          variant="password"
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Em conflito"
          value="Valor"
          variant="password"
          append={<SPMSIcon fontIcon="search" color="primary" size="24px" />}
        />
      </div>

      <h2 className={styles.title}>prepend-append</h2>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Anexo anterior"
          value="Valor"
          prepend={<span>€</span>}
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Anexo posterior"
          value="Valor"
          append={<SPMSIcon fontIcon="search" color="primary" size="24px" />}
        />
      </div>

      <div className={styles["input-container"]}>
        <TextInput
          required={false}
          label="Ambos os anexos"
          value="Valor"
          append={<SPMSIcon fontIcon="search" color="primary" size="24px" />}
          prepend={<span>€</span>}
        />
      </div>
    </main>
  );
}
