import axios from "@/core/axios"
import { LoginFormDTO, LoginResponseDTO, RegisterFormDTO, User } from "./dto/auth.dto";
import { destroyCookie } from "nookies";

export const login = async (values:LoginFormDTO):Promise<LoginResponseDTO> => {
    const {data} = await axios.post("/auth/login",values);
    return data
}

export const register = async (values:RegisterFormDTO):Promise<LoginResponseDTO> => {
    const {data} = await axios.post("auth/register",values);
    return data
}

export const testConnection = async () => {
    return await axios.get('/')
}

export const getMe = async () => {
    return (await axios.get('users/me')).data;
}

export const logout = () => {
    destroyCookie(null,"_token",{path:"/"});
}