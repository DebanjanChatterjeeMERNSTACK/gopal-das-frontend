import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog_details from "./pages/Blog_details";
import BlogAll from "./pages/BlogAll";
import Book from "./pages/Book";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import ImageGallery from "./pages/ImageGallery";
import VideoGallery from "./pages/VideoGallery";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/blogs" element={<BlogAll />} />
          <Route path="/blogs-details/:id" element={<Blog_details />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
