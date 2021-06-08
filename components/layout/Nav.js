import Link from 'next/link'
import styles from './Nav.module.scss'
export default function Nav(){
    return(
        <header id={styles.header} id={styles.home}>
		<div className={styles.container} >
			<div className={styles.main_menu}>
	
			<div className={styles.row}>
				<div id={styles.logo}>
					<a href="/">208410174 project</a>
				</div>
				<nav id={styles.nav_menu_container}>
					<ul className={styles.nav_menu}>
						<li className={styles.menu_active}><a href="/">Home</a></li>
						<li className={styles.menu_has_children}><a href="">Category</a>
							<ul>
                                <li><a href="/shop">Shop</a></li>
								<li><a href="/shop/hats">Hats</a></li>
                                <li><a href="/shop/jackets">Jackets</a></li>
								<li><a href="/shop/sneakers">Sneakers</a></li>
								<li><a href="/shop/womens">Women's</a></li>
								<li><a href="/shop/mens">Men's</a></li>
							</ul>
						</li>
						<li className={styles.menu_has_children}><a href="#">Homework</a>
							<ul>
								<li><a href="#">3月24</a></li>
								<li><a href="#">5月5</a></li>
							</ul>
						</li>
						<li><a href="/projects">Api projects</a></li>
					</ul>
				</nav>
		
			</div></div>
		</div>
	</header>
       )
}