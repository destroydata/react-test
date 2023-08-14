import React from 'react';
import { useParams } from "react-router";

const User = (props: { users: { [key: string]: string }[] }) => {
    const params = useParams()
    const user: any = props.users.find(u => params.name === u.name)
    return <ul>
        <li>{user?.name}</li>
        <li>{user?.id}</li>
        <li>{user?.password}</li>
    </ul>
}

export default User;