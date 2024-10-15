import "@/styles/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/styles/chakratheme";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  const [token, setToken] = useState(false)
  
  if(token){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  return (
    <>
    <Head>
      <title>WeWatch</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <ChakraProvider theme={customTheme}>
      <div className={'mb-auto border min-h-max'}>
        <NavBar setToken={setToken} token={token}/>
        <main className="mb-auto mx-20 border min-h-max">
          <Component {...pageProps} token = {token} setToken = {setToken}/>
        </main>
        <Footer className=' h-10 mt-auto z-30'/>
      </div>
    </ChakraProvider>
    
    </>

  );
}
