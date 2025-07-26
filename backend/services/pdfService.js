import pdfParse from "pdf-parse";

export const parsePDF = async (buffer) => {
  try {
    const data = await pdfParse(buffer);
    return {
      success: true,
      text: data.text.replace(/\s+/g, " ").trim(),
    };
  } catch (error) {
    return {
      success: false,
      error: "PDF processing failed",
      details: error.message,
    };
  }
};
