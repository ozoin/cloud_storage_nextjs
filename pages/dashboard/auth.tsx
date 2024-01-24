import LoginForm from "@/components/auth/LoginForm";
import Head from "next/head";
import React from "react";

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Auth page</title>
      </Head>
      <main
        className="w-full flex flex-col justify-evenly  items-center h-screen"
        id="welcome_main"
      >
        <LoginForm />
        <div>
          <h1 className="text-3xl font-mono subpixel-antialiased font-semibold  tracking-widest text-center text-white">
            Just for testing, you can use credentials - (adm adm) 👌
          </h1>
        </div>
      </main>
    </>
  );
};

export default AuthPage;
