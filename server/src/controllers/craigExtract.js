const latestPost = require("../constants/craigData")
// const dataScrap = require("../dataScrapping")
 const extractFromCraig = (req,res)=>{
//     dataScrap().then((data)=>{
//         console.log(data);
//         res.send(data)
   // })
//     //console.log(dataScrap());
    res.send(latestPost)
 }

module.exports = {
    extractFromCraig
  };