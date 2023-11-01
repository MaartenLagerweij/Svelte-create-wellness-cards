// import allOffers from "./all.json";
// could also accept an argument which is "path to all.json"
// and this could be read with fs.readFile(path);
// const allOffers

import fs from "node:fs";

const allOffers = fs.readFileSync("./all.json", "utf8")

const sauna = process.argv[2];

const smallDataForBundle = allOffers.offers.filter((offer) => offer.name === sauna)

console.log(smallDataForBundle);

// write smallData... to /static/data.json