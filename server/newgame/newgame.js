'use strict';

var games = {}; // acá vamos a guardar nuestras personas y tareas
// PISTA: Taks es un objeto donde cada propiedad (nombre de una persona)
// tiene asociada como valor un array de to-dos

let gamesCreated = [];
module.exports = {
  reset: function () {
    games = {}; // esta función ya esta armada :D
    people = [];
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listGames: function () {
    // devuelve un arreglo de personas con tareas
    return gamesCreated;
  },
  
  add: function (name, task) {
    // guarda una tarea para una persona en particular
    if(!('complete' in task)){
      task['complete'] = false;
    }
    let previas = tasks[name];
    if(people.includes(name) && tasks.hasOwnProperty(name) === true){
      tasks[name] = [...previas, task];
    } else {
      people.push(name);
      Object.assign(tasks, name);
      tasks[name] = [task];
    };
  },
  list:function(name){
    return tasks[name];
  },
  complete:function(name,num){ 
    if(tasks[name][num]['complete'] === false){
      tasks[name][num]['complete'] = true;
    }
  },
  remove: function(name,num){
    tasks[name].splice(num, 1);
  }
  // etc.
};
