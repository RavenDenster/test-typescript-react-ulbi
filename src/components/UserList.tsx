import React, { FC } from 'react'
import { IUser } from '../types/types'
import UserItem from '../components/UserItem'

interface USerListProps {
    users: IUser[]
}

const UserList: FC<USerListProps> = ({ users }) => {
    return (
        <div>
            {/* {users.map(user =>
                <UserItem key={user.id} user={user} />
            )} */}
        </div>
    )
}

export default UserList;