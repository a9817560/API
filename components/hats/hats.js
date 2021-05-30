// import style from '../home/MenuContainer.module.scss'
import Hats from './item'
import style from './hats.module.scss'


export default function MenuContainer({products}){
   
    return(

        <div>
        <div id={style.id} >
                {products.map(({cid,name:title ,price ,  remote_url:imageUrl})=>(
                    <Hats key={cid} title={title} imageUrl={imageUrl} price={price}/>
                ))}
        </div>
        </div>
        
    )
}