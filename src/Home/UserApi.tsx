import { useEffect, useState } from "react";

const UserApi = () => {

    type User = {
        id: number;
        name: string;
        email: string;
    }

    const [data, setData] = useState<User[]>([]);



    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <h2>User List</h2>
            {data.map(data => (
                <p key={data.id}>{data.name}</p>
            ))}
        </>
    )
}


export default UserApi;
