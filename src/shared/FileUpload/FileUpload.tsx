import * as React from "react";

interface FileUpload {
  className: String;
  onChange: Function;
}

function FileUpload({ className = "", onChange, ...props }) {
  return (
    <input
      {...props}
      className={`file-input ${className}`}
      type="file"
      name="file"
      onChange={onChange}
    />
  );
}

export default FileUpload;
