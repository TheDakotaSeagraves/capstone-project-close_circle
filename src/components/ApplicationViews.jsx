import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Nav/NavBar";
//import { AllPosts } from "./components/posts/AllPosts";
//import { PostDetails } from "./components/posts/PostDetails";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState(null); // Initialize as null, not {}

  useEffect(() => {
    const localLearningUser = localStorage.getItem("close_user");

    if (localLearningUser) {
      const learningUserObject = JSON.parse(localLearningUser);
      setCurrentUser(learningUserObject);
    } else {
      setCurrentUser(null);
    }
  }, []); // This empty array means "run only once on mount"

  // Now you can use currentUser
  console.log("Current user:", currentUser);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<AllPosts />} />
          <Route path="posts/:postId" element={<PostDetails />} />
        </Route>
      </Routes>
    </>
  );
};
