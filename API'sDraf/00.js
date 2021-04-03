const auxOfListTask = JSON.parse(localStorage.getItem("auxOfListTask"))||[];//ahora tengo dos baces de datos
console.log(localStorage.getItem("task"))
const render = ()=>{
    const referenceListOfTask = document.getElementById('listOfTask');
    const listOfTaskToSend = auxOfListTask.map((index)=> "<li class='li'>"+index+'</li>');
    referenceListOfTask.innerHTML = listOfTaskToSend.join('')

    const referenceElementOfListTask = document.querySelectorAll('#listOfTask li')
    referenceElementOfListTask.forEach((li,i)=>{
       li.addEventListener('click',()=> {
           li.parentNode.removeChild(li)
           auxOfListTask.splice(i,1)
           updateServer();
           render()
        })
    })
}
const updateServer = ()=>{
    const taskToSendLocalStorage = JSON.stringify(auxOfListTask);
        localStorage.setItem('auxOfListTask',taskToSendLocalStorage);
}
window.onload = ()=>{
    render();
    //search our forms
    const referenceForm = document.getElementById('form');
    referenceForm.onsubmit = (e)=>{
        e.preventDefault();
        const referenceText = document.getElementById('text');
        const task = referenceText.value;
        referenceText.value = '';
        if(task){
        auxOfListTask.push(task);
        updateServer();
        
        }
       
        render()
        
        
    }
}





