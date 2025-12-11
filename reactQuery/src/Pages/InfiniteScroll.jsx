// src/Pages/InfiniteScroll.jsx
import { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";

const PAGE_LIMIT = 20;

const InfiniteScroll = () => {
  const {
    data, 
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["infinitePosts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, PAGE_LIMIT),
    getNextPageParam: (lastPage, allPages) => {

      if (!lastPage || lastPage.length < PAGE_LIMIT) return undefined;
      return allPages.length + 1;
    },

    keepPreviousData: true,
    staleTime: 1000 * 60 * 2,
  });

  const posts = data?.pages?.flat() ?? [];

  const sentinelRef = useRef(null);

  const onIntersect = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [onIntersect]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error?.message}</div>;

  return (
    <div>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {posts.map((p) => (
          <li key={p.id} style={{ marginBottom: 16, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
            <h3 style={{ margin: "4px 0" }}>{p.title}</h3>
            <p style={{ margin: "4px 0" }}>{p.body}</p>
          </li>
        ))}
      </ul>

      <div style={{ padding: 16, textAlign: "center" }}>
        {isFetchingNextPage ? (
          <div>Loading more...</div>
        ) : hasNextPage ? (
          <div>Scroll to load more</div>
        ) : (
          <div>No more posts</div>
        )}
        {isFetching && !isFetchingNextPage ? <div style={{ fontSize: 12 }}>Background fetching...</div> : null}
      </div>

      {/* sentinel */}
      <div ref={sentinelRef} style={{ height: 1 }} />
    </div>
  );
};

export default InfiniteScroll;
