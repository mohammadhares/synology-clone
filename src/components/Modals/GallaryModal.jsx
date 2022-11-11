import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SmallIcon from "../Icons/SmallIcon";
import {banners} from "../../data/store";

const GallaryModal = ( props ) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SmallIcon onClicked={handleShow} icon={props.icon} title={props.title} />
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        dialogClassName="modal-transparent gallary"
        size="lg"
        fullscreen
      >
        <Modal.Header
          closeButton
          style={{ borderBottomColor: "transparent", color: "#fff" }}
        >
        </Modal.Header>
        <Modal.Body>
            <h1 className="text-center"> Desktop Backgrounds </h1>
            <br />
            <hr />
            <br />
          <div>
            {banners.map((image) => (
              <div className=" col-2 item m-2" key={image.id}>
                <img onClick={() => props.onChangeBackground(image.img)} className="img img-responsive img-gallary" src={image.img} alt="" />
              </div>
            ))}

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GallaryModal;
