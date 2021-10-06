import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostsDetails from './components/posts/PostsDetails';
import { PostsProvider } from './context/PostsContext';

export default function App() {
  return (
    <PostsProvider>
        <Layout>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/posts' component={Posts} exact />
            <Route path='/posts/:id' component={props =>(
              <PostsDetails {...props} />
            )} />
          </Switch>
        </Layout>
    </PostsProvider>
  );
}
