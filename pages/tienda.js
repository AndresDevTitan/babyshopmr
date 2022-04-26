import Layout from "../components/layout";
import Listado from "../components/Listado";

export default function Tienda({ guitarras }) {

    return (
        <Layout pagina='Tienda Virtual'>
            <main className="contenedor">
                <h1 className="heading">Nuestra colección</h1>

                <Listado guitarras={guitarras} />
            </main>
        </Layout>
    );
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/api/guitarras?populate=*&sort[0]=createdAt:desc`;
    const response = await fetch(url);
    const result = await response.json();

    return {
        props: {
            guitarras: result.data
        }
    }
}