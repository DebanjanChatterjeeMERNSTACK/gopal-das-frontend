import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog_details from "./pages/Blog_details";
import BlogAll from "./pages/BlogAll";
import Book from "./pages/Book";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import ImageGallery from "./pages/ImageGallery";
import VideoGallery from "./pages/VideoGallery";
import Error from "./pages/Error";
import Books_details from "./pages/Books_details";
import Admin_login from "./pages/Admin_login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Dashboard_book from "./pages/Dashboard/Dashboard_book";
import Dashboard_blog from './pages/Dashboard/Dashboard_blog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
           <Route path="/book-details/:id" element={<Books_details />} />
          <Route path="/image-gallery" element={<ImageGallery />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          <Route path="/blogs" element={<BlogAll />} />
          <Route path="/blogs-details/:id" element={<Blog_details />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Admin_login />} />


          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/book" element={<Dashboard_book />} />
          <Route path="/admin/blog" element={<Dashboard_blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
