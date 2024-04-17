// import React from "react";
// import React, { useEffect, useState } from "react";

// const Read = () => {
//   const [data, setData] = useState();
//   const [error, setError] = useState();

// async function handleDelete(id) {
//     const response = await fetch(`http://localhost:8000/${id}`, {
//       method: "DELETE",
//     });
//     const result1 = await response.json();
//     if (!response.ok) {
//       setError(result1.error);
//     }
//     if (response.ok) {
//       console.log("deleted", response.ok);
//       setError("Deleted Successfully");
//       setTimeout(() => {
//         setError("");
//         getData();
//       }, 1000);
//     }
//   }


//   async function getData() {
//     const response = await fetch("http://localhost:8000");
//     const result = await response.json();
//     console.log("result..", result);
//     if (!response.ok) {
//       setError(result.error);
//     }
//     if (response.ok) {
//       console.log(response.ok);
//       setData(result);
//       setError("");
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

// const Read = () => {
//   return (
//     <div className="container my-2">
//       <div className="row">
//         <div className="col-3">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <h6 class="card-subtitle mb-2 text-muted">Email</h6>
//               <p class="card-text">age</p>
//               <a href="#" class="card-link">
//                 Edit
//               </a>
//               <a href="#" class="card-link">
//                 Delete
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Read;