import Layout from '../../components/layout/Layout'
import Shop from '../../components/shop/shop'
export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/womens');
  const products = await response.json();
  return {
    props:{
      products
    }
  }
}
 export default function Home({products}){
  return (
   <Layout>
     <Shop key={products[0].cid} products={products} />
   </Layout>

  ) 

}