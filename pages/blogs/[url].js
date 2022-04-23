import Layout from "../../components/layout";
import Image from 'next/image';
import { formatearFecha } from '../../helpers/Index'
import styles from '../../styles/Entrada.module.css'
import NotFound from "../404";

export default function EntradaBlog({ entrada }) {
    if (entrada.data == null) {
        return (<NotFound />);
    }

    const { contenido, titulo, publishedAt } = entrada.data[0].attributes;
    const image = entrada.data[0].attributes.imagen.data.attributes.url;

    return (
        <Layout pagina={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image priority="true" layout="responsive" width={800} height={600} src={image} alt={`Imagen entrada ${titulo}`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const urlBlog = `${process.env.API_URL}/api/blogs?filters[url][$eq]=${url}&populate=*`;
    const response = await fetch(urlBlog);
    const result = await response.json();

    return {
        props: {
            entrada: result
        }
    }
}