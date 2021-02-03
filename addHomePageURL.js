const fs = require('fs')
const config = require('./package.json')
config['homepage'] = 'https://howardshou.github.io/real-life-project-react/'
const _configStringfy = JSON.stringify(config)

fs.writeFile('./package.json', _configStringfy, (err) => {
  if (err) {
    console.log('Error writing file (add HomePageURl)', err)
  } else {
    console.log('Successfully wrote file (add HomePageURl)')
  }
})
