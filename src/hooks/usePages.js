import { useMemo } from "react";

export const usePages = (totalPages) => {
  const sortedPosts = useMemo(() => {
    return Array.from({ length: totalPages }, (v, k) => ++k);
  }, [totalPages]);

  return sortedPosts;
};
