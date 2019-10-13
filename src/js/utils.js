/**
 * The file containes helper functions  
 */

var fileReader = (file, callback) =>{
    let fileReaderInst = new FileReader()
    
    // If an error occurs 
    fileReaderInst.onerror = ((err)=>{
        console.log(err)
    })

    // When file is loaded 
    fileReaderInst.onloadend = ((ev)=>{

        let finalLines = []

        // gets lines 
        let lines = ev.target.result.split('\n')
        
        // seprates each line into sperate elements 
        for (let element  of lines){
            finalLines.push(element.split(","))
        }

        // once the contents have been extracted calls the callback
        callback(finalLines)
    })

    // Reads file 
    fileReaderInst.readAsText(file)
}


export {
    fileReader
}