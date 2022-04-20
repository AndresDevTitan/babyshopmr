import Layout from "../components/layout";
import Link from 'next/link'
import styles from '../styles/NotFound.module.css'

export default function NotFound() {
    return (
        <Layout>
            <div className={styles.noEncontrado}>
                <h1 className="heading">Producto no encontrado</h1>

                <Link href='/'>Volver al inicio</Link>
            </div>
        </Layout>
    );
}