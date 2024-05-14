'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Switch = dynamic(async () => (await import('@spms/ui-react')).Switch, {ssr: false})

export default function SwitchComponent() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Size</h2>

      <div className={styles.container}>
        <Switch defaultChecked iconOn="small-check" iconOff="small-close" onChange={event => console.log(event)} />
        <Switch iconOn="small-check" iconOff="small-close" />
        <Switch iconOn="small-check" iconOff="small-close" disabled />
      </div>

      <h2 className={styles.title}>Colors</h2>

      <div className={styles.container}>
        <Switch defaultChecked color="primary" />
        <Switch defaultChecked color="secondary" />
        <Switch defaultChecked color="success" />
        <Switch defaultChecked color="warning" />
        <Switch defaultChecked color="danger" />
        <Switch defaultChecked color="informative" />
        <Switch defaultChecked color="#FFC107" />
      </div>

      <h2 className={styles.title}>Label</h2>

      <div className={styles.container}>
        <Switch defaultChecked label="Coimbra" />
        <Switch defaultChecked label="Braga" />
      </div>

      <h2 className={styles.title}>SPMS Icons</h2>

      <div className={styles.container}>
        <Switch
          iconOn="large-check"
          iconOff="large-close"
        />
        <Switch
          defaultChecked
          iconOn="large-check"
          iconOff="large-close"
        />
      </div>
    </main>
  );
}
