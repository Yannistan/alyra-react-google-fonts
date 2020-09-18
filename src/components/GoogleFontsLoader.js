import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const GoogleFontsLoader = () => {
  return (
    <>
      {/* Use it! */}
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"],
          },
          {
            font: "Roboto Mono",
            weights: [400, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
    </>
  );
};

export default GoogleFontsLoader;