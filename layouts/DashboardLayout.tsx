import UploadButton from "@/components/UploadButton";
import { useRouter } from "next/router";
import React from "react";
import { CiFileOn } from "react-icons/ci";
import { FaPhotoVideo } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const selectedMenu = router.pathname;
  const menuItems = [
    {
      title: "Files",
      icon: <CiFileOn className="ml-4" size={20} />,
      routing: "/dashboard",
    },
    {
      title: "Photos",
      icon: <FaPhotoVideo className="ml-4" size={20} />,
      routing: "/dashboard/photos",
    },
    {
      title: "Deleted",
      icon: <IoTrashBinOutline className="ml-4" size={20} />,
      routing: "/dashboard/deleted",
    },
  ];
  return (
    <main className="w-[70%] mx-auto mt-5 flex items-center ">
      <div className="w-[30%] flex  justify-center flex-col">
        <div className="flex justify-center">
          <UploadButton />
        </div>
        {menuItems.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className="h-[40px] m-5 flex items-center mb-2 hover:cursor-pointer focus:bg-red-100"
            onClick={() => router.push(item.routing)}
          >
            {item.icon}
            <span className="text-lg ml-5">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="w-[70%]">{children}</div>
    </main>
  );
};

export default DashboardLayout;
