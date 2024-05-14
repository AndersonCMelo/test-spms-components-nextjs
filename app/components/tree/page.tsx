'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Button = dynamic(async () => (await import('@spms/ui-react')).Button, {ssr: false})
const Tree = dynamic(async () => (await import('@spms/ui-react')).Tree, {ssr: false})

const SPMSIcon = dynamic(async () => (await import('@spms/react-icons')).SPMSIcon, {ssr: false})

interface ValueProps {
  id: string;
  // checkbox?: CheckboxProps | undefined;
  checkbox?: any | undefined;
  icon?: React.ReactNode;
  label: string;
  children?: ValueProps[] | undefined;
}

export default function TreeComponent() {
  const [selectedValues, setSelectedValues] = useState<ValueProps[]>([])
  const [allExpanded, setAllExpanded] = useState(false)

  const reactItems = [
    {
      id: 'parent',
      label: 'Parent',
      icon: <SPMSIcon fontIcon="users" color="primary" size="small" />,
      checkbox: {
        value: 'parent',
      },
      children: [
        {
          id: 'child-1',
          label: 'Child - 1',
          checkbox: {
            value: 'child-1',
          },
          children: [
            {
              id: 'child-1-item-1',
              label: 'Child 1 - Item 1',
              checkbox: {
                value: 'child-1-item-1',
              },
            },
            {
              id: 'child-1-item-2',
              label: 'Child 1 - Item 2',
              checkbox: {
                value: 'child-1-item-2',
              },
              children: [
                {
                  id: 'child-1-item-2-child-1-item-1',
                  label: 'Child 1 - Item 2 - Child 1 - Item 1',
                  checkbox: {
                    value: 'child-1-item-2-child-1-item-1',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'child-2',
          label: 'Child - 2',
          checkbox: {
            value: 'child-2',
          },
          children: [
            {
              id: 'child-2-item-1',
              label: 'Child 2 - Item 1',
              checkbox: {
                value: 'child-2-item-1',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'applications',
      label: 'Applications',
      icon: <SPMSIcon fontIcon="photography" color="primary" size="small" />,
      checkbox: {
        value: 'applications',
      },
      children: [
        {
          id: 'design-system',
          label: 'Design System',
          checkbox: {
            value: 'design-system',
          },
        },
      ],
    },
  ]

  function handleGetValue() {
    console.log('selectedValues', selectedValues);
  }

  return (
    <main className={styles.main}>
      <div className={styles["button-container"]}>
        <Button text="Expand all" onClick={() => setAllExpanded(!allExpanded)} />
        <Button text="Get values" onClick={() => handleGetValue()} />
      </div>

      <Tree items={reactItems} getValues={(value) => setSelectedValues(value)} allExpanded={allExpanded} variant="checkbox" />
    </main>
  );
}
