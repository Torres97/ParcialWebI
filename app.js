let tareas = [];

const formularioTarea = document.getElementById('formularioTarea');
const listaTareas = document.getElementById('listaTareas');

formularioTarea.addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const fechaLimite = document.getElementById('fechaLimite').value;

    const tarea = {
        id: tareas.length + 1,
        titulo: titulo,
        descripcion: descripcion,
        fechaLimite: fechaLimite,
        estado: true
    };

    tareas.push(tarea);

    mostrarTareas();

    formularioTarea.reset();
});

function mostrarTareas() {
    listaTareas.innerHTML = '';

    tareas.forEach(tarea => {
        const tareaCard = document.createElement('div');
        tareaCard.classList.add('tarea-card');

        const estadoTarea = tarea.estado ? 'Pendiente' : 'Completada';

        tareaCard.innerHTML = `
            <h3>${tarea.titulo}</h3>
            <p>${tarea.descripcion || 'Sin descripción'}</p>
            <p>Fecha Límite: ${tarea.fechaLimite}</p>
            <p>Estado: ${estadoTarea}</p>
            <button onclick="completarTarea(${tarea.id})">Completar</button>
            <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
        `;

        listaTareas.appendChild(tareaCard);
    });
}

function completarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    tarea.estado = !tarea.estado;
    mostrarTareas();
}

function eliminarTarea(id) {
    // Filtra la tarea con el ID proporcionado y elimínala del array
    tareas = tareas.filter(t => t.id !== id);
    mostrarTareas();
}

