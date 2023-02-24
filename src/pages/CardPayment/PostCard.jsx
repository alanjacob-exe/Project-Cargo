// import React, { useState } from "react";
// import { usePaymentInputs } from "react-payment-inputs";
// import { withRouter } from "react-router-dom";
// import queryString from "query-string";
// import { TextField } from "@mui/material";
// import {Input} from "@mui/material";
// import {InputLabel} from "@mui/material";
// import { FormControl } from '@mui/material';

// import Card from "./card";

// export default PostCards = (props) => {
//   const {
//     meta,
//     getCardNumberProps,
//     getExpiryDateProps,
//     getCVCProps,
//     getZIPProps
//   } = usePaymentInputs();

//   const [cardInfo, setCardInfo] = useState({
//     firstName: "",
//     lastName: "",
//     number: "",
//     expiry: "",
//     cvc: "",
//     zip: ""
//   });

//   const [focused, setFocused] = useState("");

//   const NumberInput = () => (
//     <input
//       {...getCardNumberProps({
//         onChange: handleCardChange("number"),
//         onFocus: handleFocus("number"),
//         placeholder: ""
//       })}
//     />
//   );

//   const handleFocus = name => () => setFocused(name);
//   const handleFirstNameChange = event =>
//     setCardInfo({ ...cardInfo, firstName: event.target.value });
//   const handleLastNameChange = event =>
//     setCardInfo({ ...cardInfo, lastName: event.target.value });
//   const handleCardChange = name => event => {
//     setCardInfo({
//       ...cardInfo,
//       [name]:
//         name === "expiry"
//           ? event.target.value.toString().replace(" / ", "")
//           : event.target.value
//     });
//   };

//   return (
//     <div>
//       <Card
//         name={
//           cardInfo.firstName +
//           (cardInfo.lastName ? " " + cardInfo.lastName : "")
//         }
//         number={cardInfo.number}
//         expiry={cardInfo.expiry}
//         cvc={cardInfo.cvc}
//         focused={focused}
//       />
//       <div>
//         <FormControl>
//           <InputLabel htmlFor="formatted-text-mask-input">
//             First name
//           </InputLabel>
//           <Input
//             type="text"
//             value={cardInfo.name}
//             onChange={handleFirstNameChange}
//             onFocus={handleFocus("name")}
//           />
//         </FormControl>

//         <FormControl>
//           <InputLabel htmlFor="formatted-text-mask-input">Last name</InputLabel>
//           <Input
//             type="text"
//             value={cardInfo.name}
//             onChange={handleLastNameChange}
//             onFocus={handleFocus("name")}
//           />
//         </FormControl>

//         <input
//           {...getCardNumberProps({
//             onChange: handleCardChange("number"),
//             onFocus: handleFocus("number"),
//             placeholder: ""
//           })}
//         />
//         <input
//           {...getExpiryDateProps({
//             onChange: handleCardChange("expiry"),
//             onFocus: handleFocus("expiry")
//           })}
//         />
//         <input
//           {...getCVCProps({
//             onChange: handleCardChange("cvc"),
//             onFocus: handleFocus("cvc")
//           })}
//         />
//         <input {...getZIPProps({ onChange: handleCardChange("zip") })} />
//         {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
//       </div>
//     </div>
//   );
// };;
