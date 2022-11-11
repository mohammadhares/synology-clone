import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SmallIcon from "../Icons/SmallIcon";
import { menus } from "../../constants/constants";
import MenuItem from "../Icons/MenuItem";

const WindowModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SmallIcon onClicked={handleShow} icon="windows" title="Start Point" />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-transparent"
        size="lg"
      >
        <Modal.Header
          closeButton
          style={{ borderBottomColor: "transparent", color: "#fff" }}
        ></Modal.Header>
        <Modal.Body>
          <div>
            {menus.map((menu) => (
              <span className="item" key={menu.id}>
                <MenuItem img={menu.img} name={menu.name} path={menu.path} />
              </span>
            ))}

            {menus.map((menu) => (
              <span className="item" key={menu.id}>
                <MenuItem img={menu.img} name={menu.name} path={menu.path} />
              </span>
            ))}

            {menus.map((menu) => (
              <span className="item" key={menu.id}>
                <MenuItem img={menu.img} name={menu.name} path={menu.path} />
              </span>
            ))}

            {menus.map((menu) => (
              <span className="item" key={menu.id}>
                <MenuItem img={menu.img} name={menu.name} path={menu.path} />
              </span>
            ))}

            {menus.map((menu) => (
              <span className="item" key={menu.id}>
                <MenuItem img={menu.img} name={menu.name} path={menu.path} />
              </span>
            ))}

            {menus.map((menu) => (
              <span className="item" key={menu.id}>
                <MenuItem img={menu.img} name={menu.name} path={menu.path} />
              </span>
            ))}

            {menus.map((menu) => (
              <span className="item" key={menu.id}>
                <MenuItem img={menu.img} name={menu.name} path={menu.path} />
              </span>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WindowModal;
