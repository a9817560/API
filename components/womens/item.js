import React from 'react';
import Link from 'next/link'
import style from './shop.module.scss'


export default function MenuItem({ title, imageUrl, price }) {
    return (
        <div id={style.size}>
            <article className={style.card}>
                <div className={style.thumb}>
                    <img src={imageUrl}/>
                </div>
                <div className={style.infos}>
                    <h2 className={style.title}>{title}<span className={style.flag}></span></h2>
                    <h3 className={style.seats}>{price}</h3>
                    <h3 className={style.details}>event details</h3>
                </div>
            </article>
        </div>
    )
}