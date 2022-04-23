import { formatearFecha } from '../helpers/Index'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Entrada.module.css'

export default function Entrada({ entrada }) {
    const { url } = entrada.attributes;
    const { titulo, resumen, publishedAt } = entrada.attributes;
    const imagen = entrada.attributes.imagen.data.attributes.url;

    return (
        <article>
            <Image priority="true" width={800} height={600} layout='responsive' src={imagen} alt={`imagen blog ${titulo}`} />

            <div className={styles.contenido}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blogs/${url}`}>
                    <a className={styles.enlace}>
                        Leer entrada
                    </a>
                </Link>
            </div>
        </article>
    )
}