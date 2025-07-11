import "./Videogallery.css";
const Videogallery = () => {
  return (
    <>
      <div className="videogallery_contaner">
        <div className="bgimage">
          <h3>Video Gallery</h3>
        </div>
        <div className="videogallery_maxwidth">
          <div className="video_grid">
            {[1, 2, 3, 4, 5, 6].map((img, index) => (
              <div className="video_size">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/WI4EOgfI-H4?si=p_wSNtwiX_OeNYMg"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullscreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Videogallery;
