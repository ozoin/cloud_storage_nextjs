import { FileItem } from "@/api/dto/files.dto";
import FileActions from "@/components/FileActions";
import React, { useState } from "react";
import FileList, { FileSelectType } from "@/components/FileList";
import * as Api from "@/api";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "@/components/Spinner";
interface FilesProps {
  items: FileItem[];
  withActions?: boolean;
}
const Files: React.FC<FilesProps> = ({ items, withActions }) => {
  const [files, setFiles] = useState(items || []);
  const [selectdIds, setSelectdIds] = React.useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const onClickRemove = async () => {
    setLoading(true);
    try {
      await Api.files.remove(selectdIds);
      setFiles((prev) => prev.filter((file) => !selectdIds.includes(file.id)));
      setLoading(false);
      toast.success("Files deleted successfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error);
    }
    setSelectdIds([]);
  };
  const onClickShare = () => {
    toast.error("Sharing not yet implemented.");
  };

  const onFileSelected = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectdIds((prev) => [...prev, id]);
    } else {
      setSelectdIds((prev) => prev.filter((_id) => _id !== id));
    }
    console.log(selectdIds);
  };
  return (
    <div>
      {files.length ? (
        <>
          {selectdIds.length > 0 && (
            <>
              <FileActions
                onClickRemove={onClickRemove}
                onClickShare={onClickShare}
                isActive={selectdIds.length > 0}
              />
              <p>Selected file count: {selectdIds.length}</p>
            </>
          )}
          {loading ? (
            <Spinner />
          ) : (
            <FileList items={files} onFileSelect={onFileSelected} />
          )}
          {/* <FileList items={files} onFileSelect={onFileSelected} /> */}
        </>
      ) : (
        <h4 className="text-xl ">File list is empty...</h4>
      )}
      <Toaster />
    </div>
  );
};

export default Files;
