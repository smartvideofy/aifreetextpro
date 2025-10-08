import { jsPDF } from 'jspdf';

export const exportAnalysisToPDF = (
  text: string,
  result: any,
  processingTime: number
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  let yPos = margin;

  // Header
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('AI Detection Analysis Report', margin, yPos);
  yPos += 15;

  // Metadata
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated: ${new Date().toLocaleString()}`, margin, yPos);
  yPos += 7;
  doc.text(`Processing Time: ${processingTime}ms`, margin, yPos);
  yPos += 15;

  // Separator line
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  // AI Probability
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('AI Probability', margin, yPos);
  yPos += 8;

  doc.setFontSize(24);
  const probability = Math.round(result.aiProbability * 100);
  const color = probability > 66 ? [220, 38, 38] : probability > 33 ? [234, 179, 8] : [22, 163, 74];
  doc.setTextColor(color[0], color[1], color[2]);
  doc.text(`${probability}%`, margin, yPos);
  yPos += 15;

  // Reasoning
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Analysis Reasoning', margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const reasoningLines = doc.splitTextToSize(result.reasoning, maxWidth);
  reasoningLines.forEach((line: string) => {
    if (yPos > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }
    doc.text(line, margin, yPos);
    yPos += 5;
  });
  yPos += 10;

  // Recommendations
  if (result.recommendations) {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommendations', margin, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const recommendationLines = doc.splitTextToSize(result.recommendations, maxWidth);
    recommendationLines.forEach((line: string) => {
      if (yPos > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
      }
      doc.text(line, margin, yPos);
      yPos += 5;
    });
    yPos += 10;
  }

  // Original Text
  if (yPos > pageHeight - 50) {
    doc.addPage();
    yPos = margin;
  }

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Analyzed Text', margin, yPos);
  yPos += 8;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  const textLines = doc.splitTextToSize(text, maxWidth);
  textLines.forEach((line: string) => {
    if (yPos > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }
    doc.text(line, margin, yPos);
    yPos += 4;
  });

  // Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Page ${i} of ${totalPages} | AI Detection Report`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  doc.save('ai-detection-analysis.pdf');
};

export const exportHumanizationToPDF = (
  originalText: string,
  humanizedText: string,
  settings: any,
  stats: any
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);
  let yPos = margin;

  // Header
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Text Humanization Report', margin, yPos);
  yPos += 15;

  // Metadata
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated: ${new Date().toLocaleString()}`, margin, yPos);
  yPos += 7;
  doc.text(`Style: ${settings.style || 'Professional'}`, margin, yPos);
  yPos += 7;
  doc.text(`Strength: ${settings.strength || 5}/10`, margin, yPos);
  yPos += 15;

  // Separator line
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  // Statistics
  if (stats) {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Change Statistics', margin, yPos);
    yPos += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Words Changed: ${stats.wordsChanged}`, margin, yPos);
    yPos += 6;
    doc.text(`Sentences Modified: ${stats.sentencesModified}`, margin, yPos);
    yPos += 6;
    doc.text(`Paragraphs Restructured: ${stats.paragraphsRestructured}`, margin, yPos);
    yPos += 15;
  }

  // Humanized Text
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Humanized Text', margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  const humanizedLines = doc.splitTextToSize(humanizedText, maxWidth);
  humanizedLines.forEach((line: string) => {
    if (yPos > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }
    doc.text(line, margin, yPos);
    yPos += 5;
  });
  yPos += 15;

  // Original Text
  if (yPos > pageHeight - 50) {
    doc.addPage();
    yPos = margin;
  }

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Original Text', margin, yPos);
  yPos += 8;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  const originalLines = doc.splitTextToSize(originalText, maxWidth);
  originalLines.forEach((line: string) => {
    if (yPos > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }
    doc.text(line, margin, yPos);
    yPos += 4;
  });

  // Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Page ${i} of ${totalPages} | Humanization Report`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  doc.save('text-humanization-report.pdf');
};
