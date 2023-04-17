import "../styles/main.css";
import "../styles/listing.css";
import Navbar from "../components/layout/Navbar";
import Banner from "../components/layout/Banner";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Banner />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
