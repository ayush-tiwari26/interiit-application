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
      <Card sx={{ maxWidth: 345, m: '20px' }}>
        <CardMedia
          component="img"
          height="100"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02JY-U2wBuq1PEsV5XrJ29tbdvSmxI7bE5A&usqp=CAU"
          alt="a file image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {fileName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Save</Button>
          <Button size="small">View Online</Button>
        </CardActions>
      </Card>
    </>
  )
}
