import React from 'react'
import { FileUploader, FilesView } from '../components'

export default function Dashboard() {
  const [files, setFiles] = React.useState([
    { name: 'file1' },
    { name: 'file2' },
    { name: 'file3' },
    { name: 'file4' },
    { name: 'file5' },
    { name: 'file6' },
  ])
  const styles = {
    fixedUploader: {
      backgroundColor: '#76b7e8',
      opacity: '0.9',
      padding: '10px',
      borderRadius: '8px',
      position: 'fixed',
      top: '10px',
      right: '10px',
    }
  }
  return (
    <div>
        <FilesView files={files} />
        <div style={styles.fixedUploader}>
        <FileUploader setFiles={setFiles}/>
        </div>
    </div>
  )
}
