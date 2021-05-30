// import style from '../home/MenuContainer.module.scss'
import Womens from './item'
import style from '../shop/shop.module.scss'


export default function MenuContainer({products}){
   
    return(

        <div>
        <div id={style.id} >
                {products.map(({cid,name:title ,price ,  remote_url:imageUrl})=>(
                    <Womens key={cid} title={title} imageUrl={imageUrl} price={price}/>
                ))}
        </div>
        </div>
        
    )
}