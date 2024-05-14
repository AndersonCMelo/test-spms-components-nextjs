'use client'
import Link from "next/link";
import styles from "./page.module.css";

import dynamic from "next/dynamic";

/* import {
  Accordion,
  AccordionItem,
} from '@spms/ui-react' */

const Accordion = dynamic(async () => (await import('@spms/ui-react')).Accordion, {ssr: false})
const AccordionItem = dynamic(async () => (await import('@spms/ui-react')).AccordionItem, {ssr: false})

export default function AccordionComponent() {
  const items = [
		{
			label: 'Avaliação Oftalmológica',
			content: (
				<div>
					<h3>Conteúdo 1</h3>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			),
		},
		{
			label: 'Alergias',
			icon: 'users',
			content: (
				<div>
					<h3>Conteúdo 2</h3>

					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
						velit, sed quia non numquam eius modi.
					</p>
				</div>
			),
		},
		{
			label: 'TNF',
			icon: 'reload',
			iconPosition: 'right',
			content: (
				<div>
					<h3>Conteúdo 3</h3>

					<p>
						At vero eos et accusamus et iusto odio dignissimos ducimus qui
						blanditiis praesentium voluptatum deleniti atque corrupti quos
						dolores et quas molestias excepturi sint occaecati cupiditate non
						provident, similique sunt in culpa qui officia deserunt mollitia
						animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
						est et expedita distinctio. Nam libero tempore, cum soluta nobis est
						eligendi optio cumque nihil impedit quo minus.
					</p>
				</div>
			),
		},
	]

  return (
    <main className={styles.main}>
			<h2 className={styles.title}>Basic accordion</h2>

			<Accordion>
				<AccordionItem label="Header I">
					<div>
						<h3>Conteúdo 1</h3>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</AccordionItem>

				<AccordionItem label={<p>Meu título <strong>customizado</strong></p>} icon="users" selected>
					<div>
						<h3>Conteúdo 2</h3>

						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
							ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
						</p>
					</div>
				</AccordionItem>

				<AccordionItem label="Header III" icon="AddCircle" iconPosition="right" disabled>
					<div>
						<h3>Conteúdo 3</h3>

						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
							qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
						</p>
					</div>
				</AccordionItem>
			</Accordion>

			<div className="divider"></div>

			<h2 className={styles.title}>Custom accordion + multiple</h2>

			<Accordion multiple arrowPosition="left">
				<AccordionItem label="Collapsible Group Item #1" selected>
					<div>
						<h3>Conteúdo 1</h3>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</AccordionItem>

				<AccordionItem label="Collapsible Group Item #2" icon="users" selected>
					<div>
						<h3>Conteúdo 2</h3>

						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
							ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
						</p>
					</div>
				</AccordionItem>

				<AccordionItem label="Collapsible Group Item #3" icon="reload" iconPosition="right" disabled>
					<div>
						<h3>Conteúdo 3</h3>

						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
							qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
						</p>
					</div>
				</AccordionItem>
			</Accordion>
    </main>
  );
}
