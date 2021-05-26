import classes from './featured-posts.module.css'
// import PostsGrid from '../posts/posts-grid';

const FeaturedPosts_74 = (props) => {
      console.log('featured-posts', props.posts);
      return(
        <section className={classes.latest}>
          <h2>Featured Posts</h2>
          {/* <PostGrid posts={props.posts}/> */}
        </section>
      );
  };
  
  export default FeaturedPosts_74;