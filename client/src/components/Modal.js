// import React, { useState } from "react";
// import $ from "jquery";
// import "./modal.css";

// export default function Modal({ handleClose, show, children }) {
//     const showHideClassName = show ? "modal" : "modal display";

//     return (
//         <div className={showHideClassName}>
//             <div className='modal-container'>
//                 {children}
//                 <p onClick={handleClose}>close</p>
//             </div>
//         </div>
//     );
// }

// function ModalRender() {
//     setTimeout(() => {
//         (function appendJSTag() {
//             const text = `
//         var slides = $(".all-slides");
//         slides.sortable({
//             axis: "y",
//             revert: 300,
//             placeholder: "sortable-placeholder",
//             cursor: "move",
//             tolerance: "pointer",
//             start: function () {
//                 slides.addClass("sorting");
//             },
//             stop: function () {
//                 slides.addClass("sort-stop").removeClass("sorting");
//                 setTimeout(function () {
//                     slides.removeClass("sort-stop");
//                 }, 310);
//             },
//         });`;
//             const script = document.createElement("script");
//             script.innerText = text;
//             document.body.append(script);
//         })();
//     }, 5000);

//     return (
//         <div className='all-slides'>
//             <div className='slide'>slide1</div>
//             <div className='slide'>slide2</div>
//             <div className='slide'>slide3</div>
//             <div className='slide'>slide4</div>
//             <div className='slide'>slide5</div>
//             <div className='slide'>slide6</div>
//             <div className='slide'>slide7</div>
//             <div className='slide'>slide8</div>
//             <div className='slide'>slide9</div>
//             <div className='slide'>slide0</div>
//         </div>
//     );
// }
