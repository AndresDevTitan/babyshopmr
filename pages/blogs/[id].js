import Layout from "../../components/layout";
import Image from 'next/image';
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'
import NotFound from "../404";

export default function EntradaBlog({ entrada }) {
    if (entrada.data == null) {
        return (<NotFound />);
    }

    const { contenido, titulo, publishedAt } = entrada.data.attributes;
    const { url } = entrada.data.attributes.imagen.data.attributes;

    return (
        <Layout>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={url} alt={`Imagen entrada ${titulo}`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({ query: { id } }) {
    const url = `${process.env.API_URL}/api/blogs/${id}?populate=*`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            entrada: result
        }
    }
}