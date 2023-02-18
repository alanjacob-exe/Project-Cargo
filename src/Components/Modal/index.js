import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Modal({show,toggleShow}) {
  
  const [centredModal, setCentredModal] = useState(false);

const isShown=show;
  

  return (
    <>
      {/* <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn> */}

      <MDBModal tabIndex='-1' show={show} setShow={setCentredModal} >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Please Login</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                Pleasse login to continue using Project Cargo services. As our Information is sensitive We Cannot let you proceed without Loggin in.
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}