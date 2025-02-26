import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SkipLinks from "../components/SkipLinks/SkipLinks";
import "./layout.css";

function WrapperLayout(props: { children: JSX.Element }) {
  return (
    <div className="app">
      <SkipLinks />
      <Header />
      <main role="main" className="content" id="content">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default WrapperLayout;
