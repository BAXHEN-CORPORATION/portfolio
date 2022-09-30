import { user } from "./user";

export const normalizeName = (name: string): string => {
  if (!name) return "";

  return name?.toLowerCase().replace(/ /g, "-");
};

export const downloadResume = () => {
  fetch(user.resumeFilename).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = user.resumeFilename;
      alink.click();
    });
  });
};
