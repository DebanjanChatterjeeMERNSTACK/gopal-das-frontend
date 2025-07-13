import React from "react";
import "./Book_details.css";
import { MdDateRange } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Book_details = () => {
  return (
    <div className="bookdel_contaner">
      <div className="bgimage">
        <h3>Book Details</h3>
      </div>

      <div className="bookdel_maxwidth">
        <div className="bookdel_grid">
          <div className="bookdel_img">
            <img
              src="https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY425_.jpg"
              alt="Book Cover"
              width={200}
              height={300}
            />
          </div>

          <div className="bookdel_contant">
            <h2>The Power of Your Subconscious Mind</h2>
            <div>
              <div>
                <MdDateRange />
                <span>20 Aug, 1999</span>
              </div>
              <div>
                <FaRegFilePdf />
                <span>10 pages</span>
              </div>
            </div>
            <div>
              <button className="btn2">Read Book</button>
              <button className="btn1"><FiDownload/></button>
            </div>
          </div>
        </div>

        <div>
          <h3>Short Summary</h3>
          <p>
            "The Power of Your Subconscious Mind" by Dr. Joseph Murphy is a
            timeless self-help classic that explores the incredible power of
            the subconscious. It emphasizes how positive thoughts, visualizations,
            and affirmations can influence our life outcomes. By understanding
            how the subconscious operates, readers can unlock better health,
            wealth, and relationships through mental programming and belief.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book_details;
