import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import axios from "@/core/axios";
import * as Api from "@/api";


export const CheckAuth = async (ctx: GetServerSidePropsContext) => {
    const { _token } = nookies.get(ctx);
    axios.defaults.headers.Authorization = "Bearer " + _token;
    console.log(_token);
    try {
      const { data } = await Api.auth.getMe();
      // console.log(data);
      return {
        props: {},
      };
    } catch (error) {
      console.log('Error in checkAuth')
      console.log(error);
      return {
        redirect: {
          destination: "/dashboard/auth",
          permanent: false,
        },
      };
    }
}