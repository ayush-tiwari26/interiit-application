import React from 'react'
import FileCard from './FileCard' 
import {Grid} from '@mui/material'

export default function FilesView() {
    const fileNames = [
        "file1",
        "file2",
        "file3",
        "file4",
        "file5",
        "file6",
    ]
    return (
        <>
        <Grid container spacing={0}>
            {fileNames.map((fileName, index) => { return <Grid item xs={12} sm={6} md={3}><FileCard key={index} fileName={fileName} /></Grid>})}
        </Grid>
        </>
    )
}
