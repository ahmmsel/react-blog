import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // States
  const [ toggle, setToggle ] = useState(false);
  const [ scroll, setScroll ] = useState(false);
  // End States

  // Function
  const handleToggle = () => setToggle(!toggle);
  const closeToggle = () => setToggle(false);
  const scrollNavber = () => {
    if (window.scrollY > 80) {
      setScroll(true);
      setToggle(false);
    }else{
      setScroll(false);
    }
  };
  // End function
  // useEffect
  useEffect(() => {
      window.addEventListener('scroll', scrollNavber);
    return () => {
      window.removeEventListener('scroll', scrollNavber);
    }
  }, [])
  // End useEffect

  return (
    <header className={scroll ? "header active" : "header"}>
        <div className="header-container">
            <h1>react blog</h1>
            <div className=
            {toggle ? "bi bi-x" : "bi bi-list"}
            id="menu"
            onClick={handleToggle}
            ></div>
            <nav className={toggle ? "navbar active" : "navbar"}>
              <ul className="nav-list">
                <li className="nav-items">
                  <Link to='/' onClick={closeToggle}>Home</Link>
                </li>
                <li className="nav-items">
                  <Link to='/posts' onClick={closeToggle}>posts</Link>
                </li>
              </ul>
            </nav>
        </div>
    </header>
  );
}
