let dataTable;
let dataTableIniciar=false;


/*  creo la variable donde le asigno las diferentes configuraciones que les puedo agregar   */
const dataTableOpctions={
    pageLength:3,
    destroy:true,
    lengthMenu:[5,10,15,20],
    columnDefs:[
        {className:"centered",target:[0,1,2,3,4,5,6,7]},
        {orderable:false,target:[6,7]},
        {width:"35%",target:[2,4]}
        /*esto es para que el buscador solo busque en alguna columna en particular
        {searcheble:false,target:[0,1,2,3,4,5,6,7]}*/
    ],
}

/* inicio la variable para arrancar a obtener los datos y configurar para que cuando 
reemplazemos los datos no me tire algun error
*/
const inciarDataTable= async ()=>{
    if (dataTableIniciar){
        dataTable.destroy();
    }
    await listUsers();
    /*utilizo jquery para relacionar la tabla con la libreriad data table 
    el parametro que le paso a dataTable es la cantidad de paginas que le asigno*/
    dataTable=$("#datatable_users").dataTable(dataTableOpctions); 
    dataTableIniciar=true;
};

/* hago una peticion fetch para obtener el json con los datos que quiero mostrar en la tabla */
const listUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
/* le paso la data del json que quiero que se muestre en las filas y columnas de mi tabla */
        let content = ``;
        users.forEach((user, index) => {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.address.street}</td>
                    <td>${user.company.name}</td>
                    <td><i class="fa-solid fa-check"style="color:green;"></i></td>
                    <td>
                        <buttom class="btn btn-sm  btn-md  btn-lg  btn-xl  btn-xxl btn-primary"><i class="fa-solid fa-pencil"></i></buttom>
                        <buttom class="btn btn-sm btn-md  btn-lg  btn-xl  btn-xxl btn-danger"><i class="fa-solid fa-trash-can"></i></buttom>
                    </td>
                </tr>`;
        });
        tableBody_users.innerHTML = content;
        /*si hay algun error lo muestro en un alerta*/
    } catch (ex) {
        alert(ex);
    }
};

/*inicio la funcion*/
window.addEventListener("load", async () => {
    await inciarDataTable();
    $('#myTable').DataTable( {
    responsive: true
    }
);
});
