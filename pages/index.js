import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
	return (
		<div>
			<Layout pagina='Inicio'>
				<Link href="/nosotros">Ir a Nosotros</Link>
			</Layout>
		</div>
	)
}
