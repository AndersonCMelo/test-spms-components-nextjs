'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Checkbox = dynamic(async () => (await import('@spms/ui-react')).Checkbox, {ssr: false})

export default function CheckoutComponent() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Básico</h2>

      <div className="line basic-line">
        <Checkbox
          options={[
            {
              id: 'sim',
              name: 'basic',
              value: 'sim',
              color: 'primary',
            },
            {
              id: 'nao',
              name: 'basic',
              value: 'nao',
              color: 'primary',
              defaultChecked: true,
            },
            {
              id: 'disabled',
              name: 'basic',
              value: 'nao',
              color: 'primary',
              disabled: true,
            },
          ]}
        />
      </div>

      <h2 className={styles.title}>Cores</h2>

      <div className="line">
        <Checkbox
          options={[
            {
              id: 'colors1',
              name: 'colors',
              value: 'colors1',
              color: 'success',
              defaultChecked: true,
            },
            {
              id: 'colors2',
              name: 'colors',
              value: 'colors2',
              color: 'warning',
              defaultChecked: true,
            },
            {
              id: 'colors3',
              name: 'colors',
              value: 'colors3',
              color: 'error',
              defaultChecked: true,
            },
            {
              id: 'colors4',
              name: 'colors',
              value: 'colors4',
              color: 'info',
              defaultChecked: true,
            },
            {
              id: 'colors5',
              name: 'colors',
              value: 'colors5',
              color: 'primary',
              defaultChecked: true,
            },
            {
              id: 'colors6',
              name: 'colors',
              value: 'colors6',
              color: 'secondary',
              defaultChecked: true,
            },
            {
              id: 'colors7',
              name: 'colors',
              value: 'colors7',
              color: '#FFC107',
              defaultChecked: true,
            },
          ]}
        />
      </div>

      <h2 className={styles.title}>Labels</h2>

      <div className="line">
        <Checkbox
          options={[
            {
              id: 'label1',
              name: 'label', 
              value: 'label1',
              size: 'medium',
              label: 'Lisboa',
            },
            {
              id: 'label2',
              name: 'label',
              value: 'label2',
              size: 'medium',
              label: 'Porto',
            },
            {
              id: 'label3',
              name: 'label',
              value: 'label3',
              size: 'medium',
              label: 'Braga',
              labelPosition: 'left',
            },
          ]}
        />
      </div>

      <h2 className={styles.title}>Tamanhos</h2>

      <div className="line">
        <Checkbox
          options={[
            { id: 'size1', name: 'size', value: 'size1', size: 'small' },
            { id: 'size2', name: 'size', value: 'size2', size: 'medium' },
            { id: 'size3', name: 'size', value: 'size3', size: 'large' },
            { id: 'size4', name: 'size', value: 'size4', size: '40px' },
          ]}
        />
      </div>
    </main>
  );
}
