import fs from 'fs'
import path from 'path'

// List of files to process
const files = [
  // !!! Add the list of the files you're interested in here
  // Uncomment the code block below to see an example

  /*'./index.html',
  './package.json',
  './src/App.vue',
  './src/stores/counter.js',
  './src/main.js',*/
]

// Function to read and write file contents
function generateFileContent() {
  let output = ''

  files.forEach((file) => {
    const filePath = path.resolve(file)

    // Check if file exists
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8').trim()
      output += `${file}:\n ${content}   \n\n\n\n`
    } else {
      console.log(`File not found!!! ${file}`)
    }
  })

  // Write the output to a text file
  fs.writeFileSync('fileContents.txt', output)
  console.log('File content generated successfully!')
}

// Run the function
generateFileContent()
