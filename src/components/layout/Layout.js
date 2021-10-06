import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <>
      <Header />
        <main className="container">{props.children}</main>
      <Footer />
    </>
  );
}
