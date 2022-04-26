import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css'

export default function Guitarra({ guitarra }) {
    const { descripcion, nombre, precio, url } = guitarra.attributes;
    const imagen = guitarra.attributes.imagen.data.attributes.url;
    return (
        <div className={styles.guitarra}>
            <Image priority="true" width={180} height={350} layout='responsive' src={imagen} alt={`imagen guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Ver Producto
                    </a>
                </Link>
            </div>
        </div>
    )
}