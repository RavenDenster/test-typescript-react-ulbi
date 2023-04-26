import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';



const UserItemPage: FC = () => {

    interface UserItemPageParams {
        id: string
    }

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    useEffect(() => {
        fetchusers()
    }, [])

    async function fetchusers() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={goBack}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    )
}

export default UserItemPage;