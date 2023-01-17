import Head from "next/head";
//FILE IMPORTS
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

const Home = ({ products }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Acromart</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return {
    props: {
      products,
    },
  };
}
