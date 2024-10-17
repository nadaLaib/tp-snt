function toggleHelp(helpId){
    const helpElement = document.getElementById(helpId);
    helpElement.style.display= helpElement.style.display === 'block' ? 'none': 'block';
}

function toggleStructure(){
    const structureDiv = document.getElementById("structure");
    structureDiv.style.display = structureDiv.style.display === "none"?"block" : "none";
}

function toggleCSSStructure(){
    const cssStructure= document.getElementById('css-structure');
    cssStructure.style.display= cssStructure.style.display === 'none' ? 'block' : 'none';
}