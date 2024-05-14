'use client'
import { useState } from 'react';
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Button = dynamic(async () => (await import('@spms/ui-react')).Button, {ssr: false})
const TransferList = dynamic(async () => (await import('@spms/ui-react')).TransferList, {ssr: false})

interface ItemsProps {
  id?: string | number
  title?: string
  checkboxSelected?: boolean
}

export default function TransferListComponent() {
  const [leftData, setLeftData] = useState<ItemsProps[]>([])
  const [rightData, setRightData] = useState<ItemsProps[]>([])

  const items: ItemsProps[] = [
		{
      id: 1,
      title: 'List item 1',
      checkboxSelected: false
    },
    {
      id: 2,
      title: 'List item 2',
      checkboxSelected: false
    },
    {
      id: 3,
      title: 'List item 3',
      checkboxSelected: false
    },
    {
      id: 4,
      title: 'List item 4',
      checkboxSelected: false
    },
    {
      id: 5,
      title: 'List item 5',
      checkboxSelected: false
    },
    {
      id: 6,
      title: 'List item 6',
      checkboxSelected: false
    },
    {
      id: 7,
      title: 'List item 7',
      checkboxSelected: false
    },
    {
      id: 8,
      title: 'List item 8',
      checkboxSelected: false
    }
	]

  function getLeftValues() {
    console.log('leftData', leftData)
  }
  
  function getRightValues() {
    console.log('rightData', rightData)
  }

  return (
    <main className={styles.main}>
      <div className={styles["button-container"]}>
        <Button text="Get left data" variant="primary" onClick={() => getLeftValues()} />
        <Button text="Get right data" variant="primary" onClick={() => getRightValues()} />
      </div>

      <TransferList
        items={items}
        selectedItems={[
          {
            id: 9,
            title: 'List item 9',
            checkboxSelected: false
          }
        ]}
        hasFilter={false}
        leftValues={(value: any) => setLeftData(value)}
        rightValues={(value: any) => setRightData(value)}
      />
    </main>
  );
}
