import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Breadcrumb = dynamic(async () => (await import('@spms/ui-react')).Breadcrumb, {ssr: false})

export default function BreadcrumbComponent() {
  const breadcrumbItems = [
    { label: 'Página Inicial ', url: '/', target: '_parent' },
    { label: 'Meus Tickets', url: '/tickets', target: '_parent' },
    { label: 'Validações', url: '/products/category', target: '_parent' },
    {
      label: 'Nº: S200716_000006',
      url: '/products/category/product',
      target: '_parent',
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.center}>
				<Breadcrumb items={breadcrumbItems} />
      </div>
    </main>
  );
}
