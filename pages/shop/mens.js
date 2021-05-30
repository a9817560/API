import Layout from '../../components/layout/Layout'
import Mens from '../../components/mens/mens'
export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/mens');
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
     <Mens key={products[0].cid} products={products} />
   </Layout>

  ) 

}