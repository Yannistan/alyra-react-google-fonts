import React from "react";
import GoogleFontsLoader from "./components/GoogleFontsLoader";
import Fonts from "../src/components/index";
//import AppContainer from "./components/AppContainer";
import Preview from "./components/Preview";
import PreviewContextProvider from "./context/PreviewContext";
import SizeContextProvider from "./context/SizeContext";


function App() {
  return (
    <>
      <header className="p-5 bg-danger text-white text-center">
        <h1 className="display-2">Quoi de neuf, Google Fonts ?</h1>
        <p className="h4">
          Les plus{" "}
          <a className="text-decoration-none text-dark" href="#recent">
            récentes
          </a>
          , les plus{" "}
          <i>
            <a className="text-decoration-none text-dark" href="#trendy">
              trendy
            </a>
          </i>{" "}
          et les plus{" "}
          <a className="text-decoration-none text-dark" href="#popular">
            populaires
          </a>{" "}
          polices Google.
        </p>
      </header>
      
        
          <div className="container">
            <PreviewContextProvider>
              <SizeContextProvider>
                <main>
                  <GoogleFontsLoader />
                  <div className="row">
                    <Preview />
                    <Fonts />
                  </div>
                </main>
              </SizeContextProvider>
            </PreviewContextProvider>
          </div>
      
      
      <footer className="p-3 text-center bg-dark text-light">
        With <span className="text-danger">love</span> &{" "}
        <span className="text-primary">React</span> from{" "}
        <span className="text-warning">[Orange Team]</span> for <b>Alyra</b>
      </footer>
    </>
  );
}

export default App;


