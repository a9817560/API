import Layout from '../../components/layout/Layout'
import Shop from '../../components/shop/shop'
export async function getServerSideProps() {
  const response = await fetch('https://appp0602.herokuapp.com/products');
  const products = await response.json();
  return {
    props:{
      products
    }
  }
}
 export default function Home({products}){
  return (
// category='SHOP'
   <Layout>
     <Shop key={products[0].cid} products={products} />
   </Layout>

  ) 

}