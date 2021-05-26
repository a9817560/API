import React from 'react';
import Link from 'next/link'
import styles from './MenuItem.module.scss'

export default function MenuItem({title, imageUrl,size}){
  const linkUrl =`/shop/${title}`
    return(
        <div className={`${styles[size]} ${styles.menu_item}`}>
                         <img  className={styles.background_image} src={imageUrl} alt=""/>
                 <Link href={linkUrl}>
                   <a className={styles.content}>
                  <h1 className={styles.title}>{title}</h1>
                   <span className={styles.subtitle}>Shop Now</span>
                   </a>
                 </Link>
        </div>
    )
}