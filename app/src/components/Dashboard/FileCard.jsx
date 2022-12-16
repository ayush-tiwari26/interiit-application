import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions
} from '@mui/material'

export default function FileCard({ fileName }) {
  return (
    <>
      <Card sx={{ maxWidth: 345, m: '20px', backgroundColor:"#76b7e8" }}>
        <CardMedia
          component="img"
          height="120"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02JY-U2wBuq1PEsV5XrJ29tbdvSmxI7bE5A&usqp=CAU"
          alt="a file image"
        />
        <CardContent>
          <Typography color="white" gutterBottom variant="h6" component="div">
            {fileName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="success">Save</Button>
          <Button size="small" varient="outlined" style={{color: "white"}}>View Online</Button>
        </CardActions>
      </Card>
    </>
  )
}
