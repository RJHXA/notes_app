var banco_dados_tasks = [
	{task: 'Arrumar Casa', status: ''},
]

function criar_task(task, status, indice) {
	const new_label = document.createElement('label');
	new_label.classList.add('task-item');
	new_label.innerHTML = `
		<input type="checkbox" id="check_box" ${status} data-indice=${indice}/>
		<div class="text_task">${task}</div>
		<input type="button" value="X" id="botao_excluir" data-indice=${indice}/>
	`;

	document.getElementById('novos_tasks').appendChild(new_label);
}

function resetList_html() {
	const tasks = document.getElementById('novos_tasks');
	while(tasks.firstChild) {
		tasks.removeChild(tasks.lastChild);
	}
}

function update_html() {
	resetList_html();
	banco_dados_tasks.forEach((label, indice) => criar_task(label.task, label.status, indice));
}

function add_bd() {
	const text = document.getElementById('task_description');
	banco_dados_tasks.push({task: text.value, status: ''});
	update_html();
} 

function removeTask(indice){
	console.log(indice);
	banco_dados_tasks.splice(indice, 1);
	update_html();
}

function update_status(event) {
	const element = event.target;
	if(element.type === 'button'){
		var indice = element.dataset.indice;
		indice = indice.replace('/', '');
		removeTask(indice);
	}
}

document.getElementById('botao_enviar').addEventListener('click', add_bd);
update_html();
document.getElementById('novos_tasks').addEventListener('click', update_status);
