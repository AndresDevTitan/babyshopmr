import Link from 'next/link'
import Styles from '../styles/Header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={Styles.header}>
            <div className="contenedor">
                <div className={Styles.barra}>
                    <Link href='/'>
                        <Image src='/img/logo.svg' width={400} height={100} alt='Imagen Logo'></Image>
                    </Link>

                    <nav className={Styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                    </nav>

                </div>
            </div>
        </header>
    )
}