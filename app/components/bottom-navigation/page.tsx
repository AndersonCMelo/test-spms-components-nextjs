'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const BottomNavigation = dynamic(async () => (await import('@spms/ui-react')).BottomNavigation, {ssr: false})

const SPMSIcon = dynamic(async () => (await import('@spms/react-icons')).SPMSIcon, {ssr: false})

export default function BottomNavigationComponent() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BottomNavigation
          items={[
            { label: 'home', icon: <SPMSIcon fontIcon="home" />, url: '/' },
            { label: 'users', icon: <SPMSIcon fontIcon="users" />, url: '/' },
            { label: 'reload', icon: <SPMSIcon fontIcon="reload" />, url: '/' },
          ]}
          style={{ position: 'absolute', bottom: -50, }}
          onNavigate={
            (url: string, innerState: string) => console.log(url, innerState)
          }
        />
      </div>
    </main>
  );
}
