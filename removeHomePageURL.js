const fs = require('fs')
const config = require('./package.json')
delete config['homepage']
const _configStringfy = JSON.stringify(config)

fs.writeFile('./package.json', _configStringfy, (err) => {
  if (err) {
    console.log('Error writing file (remove HomePageURl)', err)
  } else {
    console.log('Successfully wrote file (remove HomePageURl)')
  }
})
