import { use } from "react"
import UserCard from "./UserCard";

export default function Users({ usersDataPromise }) {
    const users = use(usersDataPromise);
    console.log(users);
    return (
        <div>
            <h2>Users: {users.length}</h2>
            {
                users.map(user => <UserCard user={user}></UserCard>)
            }
        </div>
    )
}