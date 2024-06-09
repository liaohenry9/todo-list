const taskInput=document.getElementById('taskInput');
const addBtn=document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
console.log(document.querySelectorAll('#taskList'))

addBtn.addEventListener('click',addTask);
taskInput.addEventListener('keypress',function(event){
  if(event.key === "Enter"){
    addTask()
  }
  console.log(event.key);
})

function addTask(){
  const taskText= taskInput.nodeValue.trim()
  if (taskText === ''){
    alert('please enter a task')
    return
  }
  const li = document.createElement('li')
  li.textContent=taskText

  const deleteBtn=document.createElement('button')
  deleteBtn.textContent='Delete'
  deleteBtn.className='deleteBtn'
  deleteBtn.addEventListener('click',function(){
    taskList.removeChild(li)
  })

  li.appendChild(deleteBtn);
  li.addEventListener('click',function(){
    li.classList.toggle('completed')
  })

  taskList.appendChild(li)
  taskInput.value=''
}
