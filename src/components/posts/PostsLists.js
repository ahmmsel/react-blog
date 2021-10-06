import { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';
import PostsItems from './PostsItems';

export default function PostsLists() {
  const [ posts ] = useContext(PostsContext);

  return (
    <>
      {posts.postsItems.slice(0, 4).map(post => (
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
