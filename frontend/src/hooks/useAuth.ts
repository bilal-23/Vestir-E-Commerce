import axios from "axios";
import { hashPassword } from "../helpers/auth";
import { API_URLS } from "../apiConfig";
import { toast } from "react-toastify";
import { useAuth as useAuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoading } from "../context/LoadingContext";


export const useAuth = () => {
    const { login: loginHandler } = useAuthContext();
    const { setLoading } = useLoading();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectedPath = location.state?.from || "/";

    const login = async (email: string, password: string) => {
        const payload = {
            email,
            password: password
        }
        try {
            setLoading(true);
            const response = await axios.post(API_URLS.login, payload);
            if (response.status === 200) {
                toast.success("Login successful!", { toastId: "login-success" });
                const data = response.data;
                loginHandler(data.token, data.user);
                axios.defaults.headers.common["authorization"] = `${data.token}`;
                navigate(redirectedPath, { replace: true })
            }
        }
        catch (err: any) {
            toast.error(err.response.data.message);
        }
        finally {
            setLoading(false);
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
            setLoading(true);
            const response = await axios.post(API_URLS.signup, payload);
            if (response.status === 201) {
                toast.success("Account created successfully!");
            }
        } catch (err: any) {
            toast.error(err.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }

    return { login, singup };
}