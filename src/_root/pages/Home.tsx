import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/quriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-post">
          <h2 className="text-left h3-bold md:h2-bold w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col w-full gap-9 ">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={posts} />
              ))}
              {/* === THIS THE PLACE WHERE WE FETCH NEW RECENT POST */} test
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
