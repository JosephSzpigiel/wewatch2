import "@/styles/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className={'mb-auto border min-h-max'}>
      <NavBar/>
      <main className="mb-auto mx-20 border min-h-max">
        <Component {...pageProps} />
      </main>
      <Footer className=' h-10 mt-auto z-30'/>
    </div>
  );
}
