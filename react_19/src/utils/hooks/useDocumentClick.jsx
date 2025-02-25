import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    console.log("use Document click")
    const clickHandler = (e) => {
      console.log("Document clicked");
    };
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);
}