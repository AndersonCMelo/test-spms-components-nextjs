'use client'
import Link from "next/link";
import styles from "./page.module.css";

// import dynamic from "next/dynamic";

// const Select = dynamic(async () => (await import('@spms/ui-react')).Select, {ssr: false})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
				<h2>Select</h2>
      </div>
    </main>
  );
}
