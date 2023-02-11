// import React, { useState } from "react";
// import MyModal from "./ShowModal";

// const Modal = () => {
//   const [showModal, setShowModal] = useState(false);

//   const closeModal = () => setShowModal(false);

//   const handleCloseButton = (
//     <button className="model-btn" onClick={closeModal}>
//       Accept It
//     </button>
//   );

//   const mainModal = (
//     <MyModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
//       <h2>STAY TUNED</h2>
//       <p>
//         Subscribe to our newsletter and never miss our designs ,latest news.etc.
//         Our newsletter is sent once a week, every Monday
//       </p>
//     </MyModal>
//   );

//   return (
//     <>
//       <button className="model-btn" onClick={() => setShowModal(true)}>
//         Open Modal
//       </button>
//       {showModal && mainModal}
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
//         laudantium laborum voluptas officiis nisi nesciunt numquam autem ipsa
//         cumque officia omnis quos iure eveniet accusamus iste consequuntur?
//         Odit, quia repellat.
//       </p>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };

// export default Modal;



import React from "react";
//  import "./Model.css";
import PaymentForm from "./PaymentForm";
import "./Apply.css";


function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
            <PaymentForm/>
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;