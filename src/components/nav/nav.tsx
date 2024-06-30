import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <>
            <div className="nav">
                <Link to="/test"> test</Link>
                <Link to="/profile">profile</Link>
            </div>
            
        </>
    )
}
export default Nav