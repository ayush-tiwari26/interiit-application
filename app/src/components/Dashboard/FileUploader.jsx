import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { SnackbarContext } from '../../providers/SnackBarStateProvider';
import axios from 'axios';

export default function FileUploader() {
    const [file, setFile] = React.useState(null);
    const { setOpenToast,setMessage, setSeverity } = React.useContext(SnackbarContext)
    const fileMimeType = React.useRef();
    function handleChange(event) {
        setFile(event.target.files[0])
        fileMimeType.current.type = (event.target.files[0].type)
    }
    function handleSubmit(event) {
        event.preventDefault()
        if(file==null){
            setMessage("Please select a file")
            setSeverity("error")
            setOpenToast(false)
            setOpenToast(true)
            return;
        }
        //send as form data
        const formData = new FormData();
        formData.append('file', file);
        // axios.post('http://localhost:5000/api/upload', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }).then(res => {
        //     setOpenToast(false)
        //     setMessage("Uploaded File Successfully")
        //     setSeverity("success")
        //     setOpenToast(true)
        // }).catch(err => {
        //     setOpenToast(false)
        //     setMessage("Error Uploading File")
        //     setSeverity("error")
        //     setOpenToast(true)
        // })
        console.log(file)
        console.log(fileMimeType.current.type)
    }
    return (
        <Form onSubmit={handleSubmit} style={{width:'600px'}}>
            <Form.Group controlId="formFile" className="">
                <Container style={{ width: '600px', margin:'0px', padding:'0px' }}>
                    <Row>
                    </Row>
                    <Row>
                        <Col sm={10} xs={8}>
                            <Form.Control type='file' onChange={handleChange} />
                        </Col>
                        <Col sm={2} xs={4}>
                            <Button type='submit'>Upload</Button>
                        </Col>
                    </Row>
                </Container>
            </Form.Group>
        </Form>
    )
}
