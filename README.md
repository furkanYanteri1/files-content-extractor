# Files Content Extractor
Description:
This Node.js script generates a text file (fileContents.txt) containing the content of a specified list of files. It reads each file from the list, checks if the file exists, and appends its content to the output file, formatted with the file path followed by the content. The list of files to process is provided as an array at the top of the script.

**Features:**
- Supports reading file contents and writing them to a new file.
- Allows custom file paths to be added to the files array.
- Skips non-existent files and logs a message when a file is not found.
- Outputs the results in a formatted structure with three blank spaces after the content for readability.


**Usage:**
1. Modify the files array to include the list of files you want to process(Check generateFilesContent.js for an example usage commented).
2. Run the script using Node.js to generate fileContents.txt containing the content of the specified files: `node generateFileContent.js`

Bonus:

`find . -type f -not -path './node_modules/*' -not -path './.git/*' -not -path './dist/*' -print `

