const form = document.querySelector('#formulario');
const lista = document.querySelector('#listaActividades');
let arreglo = [];
let div = document.createElement('div');


const crearActividad = (actividad) => {
    arreglo.push(actividad);
    return arreglo;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let activ = document.querySelector('#actividad').value;
    if(activ !=""){
        crearActividad(activ);
        PintarDom(activ);
        form.reset();
    }
    console.log(activ);
});

const Eliminar=()=>{

}

const PintarDom = (valor) =>{
    div.innerHTML +=`
    <div class="interior">
        <b>${valor}</b>
        <span>
            <i class="fas fa-pencil-alt"></i>
            <i class="fas fa-times"></i>
        </span>
    </div>
    <br>`;
    lista.appendChild(div);
}