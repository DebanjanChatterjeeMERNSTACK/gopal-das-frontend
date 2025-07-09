import React from "react";
import { GoDiscussionOutdated } from "react-icons/go";
import aboutimg from "../../../assets/writer.jpg";
const Blogall = () => {
  return (
    <>
      <div className="bookall_contaner">
        <div className="bookall_maxwidth">
          <input
            className="form-control"
            type="text"
            placeholder="Search Your Favourite Blog...."
          />
          <div className="book_flex">
            <div className="blog_flex">
              {[1, 2, 3, 4, 5, 6].map(() => {
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
                        seque opus, est bicorni forte; laeva{" "}
                        <strong>Read More...</strong>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogall;
