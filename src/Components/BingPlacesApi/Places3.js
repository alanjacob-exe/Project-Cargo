// // import { useState, useEffect } from "react";

// export default function Places3() {
//   // //   const [data, setData] = useState(null);
//   // //   const [loading, setLoading] = useState(true);
//   // //   const [error, setError] = useState(null);
//   this.state = { data: [] };

//   async componentDidMount() {
//     const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
//     const json = await response.json();
//     this.setState({ data: json });
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.data.map(el => (
//             <li>
//               {el.name}: {el.price_usd}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
