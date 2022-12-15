import React from 'react'
import {
  TextField,
  Button,
  Stack,
} from '@mui/material'
import bcrypt from 'bcryptjs'

export default function Login({ setShowLogin, userTokenState }) {
  const [userToken, setUserToken] = userTokenState;
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
    //Todo Login
    const hashedPassword = bcrypt.hashSync(password, process.env.SEEDED_RANDOM_STRING);
    console.log(process.env.BACKEND_BASE_URL)
  }

  return (
    <div style={styles.card}>
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={2}>
          <TextField value={email} onChange={e => setEmail(e.target.value)} style={styles.input} type="email" label="User Email" variant="standard" />
          <TextField value={password} onChange={e => setPassword(e.target.value)} style={styles.input} type="password" label="Password" variant="standard" />
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <Button variant="contained" color="success" onClick={handleLogin}>Login</Button>
          <Button variant="outlined" color="success" onClick={() => setShowLogin((login) => !login)}>Signup</Button>
        </Stack>
      </Stack>
    </div>
  )
}
