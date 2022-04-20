import Entrada from "../components/Entrada";
import Layout from "../components/layout";
import styles from '../styles/Blog.module.css'

export default function Blog({ results }) {

    return (
        <div>
            <Layout pagina='Blog'>
                <main className="contenedor">
                    <h2 className="heading">Desde Blog</h2>

                    <div className={styles.blog}>
                        {results.data.map(result => (
                            <Entrada
                                key={result.id}
                                entrada={result}
                            />
                        ))}
                    </div>
                </main>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/api/blogs?populate=*`
    const response = await fetch(url);
    const results = await response.json();
    return {
        props: {
            results
        }
    }
}