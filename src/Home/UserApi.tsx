import axios from "axios";
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import api from "../api/axiosInstance";
import "./UserApi.css"; 
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserApi = () => {

    type User = {
        id: number;
        name: string;
        email: string;
    }

    type Data = {
        id: number;
        name: string;
        email: string;
        phone: string;
    }

    const [data, setData] = useState<User[]>([]);

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState("")

    const [fetchData, setFetchData] = useState(false)

    const [submitData, setSubmitData] = useState(false)

    // const [removeUser, setuserId] = useState(false)




    const [formData, setFormData] = useState<Data>({
        id: 0,
        name: "",
        email: "",
        phone: "",
    })


    const alignInputs = {
        gap: "31px",
        display: "flex",
        marginBottom: "15px",
    }




    //using fetch
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //             .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])


    // using axios
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then(res => setData(res.data))
    // })


    // using async and axios

    useEffect(() => {
        setLoading(true);
        setError("");
        setData([]);
        if (!fetchData) return
        const fetchUsers = async () => {
            try {

                console.log(loading, "loading");
                setLoading(true)
                setError("");
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );

                setData(res.data);
            } catch (err) {
                console.error("API Error:", err);
                setError("Failed to fetch data");
                if (error) return <p>{error}</p>
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [fetchData]);


    useEffect(() => {
        setLoading(true);
        setError("");
        setData([]);

        if (!submitData) return
        setSubmitData(false)

        const submitUser = async () => {
            try {
                const res = await api.post("https://jsonplaceholder.typicode.com/users", formData)
                // const res = await axios.delete("https://jsonplaceholder.typicode.com/users/73",)
                setData((prev) => [...prev, res.data]);

                setFormData({
                    id: 0,
                    name: "",
                    email: "",
                    phone: ""
                });

            }
            catch (err) {
                console.error("API Error:", err);
                setError("Failed to fetch data");
                const fresh = await api.get(
                    "https://jsonplaceholder.typicode.com/users"
                );

                setData(fresh.data);
                if (error) return <p>{error}</p>
            } finally {
                setLoading(false);
            }
        }

        submitUser()
    }, [submitData])


    // useEffect(() => {

    //     if (!removeUser) return

    //     const deleteUser = async (id: number) => {
    //         try {
    //             setLoading(true);

    //             await axios.delete(
    //                 `https://jsonplaceholder.typicode.com/users/${id}`
    //             );

    //             // ✅ Instantly update UI
    //             setData((prev) => prev.filter((user) => user.id !== id));

    //         } catch (err) {
    //             console.error("Delete failed", err);
    //             setError("Failed to delete user");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };


    //     deleteUser(val: number)
    // }, [removeUser])


    const deleteUser = async (id: number) => {
        try {
            setLoading(true);

            await api.delete(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );

            // ✅ Instantly update UI
            setData((prev) => prev.filter((user) => user.id !== id));

        } catch (err) {
            console.error("Delete failed", err);
            setError("Failed to delete user");
        } finally {
            setLoading(false);
        }
    };




    const submitApi = () => {
        setSubmitData(true);
    }


    const fetchApi = () => {
        setFetchData(true);
    }

    // const deleteUser = () => {
    //      setuserId(true)
    // }

    return (
        <>
            <div>
                <div style={alignInputs}>
                    <TextField id="outlined-basic" label="id" variant="outlined" value={formData.id} onChange={(e) => setFormData({ ...formData, id: Number(e.target.value) })} />
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <TextField id="outlined-basic" label="email" variant="outlined" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <TextField id="outlined-basic" label="phone" variant="outlined" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <button onClick={() => submitApi()}>Submit</button>

                <button onClick={() => fetchApi()}>Fetch</button>

                <h2>User List</h2>
                {loading && <p>...Fetching Users</p>}
                {data.map(data => (
                    <p key={data.id}>{data.name}</p>
                ))}

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {data.length > 0 &&
                                    Object.keys(data[0]).map((key) => (
                                        <TableCell align="right" key={key}>
                                            {key}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {Object.values(row).map((value, colIndex) => (
                                        <TableCell key={colIndex}>
                                            {typeof value === "object"
                                                ? JSON.stringify(value)
                                                : value}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {data.map((user) => (
                    <div key={user.id} style={{ display: "flex", gap: "10px" }}>
                        <p>{user.name}</p>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
                ))}

            </div>

        </>
    )
}


export default UserApi;
