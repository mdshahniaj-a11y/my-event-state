import './UserCard.css'
export default function UserCard({user}) {
    return (
        <div className='User'>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
        </div>
    )
}