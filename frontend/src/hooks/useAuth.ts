import axios from "axios";
import { hashPassword } from "../helpers/auth";
import { API_URLS } from "../apiConfig";
import { toast } from "react-toastify";


export const useAuth = () => {

    const login = async (email: string, password: string) => {
        const payload = {
            email,
            password: password
        }
        try {
            const response = await axios.post(API_URLS.login, payload);
            if (response.status === 200) {
                toast.success("Login successful!", { toastId: "login-success" });
            }
            console.log(response.data);
        }
        catch (err: any) {
            toast.error(err.response.data.message);
        }

    }

    const singup = async (email: string, password: string, name: string) => {
        const encryptedPassword = await hashPassword(password);
        const payload = {
            email,
            password: encryptedPassword,
            name
        }
        try {
            const response = await axios.post(API_URLS.signup, payload);
            if (response.status === 201) {
                toast.success("Account created successfully!");
            }
        } catch (err: any) {
            toast.error(err.response.data.message);
        }
    }

    return { login, singup };
}