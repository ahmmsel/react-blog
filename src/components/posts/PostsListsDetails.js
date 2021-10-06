import { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';
import { SearchContext } from '../../context/SearchContext';
import PostsItems from './PostsItems';

export default function PostsListsDeatils() {
  const [ posts ] = useContext(PostsContext);
  const [ search ] = useContext(SearchContext);

  const handleFilter = (val) => {
    if (search === '') {
      return val;
    }else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  }

  return (
    <>
    {posts.postsItems.filter(handleFilter).map(post => (
          <PostsItems
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              img={post.img}
              description={post.description.substring(0, 50)}
           />
        ))}
    </>
  );
}
