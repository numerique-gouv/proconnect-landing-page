import { useEffect } from "react";

function useTitle(title: string) {
  useEffect(() => {
    document.title = `${title} - ProConnect`;
  }, []);
}

export { useTitle };
