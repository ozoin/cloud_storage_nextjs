/* eslint-disable react/jsx-key */
import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import nookies from "nookies";
import axios from "@/core/axios";
import * as Api from "@/api";
import { redirect } from "next/dist/server/api-utils";
import { CheckAuth } from "@/utils/checkAuth";
import Header from "@/components/Header";
import { Layout } from "@/layouts/Layout";
import { CiFileOn } from "react-icons/ci";
import { FaPhotoVideo } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import UploadButton from "@/components/UploadButton";
import { FileItem } from "@/api/dto/files.dto";
import FileList from "@/components/FileList";
import DashboardLayout from "@/layouts/DashboardLayout";
import Files from "@/modules/Files";

interface Props {
  items: FileItem[];
}

const DashboardDeleted = ({ items }: Props) => {
  return (
    <DashboardLayout>
      {/* <FileList items={items} /> */}
      <Files items={items} />
    </DashboardLayout>
  );
};

DashboardDeleted.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard/Deleted">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await CheckAuth(ctx);
  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll("trash");
    return {
      props: { items },
    };
  } catch (error) {
    console.log(error);
    return { props: { items: [] } };
  }
};

export default DashboardDeleted;
