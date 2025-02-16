window.onload = function() {
  Swal.fire({
    title: 'Información importante',
    text: 'La información presentada en esta página relacionada con nombres de agentes, entidades y cualquier otro dato sensible, fue modificada para no comprometer los datos oficiales',
    icon: 'info',
    confirmButtonText: 'Ok'
});; };

const updateButom = document.querySelector('.update-butom');
const zoneUpdate = document.querySelector('.zone__update');
const weeklyPartButom = document.querySelector('.weekly-part-butom');
const weeklyPart = document.querySelector('.zone__weekly-part');

updateButom.onclick = function(){
    zoneUpdate.classList.toggle('active');
}

weeklyPartButom.onclick = function(){
    weeklyPart.classList.toggle('active');
}

window.addEventListener("scroll", function(){
    var navContainer = document.querySelector(".nav-container");
    navContainer.classList.toggle("sticky", window.scrollY > 100);
})

const menu = document.querySelector('.nav-container__menu');
const menuList = document.querySelector('.nav-container__list');

menu.onclick = function(){
    menuList.classList.toggle('visible');
}

//Alertas

document.getElementById('cp__planes_de_trabajo').onclick = () => {
    Swal.fire({
      title: 'Planes de Trabajo',
      text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a una carpeta compartida donde están todos los planes de trabajo de las entidades con convenios vigentes.',
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  };

document.getElementById('cp__fichas_cauce').onclick = () => {
    Swal.fire({
      title: 'Fichas de Cauce',
      text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a una carpeta compartida donde están Fichas de cauce con información detallada de los tramos bajo convenio.',
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  };

document.getElementById('cp__informes_municipios').onclick = () => {
    Swal.fire({
      title: 'Informes por municipio',
      text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a una carpeta compartida donde están los informes de cada municipio con sus respectivas obras.',
      icon: 'info',
      confirmButtonText: 'Ok'
    });
  };

document.getElementById('cp__mapeo_obras').onclick = () => {
      Swal.fire({
        title: 'Mapeo de Obras',
        text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a una carpeta compartida donde están los archivos .kmz de las obras vigentes.',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    };

const anclasForm = document.querySelectorAll('.alert_form');
anclasForm.forEach(ancla => { ancla.addEventListener('click', function(event) { event.preventDefault();
  Swal.fire({
    title: 'Formulario de registro de datos',
    text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a la formulario de Google para la carga de datos de la opción seleccionada.',
    icon: 'info',
    confirmButtonText: 'Ok'
}); }); });

const anclasRD = document.querySelectorAll('.alert_RD');
anclasRD.forEach(ancla => { ancla.addEventListener('click', function(event) { event.preventDefault();
  Swal.fire({
    title: 'Formulario de registro de trabajo diario',
    text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a la formulario de Google con los convenios asignados al agente seleccionado para realizar las cargas diarias del trabajo realizado en territorio.',
    icon: 'info',
    confirmButtonText: 'Ok'
}); }); });

const anclasGS = document.querySelectorAll('.alert_GS');
anclasGS.forEach(ancla => { ancla.addEventListener('click', function(event) { event.preventDefault();
  Swal.fire({
    title: 'Planilla de registro',
    text: 'Este proyecto es una copia modificada del proyecto original utilizado en el ámbito laboral. Para resguardar la información utilizada, se anularon algunas funciones. En este caso esta acción te redirigiría a la planilla de GoogleSheet asociada al formulario seleccionado.',
    icon: 'info',
    confirmButtonText: 'Ok'
}); }); });
