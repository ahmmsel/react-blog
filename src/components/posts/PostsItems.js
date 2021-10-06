import { Link } from 'react-router-dom';
import styles from '../../styles/Posts.module.scss';

export default function PostsItems(props) {
  return (
    <section className="grid-card">
      <div className={styles.postsContent}>
        <header className={styles.postsHeader}>
          <h1>{props.title}</h1>
          <small>{props.date}</small>
          <img src={props.img} alt={props.title} />
        </header>
        <footer className={styles.postsFooter}>
          <p>{props.description}</p>
          <Link to={`/posts/${props.id}`}>
            <button>read more</button>
          </Link>
        </footer>
      </div>
    </section>
  );
}
