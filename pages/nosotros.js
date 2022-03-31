import Link from "next/link";
import Layout from "../components/layout";

export default function Nosotros() {
	return (
		<div>
			<Layout pagina='Nosotros'>
				<h1>Desde Nosotros</h1>

				<Link href="/">Ir a Inicio</Link>
			</Layout>
		</div>
	);
}
