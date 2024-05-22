const fs = require("fs");

function read() {
  const data = fs.readFileSync(__dirname+process.env.TRAILERFLIX, 'utf8');
    
  return  JSON.parse(data);
}

function write(data) {
  const json = JSON.stringify(data);
  fs.writeFileSync(__dirname+process.env.TRAILERFLIX, json);
}


module.exports = { read, write };