import "./Blog.css";
import { useState, useEffect } from "react";
import BlogExceprt from "./BlogExcerpt";
import { Query } from "appwrite";
import { databases } from "../../lib/appwrite";

export default async function BlogFeed() {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    const fetchData = async () =>
      await databases.listDocuments(
        "66550efa00258f37deae",
        "66550f19001bbefea396"
      );
  }, []);

  return <div className="blog-feed">blog</div>;
}
