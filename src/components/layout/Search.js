import { useContext } from 'react';
import styles from '../../styles/Search.module.scss';
import { SearchContext } from '../../context/SearchContext';

export default function Search() {
  const [ search, setSearch ] = useContext(SearchContext);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <form className={styles.searchForm}>
        <input
        type="text"
        name="search"
        placeholder="search"
        value={search}
        onChange={handleSearch}
        />
      </form>
    </>
  );
}
