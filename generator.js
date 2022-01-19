const fs = require('fs')
for (let i = 0; i < 200; i++) {
  let fileName = `files/file_${i}.xml` 
  fs.writeFileSync(fileName, '<?xml version="1.0" encoding="UTF-8"?><root>\n')
  for (let j = 0; j < 10000; j++) {
    fs.appendFileSync(fileName, '<some-node>soidfjsodifj aosidjfaoisdj faoisjd foaisjdfoaisdjfoaisdjf</some-node>\n')
  }
  fs.appendFileSync(fileName, '</root>')
}
