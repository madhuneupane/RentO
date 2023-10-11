const axios = require("axios");
const { Parser } = require("htmlparser2");
const cheerio = require("cheerio");

const craigData = async () => {
  let allData = [];
  let temp = [];

  const url =
    'https://vancouver.craigslist.org/search/van/hhh?query=vancouver#search=1~gallery~0~0';

  try {
    const response = await axios.get(url);
    let i = 0;
    const parser = new Parser({
      onopentag(name, attrs) {
        if (i == 150) {
          return;
        }
        i++;
        for (const key of Object.keys(attrs)) {
          if (key === "href") {
            allData.push(attrs[key]);
          }
        }
      },
    });
    parser.write(response.data);
    parser.end();

    for (let j = 5; j < allData.length; j++) {
      try {
        const response = await axios.get(allData[j]);
        const $ = cheerio.load(response.data);
        const extractedData = $("#ld_posting_data").text();
        const body1 = $("#postingbody").text();
        const dataString = $("script").text();
        const startIndex = dataString.indexOf('var imgList = [');
        const endIndex = dataString.indexOf('];', startIndex) + 1;
        const imgListString = dataString.substring(startIndex, endIndex);
        const imgListScript = imgListString.replace('var imgList =', '');
        const imgList = eval(`(${imgListScript})`);

        const data = {
            link: allData[j],
          metaData:JSON.parse(extractedData),
          body: body1,
          imageList: imgList[0].url,
        };
        temp.push(data);
      } catch (error) {
        console.error("Error fetching individual listing:", error);
      }
    }
   // console.log(temp[0]);
  } catch (error) {
    console.error("Error fetching Craigslist search page:", error);
  }
  return temp;
};

module.exports = craigData;

