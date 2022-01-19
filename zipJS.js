const fs = require('fs')
const archiver = require('archiver')

const output = fs.createWriteStream(__dirname + '/archiver.zip')
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
})

archive.pipe(output)

async function appendFile (file, archive) {
  return new Promise(resolve => {
    console.log('start append '+file);
    const content = fs.readFileSync(`./files/${file}`)
    archive.append(content, { name: file })
    resolve()
  })
}

const files = fs.readdirSync('./files')
let appends = []
files.forEach(file => {
  appends.push(appendFile(file, archive))
})

Promise.all(appends).then(() => {
  archive.finalize()
})



// const fs = require('fs')
// const JSZip = require('jszip');

// const zip = new JSZip();

// const files = fs.readdirSync('./files');

// files.forEach((file) => {
//   const content = fs.readFileSync(`./files/${file}`);
//   zip.file(file, content);
// });

// zip
//   .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
//   .pipe(fs.createWriteStream('jszip.zip'))
//   .on('finish', function () {
//     // JSZip generates a readable stream with a "end" event,
//     // but is piped here in a writable stream which emits a "finish" event.
//     console.log('out.zip written.');
//   });


