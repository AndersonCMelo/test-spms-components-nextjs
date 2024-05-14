'use client'
import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Avatar = dynamic(async () => (await import('@spms/ui-react')).Avatar, {ssr: false})

export default function AvatarComponent() {
  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Letras</h2>

      <div className={styles.avatars}>
        <div>
          <Avatar user="Design System" />
        </div>
        <div>
          <Avatar user="Ministério da Saúde" />
        </div>
        <div>
          <Avatar user="Serviços Partilhados do Ministério da Saúde" />
        </div>
      </div>

      <h2 className={styles.title}>Cores</h2>

      <div className={styles.avatars}>
        <div>
          <Avatar user="Design System" color="primary" />
        </div>
        <div>
          <Avatar user="Design System" color="secondary" />
        </div>
        <div>
          <Avatar user="Design System" color="informative" />
        </div>
        <div>
          <Avatar user="Design System" color="success" />
        </div>
        <div>
          <Avatar user="Design System" color="warning" />
        </div>
        <div>
          <Avatar user="Design System" color="danger" />
        </div>
      </div>

      <h2 className={styles.title}>Imagem</h2>

      <div className={styles.avatars}>
        <div>
          <Avatar
            user="Design System"
            image="https://mui.com/static/images/avatar/1.jpg"
          />
        </div>
        <div>
          <Avatar
            user="Ministério da Saúde"
            image="https://mui.com/static/images/avatar/2.jpg"
          />
        </div>
        <div>
          <Avatar
            user="Serviços Partilhados do Ministério da Saúde"
            image="https://mui.com/static/images/avatar/3.jpg"
          />
        </div>
      </div>

      <h2 className={styles.title}>Badges</h2>

      <div className={styles.avatars}>
        <div>
          <Avatar
            user="Serviços Partilhados do Ministério da Saúde"
            badge={{ variant: 'dot' }}
          />
        </div>
        <div>
          <Avatar user="Design System" badge={{ label: '23' }} />
        </div>
        <div>
          <Avatar
            user="Ministério da Saúde"
            badge={{ label: '27', color: 'error' }}
          />
        </div>
        <div>
          <Avatar
            user="Design System"
            badge={{
              image: 'https://mui.com/static/images/avatar/6.jpg',
            }}
          />
        </div>
      </div>

      <h2 className={styles.title}>Posicionamento de badges</h2>

      <div className={styles.avatars}>
        <div>
          <Avatar
            user="Design System"
            badge={{
              label: '23',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
            }}
          />
        </div>
        <div>
          <Avatar
            user="Serviços Partilhados do Ministério da Saúde"
            badge={{
              label: '19',
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
            }}
          />
        </div>
        <div>
          <Avatar
            user="Ministério da Saúde"
            badge={{
              label: '27',
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
              },
            }}
          />
        </div>
        <div>
          <Avatar
            user="Avatar with Badge"
            badge={{
              label: '8',
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
              },
            }}
          />
        </div>
      </div>

      <h2 className={styles.title}>Grupo</h2>

      <Avatar
        max={5}
        items={[
          {
            user: 'John Doe',
            color: 'secondary',
            badge: {
              variant: 'dot',
            },
          },
          {
            user: 'Aditya Garner',
            color: 'danger',
            badge: {
              variant: 'dot',
            },
          },
          {
            user: 'Antony Mcintyre',
            color: 'warning',
            badge: {
              variant: 'dot',
            },
          },
          {
            user: 'Milo Stephens',
            color: 'success',
            badge: {
              variant: 'dot',
            },
          },
          {
            user: 'Jerome Villarreal',
            color: 'informative',
            badge: {
              variant: 'dot',
            },
          },
          {
            user: 'Kezia Shelton',
            color: 'primary',
            badge: {
              variant: 'dot',
            },
          },
        ]}
      />
    </main>
  );
}
