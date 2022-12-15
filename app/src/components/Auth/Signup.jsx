import React from 'react'
import {
    TextField,
    Button,
    Stack,
} from '@mui/material'

export default function Login({ setShowLogin, userTokenState }) {
    const [userToken, setUserToken] = userTokenState;
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
        //TODO Signup
        console.log(name, email, password)
        console.log(userToken)
        setUserToken("demosignup")
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
