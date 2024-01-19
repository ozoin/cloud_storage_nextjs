import LoginForm from "@/components/auth/LoginForm";
import Head from "next/head";
import React from "react";

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Auth page</title>
      </Head>
      <main className="w-full  bg-slate-400 flex items-center justify-center h-screen">
        <LoginForm />
      </main>
    </>
  );
};

export default AuthPage;
