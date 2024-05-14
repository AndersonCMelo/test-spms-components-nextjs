'use client'
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Tabview = dynamic(async () => (await import('@spms/ui-react')).Tabview, {ssr: false})
const Tab = dynamic(async () => (await import('@spms/ui-react')).Tab, {ssr: false})

export default function TabsComponent() {
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

  const itemsOnlyIcon = [
		{
			icon: 'home',
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
			icon: 'reload',
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
      <h2 className={styles.title}>Simple - children</h2>

      <Tabview>
        <Tab label="Avaliação Oftalmológica">
          <div>
            <h3>Conteúdo 1</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Tab>

        <Tab label="Alergias" icon="users">
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
        </Tab>

        <Tab label="TNF" icon="reload" iconPosition="right">
          <div>
            <h3>Conteúdo 3</h3>

            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </div>
        </Tab>
      </Tabview>

      <div className={styles.divider}></div>

      <h2 className={styles.title}>Button - children</h2>

      <Tabview onlyIcon position="left">
        <Tab icon="home">
          <div>
            <h3>Angular</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Tab>

        <Tab icon="user">
          <div>
            <h3>React</h3>

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
        </Tab>

        <Tab icon="calendar">
          <div>
            <h3>API</h3>

            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </div>
        </Tab>

        <Tab icon="clock">
          <div>
            <h3>Code</h3>

            <p>
              Aenean elementum commodo sollicitudin. In mattis interdum pretium.
              Integer nec malesuada nisi, at lacinia mi. Suspendisse tincidunt
              in velit eget posuere. Duis ac tincidunt est, nec rhoncus risus.
              Mauris quis feugiat elit, at fermentum ipsum. Vivamus nec bibendum
              ipsum. Donec vel odio in sapien porta facilisis et suscipit ante.
              Mauris arcu odio, lacinia eget ligula pellentesque, hendrerit
              rhoncus libero.
            </p>
          </div>
        </Tab>
      </Tabview>

      <div className={styles.divider}></div>

      <h2 className={styles.title}>Simple - array</h2>

      <Tabview items={items} />

      <div className={styles.divider}></div>

      <h2 className={styles.title}>Button - array</h2>

      <Tabview onlyIcon items={itemsOnlyIcon} position="left" />
    </main>
  );
}
