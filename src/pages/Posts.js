import { useContext } from 'react';
import PostsListsDetails from '../components/posts/PostsListsDetails';
import Grid from '../components/layout/Grid';
import Search from '../components/layout/Search';
import { PostsContext } from '../context/PostsContext';
import { SearchProvider } from '../context/SearchContext';

export default function Posts() {
  const [ posts ] = useContext(PostsContext);

  return (
    <SearchProvider>
        <section className="posts-page">
          <header>
            <h1>all posts</h1>
            <small>number of posts : {posts.postsItems.length}</small>
          </header>
          <Search />
        </section>
        <Grid>
        <PostsListsDetails />
        </Grid>
    </SearchProvider>
  );
}
