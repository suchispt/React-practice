import { Button, TextField } from "@mui/material";
import CardComponent from "./Card";
import { useState } from "react";
import type { CSSProperties } from "@mui/material/styles";

const alignInput = {
    width: "27rem",
};

const alignInputs = {
    width: "27rem",
    borderBottom: "1px solid green",
};

const alignBtn: CSSProperties = {
    width: "7rem",
    position: "relative",
    left: "34%",
    top: "17px",
};

type UserData = {
    email: string;
    password: string;
};

type ErrorData = {
    email: string;
    password: string;
};

const Login = () => {
    const [data, setData] = useState<UserData>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<ErrorData>({
        email: "",
        password: "",
    });

    const [touched, setTouched] = useState({
        email: false,
        password: false,
    });

    const validateEmail = (email: string) => {
        if (!email) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(email)) return "Enter a valid email";
        return "";
    };

    const validatePassword = (pwd: string) => {
        if (!pwd) return "Password is required";
        if (pwd.length < 8) return "Password must be at least 8 characters";
        return "";
    };

    const isFormValid = !errors.email && !errors.password && data.email && data.password;

    return (
        <>
            <form>
                <CardComponent>
                    <TextField
                        label="Email"
                        variant="standard"
                        style={alignInput}
                        value={data.email}
                        onChange={(e) => {
                            const val = e.target.value;
                            setData({ ...data, email: val });
                            setErrors({ ...errors, email: validateEmail(val) });
                        }}
                        onBlur={() => setTouched({ ...touched, email: true })}
                        error={touched.email && !!errors.email}
                        helperText={touched.email ? errors.email : ""}
                    />

                    <TextField
                        label="Password"
                        variant="standard"
                        style={touched.password && !errors.password  && data.password != "" ? alignInputs : alignInput}
                        value={data.password}
                        onChange={(e) => {
                            const val = e.target.value;
                            setData({ ...data, password: val });
                            setErrors({ ...errors, password: validatePassword(val) });
                        }}
                        onBlur={() => setTouched({ ...touched, password: true })}
                        error={touched.password && !!errors.password}
                        helperText={touched.password ? errors.password : ""}
                    />

                    <Button variant="outlined" style={alignBtn} disabled={!isFormValid}>
                        Login
                    </Button>
                </CardComponent>
            </form>
        </>
    );
};

export default Login;
