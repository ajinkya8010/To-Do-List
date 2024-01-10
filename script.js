
const btn = document.querySelector('#addTodoBtn');
const list = document.querySelector('#todoList');


function addToDoList(){
    const input = document.querySelector('#newToDoInput');
    if(input.value!==""){
        const newTask = document.createElement('li');
        newTask.innerText = input.value;
        list.appendChild(newTask);

        input.value="";
        
        const deletetodoBtn = document.createElement("button");
        deletetodoBtn.innerText="X";
        deletetodoBtn.classList.add("delete-todo-btn");
        deletetodoBtn.addEventListener("click",function(){
            newTask.remove();
        })
        newTask.appendChild(deletetodoBtn);
        
    }else{
        alert("Please enter task");
    }

   
}

btn.addEventListener('click',addToDoList);