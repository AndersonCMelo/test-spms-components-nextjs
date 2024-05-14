'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Divider = dynamic(async () => (await import('@spms/ui-react')).Divider, {ssr: false})

export default function DividerComponent() {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
	eiusmod tempor incididunt ut labore et dolore magna aliqua.`
	const loremIpsumXL = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
	eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu		fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
	culpa qui officia deserunt mollit anim id est laborum.`

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Vertical</h2>

      <div className={styles["vertical-container"]}>
        <p>{loremIpsum}</p>
        <Divider orientation="vertical" />
        <p>{loremIpsum}</p>
      </div>

      <h2 className={styles.title}>Horizontal</h2>

      <div className={styles["horizontal-container"]}>
        <p>{loremIpsum}</p>
        <Divider orientation="horizontal" />
        <p>{loremIpsum}</p>
      </div>

      <h2 className={styles.title}>Types</h2>

      <div className={styles["horizontal-container"]}>
        <p>{loremIpsum}</p>
        <Divider orientation="horizontal" type="solid" />
        <p>{loremIpsum}</p>
        <Divider orientation="horizontal" type="dotted" />
        <p>{loremIpsum}</p>
        <Divider orientation="horizontal" type="dashed" />
        <p>{loremIpsum}</p>
      </div>

      <h2 className={styles.title}>Children - horizontal</h2>

      <div>
        <p>{loremIpsum}</p>
        <Divider orientation="horizontal" align="start">
          <i> Alinhado à esquerda </i>
        </Divider>
        <p>{loremIpsum}</p>
        <Divider orientation="horizontal">
          <i> Centralizado </i>
        </Divider>
        <p>{loremIpsum}</p>
        <Divider orientation="horizontal" align="end">
          <i> Alinhado à direita </i>
        </Divider>
        <p>{loremIpsum}</p>
      </div>

      <h2 className={styles.title}>Children - vertical</h2>

      <div className={styles["vertical-container"]}>
        <p>{loremIpsumXL}</p>
        <Divider orientation="vertical" align="start">
          <i> Alinhamento ao topo </i>
        </Divider>
        <p>{loremIpsumXL}</p>
        <Divider orientation="vertical">
          <i> Centralizado </i>
        </Divider>
        <p>{loremIpsumXL}</p>
        <Divider orientation="vertical" align="end">
          <i> Alinhamento à base </i>
        </Divider>
        <p>{loremIpsumXL}</p>
      </div>
    </main>
  );
}
