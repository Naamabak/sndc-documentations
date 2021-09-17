const fs = require('fs');
const glob = require("glob")
const glossary_path = "./glossaire";
var results = []


/**
 * For each glossary file: 
 * the 1st heading and the first line of definition are extracted as a summary
 * @param {*} path path to directory
 */
function getSummary(path) {
    files = fs.readdirSync(path);
    //for each file in files
    files.forEach(filename => {
        fs.readFile(path + "/"+ filename, function(err, data) {
            if(err) throw err;
            
            let arr = data.toString().replace(/\r\n/g,'\n').split('\n');
            let result = new Object()
            result.path="../glossaire/"+filename
            result.file=filename
            result.title = arr[0].slice(2);
            if (arr.length < 4) {     
                result.text = "Aucune définition détaillée n'existe pour l'instant dans le glossaire. Pour contribuer, référrez-vous au guide de contribution.";
            } else {
                if (arr[3] === "# Références" || arr[4] === "# Références"){
                    result.text = "Aucune définition détaillée n'existe pour l'instant dans le glossaire. Pour contribuer, référrez-vous au guide de contribution.";
                }
                else if (arr[3] !== ""){
                    result.text = arr[3];
                } else {
                    result.text = arr[4];
                }  
            }
            results.push(result)
        });
        
    });
}

/**
 * searches and returns title and 1st line from element that has a matching filename
 * if filename not matched, returns null
 * @param {*} filename
 */
function getTitleAndTextFromFilename(filename) { 
    for(let elem of results) {
        if (elem.file.toUpperCase() === filename.toUpperCase()){
            return elem;
        }
    }
    console.log(filename+" NOT FOUND IN GLOSSAIRE SECTION");
    return null;
}

/**
 * Changes the links to the glossary by a link-previewer markup to build preview card
 * Only for links to the glossary outside the glossary
 */
function switchInPaths() { 
    glob("./!(node_modules|.vuepress|files|contribuer)/**/*.md", function (err, files) {
        if(err) throw err;
        files.forEach(filepath => {
            fs.readFile(filepath, function(err, data) {
                if(err) throw err;

                let str = data.toString();
                const array = str.match(/\[[^\[]*\]\((\.\.|https:\/\/documentation\-snds\.health\-data\-hub\.fr)\/glossaire\/[^\[]*\.(md|html)\)/g);
                if (array){
                    for(let i of array) {
                        let arr = i.split('](');
                        let link_text = arr[0].slice(1);
                        let link = arr[1].slice(0,-1);
                        let filename;
                        if(link.split('/')[2] !== "documentation-snds.health-data-hub.fr") {
                            filename = link.split('/')[2];
                            link = link.replace(".md",".html");
                        } else{
                            filename = link.split('/')[4].replace(".html", ".md");
                        }
                        let result = getTitleAndTextFromFilename(filename);
                        let markup = "<link-previewer href=\""+link+"\" text=\""+
                                 link_text+"\" preview-title=\""+result.title+"\" preview-text=\""+result.text+"\" />";
                        str = str.replace(i, markup);
                    }
                    fs.writeFile(filepath, str, function (err) { //'utf8', 
                           if (err) return console.log(err);
                    });
                    //console.log(str);
                    //console.log(filepath);
                    //console.log(array);
                }
                
            });
            
        });
  })
}
/**
 * Changes the links to the glossary by a link-previewer markup to build preview card
 * Only for link to the glossary within the glossary
 */
function switchInGlossary() { 
    glob("./glossaire/*.md", function (err, files) {
        if(err) throw err;
        files.forEach(filepath => {
            fs.readFile(filepath, function(err, data) {
                if(err) throw err;

                let str = data.toString();
                const array = str.match(/\[[^\[]+\]\([^\/\[]+\.md\)/g);
                if (array){
                    for(let i of array) {
                        let arr = i.split('](');
                        let link_text = arr[0].slice(1);
                        let link = arr[1].slice(0,-1);
                        let filename = link;
                        link = link.replace(".md",".html");
                        let result = getTitleAndTextFromFilename(filename);
                        let markup = "<link-previewer href=\""+link+"\" text=\""+
                                 link_text+"\" preview-title=\""+result.title+"\" preview-text=\""+result.text+"\" />";
                        str = str.replace(i, markup);
                    }
                    fs.writeFile(filepath, str, function (err) { //'utf8', 
                            if (err) return console.log(err);
                    });
                    //console.log(str);
                    //console.log(filepath);
                    //console.log(array);
                }
                
            });
            
        });
  })
}


getSummary(glossary_path);
switchInPaths();
switchInGlossary();


