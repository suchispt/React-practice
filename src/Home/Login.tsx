import { Button, TextField } from "@mui/material";
import CardComponent from "./Card";
import { useState } from "react";
import type { CSSProperties } from "@mui/material/styles";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

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
    name: string;
    email: string;
    password: string;
};

type ErrorData = {
    name: string;
    email: string;
    password: string;
};



const Login = () => {

    const navigate = useNavigate()


    const [data, setData] = useState<UserData>({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<ErrorData>({
        name: "",
        email: "",
        password: "",
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false,
    });



    const LoginSchema = z.object({
        name: z
            .string()
            .min(5, "name should have atleast 5 characters")
            .refine((val) => /^[a-zA-Z]+$/.test(val), {
                message: "name should contain only alphabets"
            }),

        email: z
            .string()
            .refine((val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val), {
                message: "Enter valid email address"
            }),

        password: z
            .string()
            .refine((val) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val), {
                message: "Password must be at least 8 characters, include uppercase, lowercase, number and special character"
            }),
    })




    // const validateForm = () => {
    //     const result = LoginSchema.safeParse(data);

    //     if (result.success) {
    //         return { isValid: true, errors: {} };
    //     }

    //        const fieldErrors: Partial<ErrorData> = {};

    //     result.error.issues.forEach((issue) => {
    //         const field = issue.path[0] as keyof UserData;
    //         fieldErrors[field] = issue.message;
    //     });

    //     return { isValid: false, errors: fieldErrors };
    // };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = LoginSchema.safeParse(data);

        if (!result.success) {
            const newErrors = { name: "", email: "", password: "" };

            result.error.issues.forEach(issue => {
                const field = issue.path[0] as keyof typeof newErrors;
                newErrors[field] = issue.message;
            });

            setErrors(newErrors);
            return;
        }
        alert("Form Submitted Successfully!");
        navigate("/userApi")
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardComponent>
                    <TextField
                        label="UserName"
                        variant="standard"
                        style={alignInput}
                        value={data.name}
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value });
                        }}
                        onBlur={() => setTouched({ ...touched, name: true })}
                        error={touched.name && !!errors.name}
                        helperText={touched.name ? errors.name : ""}
                    />
                    <TextField
                        label="Email"
                        variant="standard"
                        style={alignInput}
                        value={data.email}
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                        }}
                        onBlur={() => setTouched({ ...touched, email: true })}
                        error={touched.email && !!errors.email}
                        helperText={touched.email ? errors.email : ""}
                    />

                    <TextField
                        label="Password"
                        variant="standard"
                        style={touched.password && !errors.password && data.password != "" ? alignInputs : alignInput}
                        value={data.password}
                        onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                        }}
                        onBlur={() => setTouched({ ...touched, password: true })}
                        error={touched.password && !!errors.password}
                        helperText={touched.password ? errors.password : ""}
                    />

                    <Button variant="outlined" style={alignBtn}  type="submit">
                        Login
                    </Button>
                </CardComponent>
            </form>
        </>
    );
};

export default Login;
