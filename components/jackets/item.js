import React from 'react';
import Link from 'next/link'
import style from './shop.module.scss'


export default function MenuItem({ title, imageUrl, price }) {
    return (
        <div id={style.size}>
            {/* <div className={style.note}>Based on this 
            <a href="https://dribbble.com/shots/3127773-Event-Card" target="_blank">dribbble</a>
            </div> */}
            <article className={style.card}>
                <div className={style.thumb}>
                    <img src={imageUrl}/>
                </div>
                <div className={style.infos}>
                    <h2 className={style.title}>{title}<span className={style.flag}></span></h2>
                    {/* <h3 className={style.date}>november 2 - 4</h3> */}
                    <h3 className={style.seats}>{price}</h3>
                    {/* <p className={style.txt}>Join us for our Live Infinity Session in
                    beautiful New York City. This is a 3 day
                    intensive workshop where you'll learn
            how to become a better version of...</p> */}
                    <h3 className={style.details}>event details</h3>
                </div>
            </article>
        </div>
    )
}