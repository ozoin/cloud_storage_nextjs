import React from "react";
import { getExtention } from "@/utils/getExtention";
import { isImage } from "@/utils/isImage";
import { colorByExt } from "@/utils/colorByExt";
import { CiFileOn } from "react-icons/ci";
import { IconContext } from "react-icons";
import Image from "next/image";
interface FileCardProps {
  filename: string;
  originalName: string;
}

const FileCard: React.FC<FileCardProps> = ({ originalName, filename }) => {
  const ext = getExtention(filename);
  const imageUrl =
    ext && isImage(ext) ? "http://localhost:7777/uploads/" + filename : "";
  const classColor = colorByExt(ext);
  return (
    <div className="flex flex-col justify-center items-center m-5 basis-1/4 hover:cursor-pointer hover:shadow-md">
      <div>
        {isImage(ext) ? (
          <Image
            src={imageUrl}
            width={100}
            height={100}
            alt="Image"
            className="object-cover"
            quality={70}
          />
        ) : (
          <CiFileOn size={30} color={classColor} />
        )}
      </div>
      <span className="text-md">{originalName}</span>
    </div>
  );
};

export default FileCard;
