import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './display.css';  // Import the CSS file

function Display({ formData }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPDF = () => {
    const input = componentRef.current;
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('display.pdf');
    });
  };

  return (
    <div className="container" ref={componentRef}>
      <h2>Resume</h2>
      <p><strong>Name:</strong> <span style={{ color: '#000000' }}>{formData.name}</span></p>
      <p><strong>Degree:</strong> <span style={{ color: '#000000' }}>{formData.degree}</span></p>
      <p><strong>Completion Year:</strong> <span style={{ color: '#000000' }}>{formData.completionYear}</span></p>
      <p><strong>Skills:</strong> <span style={{ color: '#000000' }}>{formData.skills}</span></p>
    
      <p><strong>About Me:</strong> <span style={{ color: '#000000' }}>{formData.about}</span></p>
      <p><strong>Contact me on:</strong> <span style={{ color: '#000000' }}>{formData.phone}</span></p>
      <button onClick={handlePrint}>Print</button>
      <button onClick={handleDownloadPDF}>Download as PDF</button>
    </div>
  );
}

export default Display;
