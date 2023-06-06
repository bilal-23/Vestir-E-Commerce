import { Address, AddressForm } from "../context/ContextTypes";
import { useUserData } from "../context/UserData"
import { useLoading } from "../context/LoadingContext";
import axios from "axios";
import { API_URLS } from "../apiConfig";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAddress = () => {
    const { addAddress, removeAddress, updateAddress } = useUserData();
    const { setLoading } = useLoading();
    const { token } = useAuth();
    const headers = {
        'Content-Type': 'application/json',
        'authorization': `${token}`
    }
    const handleAddAddress = async (address: AddressForm) => {
        try {
            setLoading(true);
            // console.log(address);
            // return;
            const res = await axios.post(API_URLS.postAddress, { address: address }, { headers });
            if (res.status === 200) {
                const _id = res.data._id;
                console.log(_id);
                addAddress(address, _id);
                toast.success("Address added successfully");
                return true;
            }
        }
        catch (err: any) {
            toast.error(err.response.data.message || "Something went wrong while adding address");
            return false;
        }
        finally {
            setLoading(false);
        }
    }

    const handleRemoveAddress = async (addressId: string) => {
        try {
            setLoading(true);
            // console.log(address);
            // return;
            const res = await axios.delete(API_URLS.deleteAddress(addressId), { headers });
            if (res.status === 200) {
                removeAddress(addressId);
                toast.success("Address deleted successfully");
            }
        }
        catch (err: any) {
            toast.error(err.response.data.message || "Something went wrong while deleting address");
        }
        finally {
            setLoading(false);
        }
    }

    const handleUpdateAddress = async (address: Address) => {
        try {
            setLoading(true);
            const res = await axios.put(API_URLS.updateAddress, { address }, { headers });
            if (res.status === 200) {
                updateAddress(address);
                toast.success("Address updated successfully");
                return true;
            }
        }
        catch (err: any) {
            toast.error(err.response.data.message || "Something went wrong while updating address");
        }
        finally {
            setLoading(false);
        }
    }

    return { handleAddAddress, handleRemoveAddress, handleUpdateAddress };
}