import React from "react";
import aboutimg from "../../../assets/writer.jpg";
import "./Blog.css"
import { GoDiscussionOutdated } from "react-icons/go";
const Blog = () => {
  return (
    <>
      <div className="blog_contaner">
        <div className="blog_maxwidth">
          <h5>MY BLOG</h5>
          <h2>What I Do</h2>
          <div className="blog_flex">
          {[1, 2, 3].map(() => {
            return (
              <>
                <div className="card">
                  <div>
                    <img src={aboutimg} className="card_image" />
                  </div>
                  <h3>This US States Test Doesn't End Until</h3>
                  <div className="blog_date">
                   <GoDiscussionOutdated className="date_icon" />
                   <i>May 12, 2020</i>
                  </div>
                  <p>
                    Primo in altis pelle alumnae Lorem markdownum obvius in
                    seque opus, est bicorni forte; laeva <strong>Read More...</strong>
                  </p>
                </div>
              </>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
