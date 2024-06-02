'use strict';

const fs = require('fs');
//readFileSync is the best method to read the content of the file
//It returns buffer whihc is a sequence raw byte
const torrent = fs.readFileSync('test.torrent');
console.log(torrent.toString('utf8'));