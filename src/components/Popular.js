import React, {useState, useContext, useEffect} from 'react';
import { PreviewContext } from "../context/PreviewContext";
import GoogleFontLoader from "react-google-font-loader";
import { SizeContext } from "../context/SizeContext";

const Popular = () => {
  //const { text, size } = props
  const [popularFonts, setPopularFonts] = useState([]);
  const { previewText } = useContext(PreviewContext);
  const { size } = useContext(SizeContext);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_GFONTS_API_KEY;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`;
//const url = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCiQDV1ISkGASrS8JmKqi5JJG2tzkgQhaY&sort=popularity";

fetch(url)
 .then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error("font introuvable");
 })
 .then((result) => {
  setPopularFonts(result.items.slice(0, 10));
 })
 .catch((error) => {
  alert(error.message);
 }); 
// fonts triés par popularité

 }, []);

console.log("popularFonts", popularFonts);
//console.log("popularFonts", popularFonts);
//console.log("trendyFonts", trendyFonts);


return (

<section className="row my-3">
{popularFonts.map((el) => {
  return (
    <article className="col-lg-6 mb-3">
      <div key={el.family} className="shadow p-3">
      <GoogleFontLoader
                fonts={[
                  {
                    font: `${el.family}`,
                    weights: [400],
                  },
                ]}
                subsets={[]}
              />
        <h3 className="d-flex align-items-center justify-content-between">
          <span>{el.family}</span>
          <small className="h6">{`${el.variants.length} variant(s)`}</small>
        </h3>
        <p>
          <span className="badge bg-dark">{el.category.toUpperCase()}</span>
        </p>
        <p className="sample" style={{ fontFamily: el.family, fontSize: `${size}px` }}>{previewText}</p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="text-danger"
          href={`https://fonts.google.com/specimen/${el.family.split(" ").join("+")}`}
        >
          Voir sur Google Fonts
        </a>
      </div>
    </article>
  );
})}
</section>

);
};

export default Popular;



