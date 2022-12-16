import React from 'react'
import FileCard from './FileCard'
import { Grid } from '@mui/material'

export default function FilesView({files}) {
    // TODO Get file list from api
    
    return (
        <>
            <Grid container spacing={0}>
                {files.map((file, index) => { return <Grid item xs={12} sm={6} md={3}><FileCard key={index} fileName={file.name} /></Grid> })}
            </Grid>
        </>
    )
}
