const fs = require('fs');
const glossary_path = "./glossaire";
let results = []
let paths_to_switch = ["./fiches", "./glossaire", ""]

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
            
            const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
            let result = new Object()
            result.path="../glossaire/"+filename
            result.file=filename
            result.title = arr[0];
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
            console.log(result)
        });
        
    });
}

getSummary(glossary_path);