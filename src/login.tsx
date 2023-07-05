import { authenticate, logout, useLoggedInUser } from "./logged-in-user"

export const LoginComponent = () => {
    const loggedInUser = useLoggedInUser();
    return(<div>
        <button onClick={() => {
            // make service call to authenticate.
            authenticate({name: 'ABC'});
            }}>{loggedInUser? `${loggedInUser.name} logged in` : 'Login'}
        </button>
        <button onClick={() => {
            logout();
            }}>Log out
        </button>
    </div>)
}

export const LoggedinMember = () => {    
    const loggedInUser = useLoggedInUser();
    return(<>
    <label>Logged in {loggedInUser?.name}</label>
    </>)
}