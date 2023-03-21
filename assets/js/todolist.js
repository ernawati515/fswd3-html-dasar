const baseUrl = "https://crudcrud.com/api/";

// api key silahkan diganti sendiri
const apiKey = "750de7232b4e4f2087db18b284d1fe13";
const url = baseUrl + apiKey;
const endpointTugas = `${url}/tugas`;
const endpointKegiatan = `${url}/kegiatan`;

const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// GET semua data
const getTugas = () => {
  fetch(endpointTugas).then(handleSuccess).catch(handleError);
};

// GET detail data
const detailTugas = (id) => {
  fetch(`${endpointTugas}/${id}`).then(handleSuccess).catch(handleError);
};

// POST data/ menambah data
const postTugas = (tugas) => {
  fetch(endpointTugas, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tugas),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// DELETE data
const deleteTugas = (id) => {
  fetch(`${endpointTugas}/${id}`, {
    method: "DELETE",
  })
    .then(handleSuccess)
    .catch(handleError);
};

// PUT data/ update data
const updateTugas = (id, tugas) => {
  fetch(`${endpointTugas}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tugas),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// async
getTugas();
deleteTugas("750de7232b4e4f2087db18b284d1fe13");
getTugas();


// ambil
const tugas = {
     id_tugas: "1",
     nama_tugas: "belajar html",
     waktu: "15 menit",
   };

const tugas2 = {
    id_tugas: "2",
    nama_tugas: "belajar masak",
    waktu: "30 menit",
  };
const tugas3 = {
    id_tugas: "3",
    nama_tugas: "belajar nyanyi",
    waktu: "10 menit",
  };

postTugas(tugas);
postTugas(tugas2);
postTugas(tugas3);

const tugasEdit = {
   id_tugas: "4",
   nama_tugas: "belajar ngoding",
   waktu: "1 jam",
 };
 updateTugas("750de7232b4e4f2087db18b284d1fe13", tugasEdit);
detailTugas("750de7232b4e4f2087db18b284d1fe13");



var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

var createNewTaskElement = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");

  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

var editTask = function() {
  console.log("Edit Task...");

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector("label");

  var containsClass = listItem.classList.contains("editMode");
  if(containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}

var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

var addTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Add list item events");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

var taskCompleted = function() {
  console.log("Task complete...");
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  addTaskEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
  console.log("Task Incomplete...");
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  addTaskEvents(listItem, taskCompleted);
}

addButton.addEventListener("click", function() {
  if (taskInput.value === "") {
    alert('Add new task!');
    return false;
  } else { console.log("Add task...");
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTasksHolder.appendChild(listItem);
  addTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
  }
});

for(var i = 0; i <  incompleteTasksHolder.children.length; i++) {
  addTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
for(var i = 0; i <  completedTasksHolder.children.length; i++) {
  addTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

