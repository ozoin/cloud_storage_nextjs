import React, { useState } from "react";
import * as Api from "@/api";
import LoadingSpinner from "../Spinner";
const UploadButton = () => {
  const [fileList, setFileList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const onUploadSuccess = async (uploadedFile: File) => {
    try {
      const file = await Api.files.uploadFile(uploadedFile);
      setLoading(false);
      setFileList([]);
      window.location.reload();
    } catch (error) {
      console.log("File upload error!");
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileList([file.name]);
      setLoading(true);
      await onUploadSuccess(file);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}

      <div className="mt-4">
        <p>{fileList}</p>
      </div>
    </div>
  );
};

export default UploadButton;
