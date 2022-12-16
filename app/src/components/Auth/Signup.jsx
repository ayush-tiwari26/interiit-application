import React from 'react'
import { SnackbarContext } from '../../providers/SnackBarStateProvider'
import {
    TextField,
    Button,
    Stack,
} from '@mui/material'
import axios from 'axios';

export default function Signup({ setShowLogin, userTokenState }) {
    const { setOpenToast, setMessage, setSeverity } = React.useContext(SnackbarContext)
    const setUserToken = userTokenState[1];
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const styles = {
        card: {
            width: '440px',
            borderRadius: '10px',
            border: '1px solid grey',
            padding: '20px',
            margin: "0 auto",
            marginTop: '30vh'
        },
        input: {
            width: '400px'
        }
    }

    function handleSignup(e) {
        if (email === '' || password === '' || name === '') {
            setOpenToast(false);
            setMessage("Please enter all the fields");
            setSeverity("error");
            setOpenToast(true);
            return;
        }
        let data = JSON.stringify({
            "name": name,
            "email": email,
            "password": password
        });
        let config = {
            method: 'post',
            url: 'http://localhost:5000/api/signup',
            withCredentials: false,
            crossdomain: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then((response) => {
                //console.log("Success signup")
                //console.log(response, response.headers, response.headers.authorization);
                setUserToken(JSON.stringify(response.headers.authorization));
                setOpenToast(false);
                setMessage("Signed Up Successfully");
                setSeverity("success");
                setOpenToast(true);
            })
            .catch((error) => {
                //console.log("Error Login")
                const status = error.response.status;
                //console.log(error.response)
                //console.log(status);
                setOpenToast(false);
                if (status === 401) {
                    setMessage("Invalid Credentials");
                    setSeverity("error");
                } else if (status === 500) {
                    setMessage(error.response.data.errors[0].error);
                    setSeverity("error");
                } else {
                    setMessage(error.response.data.message || "Something went wrong");
                    setSeverity("error");
                }
                setOpenToast(true);
            });
    }

    return (
        <div style={styles.card}>
            <Stack direction="column" spacing={2}>
                <Stack direction="column" spacing={2}>
                    <TextField value={name} onChange={e => setName(e.target.value)} style={styles.input} label="Full Name" variant="standard" />
                    <TextField value={email} onChange={e => setEmail(e.target.value)} style={styles.input} type="email" label="User Email" variant="standard" />
                    <TextField value={password} onChange={e => setPassword(e.target.value)} style={styles.input} type="password" label="Password" variant="standard" />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Button variant="outlined" color="success" onClick={() => setShowLogin((login) => !login)}>Login</Button>
                    <Button variant="contained" color="success" onClick={handleSignup}>Signup</Button>
                </Stack>
            </Stack>
        </div>
    )
}
