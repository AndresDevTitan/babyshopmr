import Layout from "../components/layout";

export default function Blog({ result }) {
    console.log(result);

    return (
        <div>
            <Layout pagina='Blog'>
                <h1>Desde Blog</h1>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    const url = 'http://localhost:1337/api/blogs?populate=*'
    const response = await fetch(url);
    const result = await response.json();
    return {
        props: {
            result
        }
    }
}