// const quoteSchema = require("../model/quoteSchema");
// const fetch = require("node-fetch");
// // import quoteSchema from "../model/quoteSchema.js";
// // import fetch from "node-fetch"

// const options = {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     "X-RapidAPI-Key": "d1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4",
//     "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
//   },
//   body: '[{"operator":"or","operands":[{"operator":"EQ","operands":["exchange","NAS"]},{"operator":"EQ","operands":["exchange","NYQ"]}]}]',
// };

// const getPost = async (req, res) => {
//   const dataLimit = 100;
//   let dataOffset = req.body.page;

//   try {
//     await fetch(
      `https://yh-finance.p.rapidapi.com/screeners/list?quoteType=MUTUALFUND&sortField=fundnetassets&region=US&size=${dataLimit}&offset=${dataOffset}&sortType=DESC`,
//       options
//     )
//       .the((apiData) => apiData.json())
//       console.log(apiData)
//       .then((actualData) => {
//         const finance = actualData.finance;
//         const finalFinanceData = finance.result[0];
//         console.log("Hello there")
//         if (finalFinanceData.length > 0) {
//           if (finalFinanceData.length < 100) {
//             console.log("All Data consumed last");
//           } 
//           else {
//             console.log("condition loop", dataOffset)
//             getPost({ body: { offset: dataOffset + 1 } });
//           }
            
//         }
//         else {
//           return console.log("All data Consumed empty");
//         }

//         //res.status(200).json({status: 200, data:{ }, message: "Quotes saved in database"})
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (err) {
//     console.log(err);
//   }
// };


// // export default {getPost}
// module.exports = {getPost}
