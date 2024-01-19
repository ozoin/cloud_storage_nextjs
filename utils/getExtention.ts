import { Extension } from "./colorByExt";
export const getExtention = (filename: string) => {
    return filename.split('.').pop() as Extension;
}