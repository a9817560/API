// import style from '../home/MenuContainer.module.scss'

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Item from './item'
import style from './shop.module.scss'


export default function MenuContainer({products}){
    const [pageNumber, setPageNumber]=useState(0);

const itemsPerPage = 10;
const pagesVisited = pageNumber * itemsPerPage;

const displayProducts = products.slice(
pagesVisited,pagesVisited + itemsPerPage
);

const changePage =({selected})=>{
setPageNumber(selected);
}

const pageCount = Math.ceil(products.length / itemsPerPage);
    return(

        <div>
        <div id={style.id} >
                {displayProducts.map(({cid,name ,price ,  remote_url:imageUrl})=>(
                    <Item key={cid} title={name} imageUrl={imageUrl} price={price}/>
                ))}
        </div>

        {/* 分頁 */}
                <ReactPaginate
previousLabel={'Prev'}
nextLabel={'Next'}
pageCount={pageCount}
onPageChange={changePage}
containerClassName={style.paginationBttns}
previousLinkClassName={style.previousBttn}
nextLinkClassName={style.nextBttn}
disabledClassName={style.paginationDisabled}
activeClassName={style.paginationActive}/>
        </div>
        
    )
}