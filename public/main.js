const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/posts")

//console.log(dirPath)

let projectList = []


const getProjects = async () => {
    await fs.readdir(dirPath, (err, files) => {
        console.log("Total no. of files: " + files.length)
        if (err){
            console.log("Failed to list contents of the directory: " + err)
        }
        //console.log(files)
        files.forEach((file, i) => {
            let obj = {}
            let project

            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                //console.log(contents)
                
                const lines = contents.split("\n")
                const getMetadatIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)){
                        acc.push(i)
                    }
                    return acc
                }
                //console.log(lines)
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0]+1, metadataIndices[1])
                        metadata.forEach(line => {
                            let lineList = line.split(": ")
                            obj[lineList[0]] = lineList[1]
                        })

                        //console.log(obj)
                        return obj
                    }
                }

                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1]+1, lines.length)
                    }
                    return lines.join("\n")
                }

                const metadataIndices = lines.reduce(getMetadatIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const projectContent = parseContent({lines, metadataIndices})
                
                post = {
                    id : i + 1,
                    title : metadata.title ? metadata.title : "Title unavailable",
                    author : metadata.author ? metadata.author : "Unkown author",
                    tags : metadata.tags ? metadata.tags : "Tag not available",
                    url : metadata.url ? metadata.url : "#",
                    button : metadata.button ? metadata.button : "NA",
                    content : projectContent ? projectContent : "Content not available",
                    

                }
                projectList.push(post)
                if (i === files.length -1) {
                    //console.log(projectList)
                    let data = JSON.stringify(projectList)
                    fs.writeFileSync("src/projects.json", data)

                }
                //console.log(metadataIndices)
                //console.log(metadata)
                //console.log(projectContent)
            })
        })
    })

    // setTimeout(() => {
    //     console.log(projectList)
    // }, 500)
}


getProjects()