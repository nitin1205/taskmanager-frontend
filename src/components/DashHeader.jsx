import { Link, useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

import { useSendLogoutMutation } from "../features/auth/authApiSlice"

const DASH_REGEX = /^\/dash(\/)?$/
const NOTES_REGEX = /^\/dash\/notes(\/)?$/
const USERS_REGEX = /^\/dash\/users(\/)?$/



const DashHeader = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation() 

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])

    const onLogoutClick = () => sendLogout()

    if (isLoading) return <p>Logging Out...</p>

    if (isError) return <p>Error: {error.data?.messasge}</p>

    let dashClass = null
    if(!DASH_REGEX.test(pathname) && !NOTES_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
        dashClass = 'dash-header__container--small'
    }

    const logoutButton = (
        <buttom 
            className="icon-button"
            title="Logout"
            onClick={onLogoutClick}
        >
            <FontAwesomeIcon icon={faRightFromBracket} />
        </buttom>
    )

    const content = (
        <header className="dash-header">
            <div className={`dash-header__container ${dashClass}`}>
                <Link to="/dash">
                    <h1 className="dash-header__title">Task Manager</h1>
                </Link>
                <nav className="dash-header__nav">
                    {/*add content in future */}
                    {logoutButton}
                </nav>
            </div>
        </header>
    )
  return content
}

export default DashHeader