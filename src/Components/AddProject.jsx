import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import UploadProject from '../assets/Images/UploadProject.png'


function AddProject() {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <button onClick={handleShow} className='btn btn-success'><i className='fa-solid fa-plus '></i> Add Project</button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label >
                <input type="file" style={{ display: 'none' }} />
                <img style={{ height: '250px' }} className='w-100' src={UploadProject} alt="Upload Project Image" />
              </label>
            </div>
            <div className="col-lg-6">
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Language Used' />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Project Github Link' />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Project Website Link' />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Project Overview' />
              </div>



            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject