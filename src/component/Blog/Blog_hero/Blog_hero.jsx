import "./Blog_hero.css";
import img from "../../../assets/writer.jpg"
import img1 from "../../../assets/writer.jpg"
import Blog_contant from "../Blog_contant/Blog_contant";

const Blog_hero = () => {
  return (
    <>
      <div className="Blog_hero_contaner">
        <div className="Blog_hero_maxwidth">
          <div className="Blog_hero_flex">
            <div>
              <h1>The Pleasure of Defying Food Fashions</h1>
              <div className="profile_flex">
                <div>
                  <img src={img} />
                </div>
                <div className="profile_textaling">
                  <h5>Debanjan</h5>
                  <h6 className="profile_text">Aug 20, 1999.</h6>
                </div>
              </div>
            </div>
            <div className="blog_img">
              <img src={img1}  />
            </div>
          </div>
        </div>
      </div>
      <Blog_contant/>
    </>
  );
};
export default Blog_hero;