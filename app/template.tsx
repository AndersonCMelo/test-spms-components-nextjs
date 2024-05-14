"use client"
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
import styles from "./template.module.css";

const Header = dynamic(async () => (await import('@spms/ui-react')).Header, {ssr: false});
const handleConfig = console.log.bind(null, 'HandleConfig')
const handleLogout = console.log.bind(null, 'handleLogout')

const Menu  =  dynamic(async () => (await import('@spms/ui-react')).Menu, {ssr: false});
const SPMSIcon  =  dynamic(async () => ((await import('@spms/react-icons')).SPMSIcon), {ssr: false});
const Footer  =  dynamic(async () => ((await import('@spms/ui-react')).Footer), {ssr: false});

const options = {
	opened: true,
	link: '/',
	logo: {
		fontIcon: 'spms',
		size: '150px',
		color: 'primary',
	},
	smallLogo: {
		fontIcon: 'spms-icon',
		size: '50px',
		color: 'primary',
	}
}

const items = [
	{
		title: 'Início',
		icon: 'home',
		url: '/',
		state: 'index'
	},
	{
		title: 'Administração',
		icon: <SPMSIcon fontIcon='admin' />,
		children: [
			{
				title: 'Contatos',
				icon: <SPMSIcon fontIcon='users' />,
				url: '/contacts'
			},
			{
				title: 'Componentes',
				icon: <SPMSIcon fontIcon='more-2' />,
				url: '/components'
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
				title: 'Autocomplete',
				icon: 'view-card',
				url: '/components/autocomplete',
				state: 'Autocomplete',
			},
			{
				title: 'Avatar',
				icon: 'view-card',
				url: '/components/avatar',
				state: 'Avatar',
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
]

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
	const router = useRouter();
	return ( <>
			<main className={styles.template__main}>
				<aside className={styles.template__menu}>
					<Menu
						options={options} 
						items={items}
						onNavigate={
							(url: string, innerState: string) => router.push(url, { scroll: false })
						}
					/>
				</aside>
				<section className={styles.template__content}>
					<Header
						variant="simple"
						username="Nuno Oliveira"
						profilePicture="https://randomuser.me/api/portraits/men/34.jpg"
						projectName="Equipe PACE"
						notification={5}
						options={{
							title: 'Meus alertas',
							notifications: [
								{
									label: 'Notificações',
									content: [
										{ date: 'Há 1 hora', title: 'Notificação 1', icon: 'documents' },
										{ date: 'Há 1 hora', title: 'Notificação 2', icon: 'new-requests' },
									]
								},
								{
									label: 'Alertas',
									content: [
										{ date: 'Há 1 hora', title: 'Alerta 1', icon: 'alert' },
										{ date: 'Há 1 hora', title: 'Alerta 2', icon: 'information' },
									]
								},
							],
							paths: {
								openAllNotifications: '/notifications',
								personalData: '/personal-data',
								webAccessibility: '/acessibility'
							}
						}}
						configClick={() => handleConfig()}
						logoutClick={() => handleLogout()}
					/>
					<section className={styles.template__content_wrapper}>
						{children}
					</section>
				</section>
				<footer className={styles.template__footer}>
					<Footer
						footerText="Powered by SPMS"
						spmsLogo={false}
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
				</footer>
			</main>
		</>
	)
}