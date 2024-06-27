import useAuth from "../../hooks/useAuth"
import useAxios from "../../hooks/useAxios"
import Login from "../login/login"
import { ProfileProps } from "./profileTypes"
const Profile = ({logout}: ProfileProps) => {
    return (
        <>
            <button onClick={logout}>logout</button>
        </>
    )
}
export default Profile