import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <>
            <div className="nav">
                ТЫ ДОЛБАЕБ
                <Link to="/test"> test</Link>
                <Link to="/profile">profile</Link>
            </div>
            
        </>
    )
}
export default Nav