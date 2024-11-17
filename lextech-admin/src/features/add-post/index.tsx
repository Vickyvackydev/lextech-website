import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DashboardLayout } from "../../Layout";

function AddBlog() {
  const [value, setValue] = useState("");
  return (
    <DashboardLayout>
      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="border-[#E1E1E1] "
        />
      </div>
    </DashboardLayout>
  );
}

export default AddBlog;
