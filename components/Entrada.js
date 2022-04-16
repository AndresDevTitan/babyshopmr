import { formatearFecha } from '../helpers'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Entrada.module.css'

export default function Entrada({ entrada }) {
    const { id } = entrada;
    const { titulo, resumen, publishedAt } = entrada.attributes;
    const { url } = entrada.attributes.imagen.data.attributes;

    return (
        <article>
            <Image priority="true" width={800} height={600} layout='responsive' src={url} alt={`imagen blog ${titulo}`} />

            <div className={styles.contenido}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blogs/${id}`}>
                    <a className={styles.enlace}>
                        Leer entrada
                    </a>
                </Link>
            </div>
        </article>
    )
}