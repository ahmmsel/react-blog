import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PostsContext } from '../../context/PostsContext';
import styles from '../../styles/Posts.module.scss';

export default function PostsDetails(props, { match }) {
  const [ posts ] = useContext(PostsContext);
  const getId = props.match.params.id;
  const getData = posts.postsItems[ getId ];

  // Function
  const history = useHistory();
  const handleBack = () => {
      history.push('/posts');
  };

  return (
    <>
        <section className={styles.details}>
            <button onClick={handleBack} className={styles.btn}>
              back to posts
            </button>
            <header className={styles.detailsHeader}>
              <h1>{getData.title}</h1>
              <img src={getData.img} alt={getData.title} />
            </header>
            <footer className={styles.detailsFooter}>
              <p>{getData.description}</p>
            </footer>
        </section>
    </>
  );
}
