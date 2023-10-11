const dataScrap = require("../dataScrapping")
const extractFromCraig = (req,res)=>{
    dataScrap().then((data)=>{
        console.log(data);
        res.send(data)
    })
    //console.log(dataScrap());
    
}

module.exports = {
    extractFromCraig
  };