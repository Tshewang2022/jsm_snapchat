import {
  useDeleteSavePost,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/quriesAndMutations";
import { Models } from "appwrite";
import { useState, useEffect } from "react";
type PostStats = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);
  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost } = useSavePost();
  const { mutate: deleteSavePost } = useDeleteSavePost();
  const { data: currentUser } = useGetCurrentUser();

  // === FUNCTION THAT WILL HELP LIKE POST ===
  const handelLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();
    let newLikes = [...likes];
    const hasLiked = newLikes.includes(userId);
    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId);
    }
    newLikes.push(userId);
    setLikes(newLikes);
    likePost({ postId: post.$id, likesArray: newLikes });
  };

  // === FUNCTION THAT WILL HELP SAVE POST ===
  const handelSavePost = (e: React.MouseEvent) => {
    const savePostRecord = currentUser?.save.find(
      (record: Models.Document) => record.$id == post.$id
    );
    // === IF(!SAVED) == LIKED() ELSE IF(SAVE)== UNLIKED() ===
    if (savePostRecord) {
      setIsSaved(false);
      deleteSavePost(savePostRecord.$id);
    } else {
      savePost({ postId: post.$id, userId });
      setIsSaved(true);
    }
  };

  // === UI FOR THE LIKE && SAVE ===
  return (
    <div className="flex justify-between items-center z-20">
      {/* === LIKE POST BTN === */}
      <div className="flex gap-2 mr-5">
        <img
          // === checkIsLiked IS THE FUNCTION THAT NEED TO BE INSIDE lib/utils.ts, IT IS THE REGULAR JS FUNCTION TO SEE IF IT IS CHECKED OR NOT ===
          src={`${
            checkIsLiked(likes, userId)
              ? "/assets/icons/liked.svg"
              : "assets/icons/like.svg"
          }`}
          alt="like"
          width={20}
          height={20}
          onClick={(e) => handelLikePost(e)}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>
      {/* === SAVE POST BTN=== */}
      <div className="flex gap-2 ">
        <img
          src={`${
            isSaved ? "/assets/icons/save.svg" : "/assets/icons/save/svg"
          }`}
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={(e) => handelSavePost(e)}
        />
      </div>
      PostStats
    </div>
  );
};

export default PostStats;
