import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <>
            <div className="nav">
                ТЫ ДОЛБАЕБ
            </div>
            <Link to="/test"> test</Link>
            <Link to="/profile">profile</Link>
            <Link to="/login">login</Link>
        </>
    )
}
export default Nav