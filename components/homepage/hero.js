import Image from 'next/image';
import classes from './hero.module.css'

const Hero_74 = () => {
    return (
      <section className={classes.hero}>
          <div className={classes.image}>
              <Image src="/images/site/A.jpg" alt="An image showing" width={300} height={300}/>
          </div>
          <h2>HI, I 208410174 徐紹淳</h2>
          <p>興趣:吃</p>
      </section>
    )
  }
  
  export default Hero_74;