import React, { createContext, useState } from 'react';
import { postsData } from './data';

export const PostsContext = createContext();

export const PostsProvider = (props) => {
  const [ posts, setPosts ] = useState(postsData);

  return (
    <PostsContext.Provider value={ [ posts, setPosts ] }>
      {props.children}
    </PostsContext.Provider>
  );
}
