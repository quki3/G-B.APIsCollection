//hi welcome! G-B enjoy the code
const aux = JSON.parse(localStorage.getItem('aux'))||[];//para usar locaStorage.getItem esta bueno usar los cortocircuitos || or &&

const render = () => {
            const referenceOfList = document.getElementById('textList')
            const listOfTask = aux.map(i => "<li>"+ i + "</li>");
            referenceOfList.innerHTML = listOfTask.join('')

            const deleteTask = document.querySelectorAll('#textList li')
            deleteTask.forEach((li,i)=>{
            
            li.addEventListener('click',()=>{
                li.parentNode.removeChild(li)//los nodos padres tienen la capacidad de eliminar a sus hijos
                aux.splice(i,1);
                updateServer(aux);
                render()
                   
            })
        })
}


const updateServer = (aux)=>{
    const sendingTaskToAServer = JSON.stringify(aux);//When sending data to a web server, the data has to be a string.
    localStorage.setItem('aux',sendingTaskToAServer);//mandamos esa task a 'aux'
}


window.onload = ()=>{
    render();
const form = document.getElementById('form');

form.onsubmit = (e)=>{//Execute a JavaScript when a form is submitted:
        e.preventDefault();//detiene el comportamiento que tienen los formularios botton o link que es el de refrescar la pagina
        const referenceOfText = document.getElementById('text');//this get the reference of text
        const valueText = referenceOfText.value;//this get the value of the text
        referenceOfText.value = '';
        if(valueText){//prevent the push of an string empty
        aux.push(valueText);
        }
        updateServer(aux);
        render();

}

}



