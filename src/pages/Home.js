import { Link } from 'react-router-dom';
import PostsLists from '../components/posts/PostsLists';
import Grid from '../components/layout/Grid';

export default function Home() {
  return (
    <>
      <Grid>
        <PostsLists />
      </Grid>
      <Link to='/posts' className="more-posts">more posts</Link>
    </>
  );
}
