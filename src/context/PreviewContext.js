import React, { createContext, useState } from "react";

export const PreviewContext = createContext();

const PreviewContextProvider = ({ children }) => {
  const [previewText, setPreviewText] = useState(
    `Bâchez la queue du wagon-taxi avec les pyjamas du fakir. !? 123456789`
  );
  return (
    <PreviewContext.Provider value={{ previewText, setPreviewText }}>
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewContextProvider;