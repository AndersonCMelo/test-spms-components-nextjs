'use client'
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";

const Template = dynamic(async () => (await import('@spms/ui-react')).Template, {ssr: false})
const Menu = dynamic(async () => (await import('@spms/ui-react')).Menu, {ssr: false})
const Footer = dynamic(async () => (await import('@spms/ui-react')).Footer, {ssr: false})
const Header = dynamic(async () => (await import('@spms/ui-react')).Header, {ssr: false})

const SPMSIcon = dynamic(async () => (await import('@spms/react-icons')).SPMSIcon, {ssr: false})

export default function TemplateComponent({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()

  const menuOptions = {
    opened: true,
    link: '/',
    state: 'index',
    logo: {
      fontIcon: 'spms',
      size: '150px',
      color: 'primary',
    },
    smallLogo: {
      fontIcon: 'spms-icon',
      size: '50px',
      color: 'primary',
    },
    ticket: {
      title: 'Está com dúvidas?',
      titleVariant: 'Ticket',
      url: '/',
      state: 'ticket state',
      icon: 'ticket-icon',
      description: 'Crie o seu Ticket ou Pedido aqui',
    },
  }

  const menuItems = [
    {
      title: 'Início',
      icon: 'home',
      url: '/',
      state: 'index'
    },
    {
      title: 'Administração',
      icon: 'admin',
      children: [
        {
          title: 'Criar Lista de Utentes',
          icon: 'view-card',
          url: '/components/Tabs',
          state: 'Tabs',
        },
        {
          title: 'Equipas',
          icon: 'view-card',
          children: [
            {
              title: 'Equipa 1',
              icon: 'view-card',
              url: '/',
              state: '',
            },
            {
              title: 'Equipa 2',
              icon: 'view-card',
              url: '/',
              state: '',
            },
          ],
        },
        {
          title: 'Histórico de Transferências',
          icon: 'view-card',
          url: '/',
          state: '',
        },
      ]
    },
    {
      title: 'Componentes',
      icon: <SPMSIcon fontIcon="components" size="medium" />,
      url: '/',
      state: '',
      children: [
        {
          title: 'Accordion',
          icon: 'view-card',
          url: '/components/accordion',
          state: 'Accordion',
        },
        {
          title: 'Avatar',
          icon: 'view-card',
          url: '/components/avatar',
          state: 'Avatar',
        },
        {
          title: 'Autocomplete',
          icon: 'view-card',
          url: '/components/autocomplete',
          state: 'Autocomplete',
        },
        {
          title: 'BottonNavigation',
          icon: 'view-card',
          url: '/components/bottom-navigation',
          state: 'BottonNavigation',
        },
        {
          title: 'Breadcrumb',
          icon: 'view-card',
          url: '/components/breadcrumb',
          state: 'Breadcrumb',
        },
        {
          title: 'Button',
          icon: 'view-card',
          url: '/components/button',
          state: 'Button',
        },
        {
          title: 'Checkbox',
          icon: 'view-card',
          url: '/components/checkbox',
          state: 'Checkbox',
        },
        {
          title: 'Chips',
          icon: 'view-card',
          url: '/components/chips',
          state: 'Chips',
        },
        {
          title: 'Divider',
          icon: 'view-card',
          url: '/components/divider',
          state: 'Divider',
        },
        {
          title: 'Pagination',
          icon: 'view-card',
          url: '/components/pagination',
          state: 'Pagination',
        },
        {
          title: 'RadioButton',
          icon: 'view-card',
          url: '/components/radio-button',
          state: 'RadioButton',
        },
        {
          title: 'Select',
          icon: 'view-card',
          url: '/components/select',
          state: 'Select',
        },
        {
          title: 'Stepper',
          icon: 'view-card',
          url: '/components/stepper',
          state: 'Stepper',
        },
        {
          title: 'Switch',
          icon: 'view-card',
          url: '/components/switch',
          state: 'Switch',
        },
        {
          title: 'Table',
          icon: 'view-card',
          url: '/components/table',
          state: 'Table',
        },
        {
          title: 'Tabs',
          icon: 'view-card',
          url: '/components/tabs',
          state: 'Tabs',
        },
        {
          title: 'TextInput',
          icon: 'view-card',
          url: '/components/text-input',
          state: 'TextInput',
        },
        {
          title: 'TransferList',
          icon: 'view-card',
          url: '/components/transfer-list',
          state: 'TransferList',
        },
        {
          title: 'Tree',
          icon: 'view-card',
          url: '/components/tree',
          state: 'Tree',
        },
      ],
    },
    {
      title: 'Identificação',
      icon: <SPMSIcon fontIcon="identification" size="medium" />,
      url: '/',
      children: [
        {
          title: 'Test 1',
          icon: 'view-card',
          url: '/components/Tabs',
          state: 'Tabs',
        },
      ],
    },
  ]

  const headerOptions = {
    title: 'Meus alertas',
    notifications: [
      {
        label: 'Notificações',
        content: [
          { date: 'Há 1 hora', title: 'Notificação 1', icon: 'documents' },
          { date: 'Há 1 hora', title: 'Notificação 2', icon: 'new-request' },
        ]
      },
      {
        label: 'Alertas',
        content: [
          { date: 'Há 1 hora', title: 'Alerta 1', icon: 'alert' },
          { date: 'Há 1 hora', title: 'Alerta 2', icon: 'wrong-report' },
        ]
      },
    ],
    paths: {
      openAllNotifications: '/notifications',
      personalData: '/personal-data',
      webAccessibility: '/acessibility'
    }
  }

  return (
    <Template
      menu={
        <Menu
          options={menuOptions}
          items={menuItems}
          onNavigate={
            (url: string, _: string) => router.push(url)
          }
        />
      }
      header={
        <Header
          variant="simple"
          username="Nuno Oliveira"
          profilePicture="https://randomuser.me/api/portraits/men/34.jpg"
          projectName="Equipe PACE"
          primaryActionIcon="search"
          secondaryActionIcon="definitions"
          notification={5}
          options={headerOptions}
          configClick={() => {}}
          logoutClick={() => {}}
        />
      }
      content={children}
      footer={
        <Footer
          footerText="Powered by SPMS"
          spmsLogo={true}
          copyrightText="Todos os direitos reservados ao Governo da República Portuguesa - Ministério da Saúde"
          logos={[
            {
              icon: 'spms',
              color: 'primary',
              size: '80px'
            },
            {
              icon: 'sns',
              color: 'primary',
              size: '60px'
            },
            {
              icon: 'republica-portuguesa-colors',
              color: 'primary',
              size: '60px'
            },
          ]}
        />
      }
    />
  )
}