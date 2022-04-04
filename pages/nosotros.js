import Layout from "../components/layout";
import Image from "next/image";
import styles from '../styles/Nosotros.module.css'

export default function Nosotros() {
	return (
		<div>
			<Layout pagina='Nosotros'>
				<main className="contenedor">
					<h2 className="heading">Nosotros</h2>

					<div className={styles.contenido}>
						<Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt='Imagen para nosotros' />

						<div>
							<p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
								atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
								sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
								facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
								quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
								Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
								repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
								reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
							</p>
						</div>
					</div>
				</main>
			</Layout>
		</div>
	);
}
