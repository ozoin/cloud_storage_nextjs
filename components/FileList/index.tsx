import React from "react";
import { FileItem } from "@/api/dto/files.dto";
import FileCard from "../FileCard";
import Selecto from "react-selecto";
export type FileSelectType = "select" | "unselect";
interface FileListProps {
  items: FileItem[];
  onFileSelect: (id: number, type: FileSelectType) => void;
}

const FileList: React.FC<FileListProps> = ({ items, onFileSelect }) => {
  return (
    <div className="w-full flex flex-row flex-wrap basis-1/4 mt-5 ">
      {items.map((item) => (
        <>
          <div data-id={item.id} key={item.id} className="file">
            <FileCard
              filename={item.filename}
              originalName={item.originalName}
            />
          </div>
        </>
      ))}
      <Selecto
        // container=".files"
        selectableTargets={[".file"]}
        selectByClick
        hitRate={10}
        selectFromInside
        toggleContinueSelect={["shift"]}
        continueSelect={false}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("border-2", "border-indigo-500");
            onFileSelect(Number(el.dataset["id"]), "select");
          });
          e.removed.forEach((el) => {
            el.classList.remove("border-2", "border-indigo-500");
            onFileSelect(Number(el.dataset["id"]), "unselect");
          });
        }}
      />
    </div>
  );
};

export default FileList;
