'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Pagination = dynamic(async () => (await import('@spms/ui-react')).Pagination, {ssr: false})

export default function PaginationComponent() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Pagination
          count={5}
          onChange={(_, value) => console.log('value', value)}
        />

        <div style={{ margin: 40 }}></div>

        <Pagination
          count={6}
          showFirstLastIcon
          onChange={(_, value) => console.log('value', value)}
        />
      </div>
    </main>
  );
}
