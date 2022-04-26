import Guitarra from "./Guitarra"
import styles from '../styles/Listado.module.css'

export default function Listado({ guitarras }) {

    return (
        <div className={styles.listado}>
            {guitarras.map(guitarra => (
                <Guitarra
                    guitarra={guitarra}
                    key={guitarra.id}
                />
            ))}
        </div>
    )
}