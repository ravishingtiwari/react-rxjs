import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

interface LoggedinUser {
    name: string;
}

const loggedInUser = new BehaviorSubject<LoggedinUser | null>(null);

export const useLoggedInUser = () => {
    const [loggedinUser, setLoggedInUser] = useState(loggedInUser.value);
    useEffect(() => {
        const subscription = loggedInUser.subscribe((user) => {
            setLoggedInUser(user);
        });
        return () => subscription.unsubscribe();
    },[]);

    return loggedinUser;
}

export const authenticate = (authenticatedUser: LoggedinUser) => {
    loggedInUser.next(authenticatedUser);
}

export const logout = () => {
    loggedInUser.next(null);
} 