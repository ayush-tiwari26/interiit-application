import React from 'react'
import { FileUploader, FilesView } from '../components'

export default function Dashboard() {
  return (
    <div>
        <FilesView />
        <FileUploader />
    </div>
  )
}
