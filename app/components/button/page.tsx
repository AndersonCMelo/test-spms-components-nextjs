'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Button = dynamic(async () => (await import('@spms/ui-react')).Button, {ssr: false})

export default function ButtonComponent() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2 className={styles.title}>Botões primários - contained</h2>

        <div className={styles['grid-container']}>
          <Button text="Active medium" size="medium" />
          <Button text="Inactive medium" size="medium" disabled={true} />
          <Button text="Active icon medium" size="medium" startIcon="users" />
          <Button text="Inactive icon medium" size="medium" endIcon="reload" disabled={true} />

          <Button text="Active large" size="large" />
          <Button text="Inactive large" size="large" disabled={true} />
          <Button text="Active icon large" size="large" startIcon="users" />
          <Button text="Inactive icon large" size="large" endIcon="reload" disabled={true} />
        </div>

        <h2 className={styles.title}>Botões secundários - outlined</h2>

        <div className={styles['grid-container']}>
          <Button text="Active medium" size="medium" variant="secondary" />
          <Button text="Inactive medium" size="medium" variant="secondary" disabled={true} />
          <Button text="Active icon medium" size="medium" variant="secondary" startIcon="users" />
          <Button text="Inactive icon medium" size="medium" variant="secondary" endIcon="reload" disabled={true} />

          <Button text="Active large" size="large" variant="secondary" />
          <Button text="Inactive large" size="large" variant="secondary" disabled={true} />
          <Button text="Active icon large" size="large" variant="secondary" startIcon="users" />
          <Button text="Inactive icon large" size="large" variant="secondary" endIcon="reload" disabled={true} />
        </div>

        <h2 className={styles.title}>Botões texto - text</h2>

        <div className={styles['grid-container']}>
          <Button text="Active medium" size="medium" variant="text" />
          <Button text="Inactive medium" size="medium" variant="text" disabled={true} />
          <Button text="Active icon medium" size="medium" variant="text" startIcon="users" />
          <Button text="Inactive icon medium" size="medium" variant="text" endIcon="reload" disabled={true} />

          <Button text="Active large" size="large" variant="text" />
          <Button text="Inactive large" size="large" variant="text" disabled={true} />
          <Button text="Active icon large" size="large" variant="text" startIcon="users" />
          <Button text="Inactive icon large" size="large" variant="text" endIcon="reload" disabled={true} />
        </div>
      </div>
    </main>
  );
}
