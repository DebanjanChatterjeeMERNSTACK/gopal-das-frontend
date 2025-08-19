// PdfFlipBook.js
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "./Read_Book.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PdfFlipBook = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-book-container">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages && (
          <HTMLFlipBook
            width={300}
            height={500}
            size="stretch"
            minWidth={250}
            maxWidth={500}
            minHeight={400}
            maxHeight={800}
            showCover={false}
            mobileScrollSupport={true}
            className="flip-book"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div className="pdf-page" key={`page_${index + 1}`}>
                <Page pageNumber={index + 1} width={280} />
              </div>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
};

export default PdfFlipBook;
