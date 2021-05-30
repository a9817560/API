import Layout from '../../components/layout/Layout'
import Hats from '../../components/hats/hats'
export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/jackets');
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
     <Hats key={products[0].cid} products={products} />
   </Layout>

  ) 

}