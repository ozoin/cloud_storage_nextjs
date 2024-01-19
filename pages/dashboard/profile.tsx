import { User } from "@/api/dto/auth.dto";
import { CheckAuth } from "@/utils/checkAuth";
import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import * as Api from "@/api";
import { Layout } from "@/layouts/Layout";

interface Props {
  userData: User;
}

const Profile: NextPage<Props> = ({ userData }) => {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-[30%]">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>

        <div className="mb-4">
          <p className="text-gray-600">
            ID: <span className="font-bold text-gray-800">{userData.id}</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            Name:{" "}
            <span className="font-bold text-gray-800">{userData.fullName}</span>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            Email:{" "}
            <span className="font-bold text-gray-800">{userData.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Profile.getLayout = (page: React.ReactNode) => {
  return <Layout title="Profile Page">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await CheckAuth(ctx);
  if ("redirect" in authProps) {
    return authProps;
  }
  const userData = await Api.auth.getMe();
  return {
    props: {
      userData,
    },
  };
};

export default Profile;
