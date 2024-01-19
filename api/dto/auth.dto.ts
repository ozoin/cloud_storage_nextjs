export interface LoginFormDTO {
    email: string;
    password: string;
}

export interface LoginResponseDTO {
    token: string;
}

export interface RegisterFormDTO {
    fullName:string;
    email:string;
    password:string;
}

export interface User {
    id:number;
    email:string;
    fullName:string;
}