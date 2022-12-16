import React from 'react'
import { SnackbarContext } from '../../providers/SnackBarStateProvider'
import {
    TextField,
    Button,
    Stack,
} from '@mui/material'
import axios from 'axios'

export default function Login({ setShowLogin, userTokenState }) {
    const { setOpenToast, setMessage, setSeverity } = React.useContext(SnackbarContext)
    const setUserToken = userTokenState[1];
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

    function handleLogin(e) {
        if (email === '' || password === '') {
            setOpenToast(false);
            setMessage("Please enter all the fields");
            setSeverity("error");
            setOpenToast(true);
            return;
        }
        let data = JSON.stringify({
            "email": email,
            "password": password
        });
        let config = {
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND_BASE_URL}/api/signin`,
            withCredentials: false,
            crossdomain: true,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then((response) => {
                //console.log("Success login")
                //console.log(response, response.headers, response.headers.authorization);
                setUserToken(JSON.stringify(response.headers.authorization));
                setOpenToast(false);
                setMessage("Logged In Successfully");
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
                    <TextField value={email} onChange={e => setEmail(e.target.value.trim())} style={styles.input} type="email" label="User Email" variant="standard" required />
                    <TextField value={password} onChange={e => setPassword(e.target.value.trim())} style={styles.input} type="password" label="Password" variant="standard" required />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}>
                    <Button variant="contained" color="success" onClick={handleLogin}>Login</Button>
                    <Button variant="outlined" color="success" onClick={() => setShowLogin((login) => !login)}>Signup</Button>
                    <Button variant="outlined" color="success" onClick={()=> setUserToken("demo")}>Skip</Button>
                </Stack>
            </Stack>
        </div>
    )
}
