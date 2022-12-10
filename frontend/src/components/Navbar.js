import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container nav-div">
                <Link to="/">
                    <h1 className='logo'> Fitness Diary</h1>
                </Link>
                <Link to="/aboutus">About Us</Link>
                <nav>
                    {/* Show Logout button to only Logged in users */}
                    { user && (
                        <div>
                            <span>{ user.email }</span>
                            <button onClick={handleClick}> Logout </button>
                        </div>
                    )}

                    {/* Show Login and signup button only if user not logged in */}
                    {!user && (
                        <div>
                            <button>
                                <Link to="/login">Login</Link>
                            </button>
                            <button>
                                <Link to="/signup">Signup</Link>
                            </button>
                        </div>
                    )}

                </nav>
            </div>
        </header>
    )
}
export default Navbar;