import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./layout.css";

function WrapperLayout(props: { children: JSX.Element }) {
  return (
    <div className="app">
      <Header />
      <main role="main" className="content">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default WrapperLayout;
