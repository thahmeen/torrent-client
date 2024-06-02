'use strict';

const fs = require('fs');
//readFileSync is the best method to read the content of the file
//It returns buffer whihc is a sequence raw byte
// const torrent = fs.readFileSync('test.torrent');

// data serialization format, and I don’t think I’ve seen it used anywhere outside of torrent files.
const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('test.torrent'));
const trackerUrl = torrent.announce.toString('utf8');
console.log(trackerUrl);