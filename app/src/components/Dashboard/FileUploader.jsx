import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { SnackbarContext } from '../../providers/SnackBarStateProvider';
import axios from 'axios';
import { UserTokenContext } from '../../providers/UserTokenProvider';

export default function FileUploader({setFiles}) {
    const {userToken} = React.useContext(UserTokenContext)
    const [file, setFile] = React.useState(null);
    const { setOpenToast,setMessage, setSeverity } = React.useContext(SnackbarContext)
    function handleChange(event) {
        setFile(event.target.files[0])
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
        axios.post('http://localhost:5000/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': userToken
            }
        }).then(res => {
            setOpenToast(false)
            setMessage("Uploaded File Successfully")
            setSeverity("success")
            setOpenToast(true)
        }).catch(err => {
            setOpenToast(false)
            if(err.response.status===401){
                setMessage("Please Login")
            }else{
                setMessage("Error Uploading File "+err.response.status)
            }
            setSeverity("error")
            setOpenToast(true)
        })
        setFiles((prevFiles)=>[...prevFiles,file])
        console.log(file)
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
