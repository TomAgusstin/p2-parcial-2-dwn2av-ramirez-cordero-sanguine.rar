//Ramirez Cordero - Sanguine
let productos = [
    {
        id: 1,
        nombre: 'CAMPERA ACG 4TH HORSEMAN NIKE',
        descripcion: '¿Sales a climas fríos? Lleva el buzo acolchado con capucha Nike ACG "4th Horseman" para una comodidad cálida e impermeable. Nuestro equipo viajo a la roca Smith de Oregón y regresó con el diseño de esta prenda con costuras totalmente selladas. La capucha y la visera mantienen a raya el clima para que mantengas la concentración en el sendero por delante. Este producto está confeccionado con al menos un 75% de poliéster y fibras de nylon reciclados.',
        alt: 'Campera super abrigada de Nike, negra.',
        precio: 59500,
        imagen: 'img/campera_nike.jpg',
        categoría: 1,
    },
    {
        id: 2,
        nombre: 'PANTALON CITY MADE NIKE',
        descripcion: 'Los pantalones tejidos Nike Sportswear actualizan un estilo básico con tela Ripstop y paneles reforzados. Un diseño de pierna cónica y detalles de utilidad brindan un aspecto táctico y limpio.',
        alt: 'Pantalon City Made Nike negro',
        precio: 16500,
        imagen: 'img/pantalon_nike.jpg',
        categoría: 3,
    },
    {
        id: 3,
        nombre: 'BOTAS AIR JORDAN 5 RETRO NIKE',
        descripcion: 'Regresa el popular estilo diseñado por Tinker Hatfield en 1990 con nuevos toques de color de la marca Jordan. La sigilosa parte superior de nobuk negro prepara el escenario para detalles azul carrera en el Jumpman, la lengüeta interior, el bloqueo de las agujetas y, lo que es más importante, alrededor de la entresuela Air expuesta. Su esquema de bloques de color, si bien es sencillo y nítido, también rinde homenaje orgullosamente al linaje del Air Jordan 5. La lengüeta de diseño reflejante, junto con la suela translúcida y la estructura de panel de un cuarto completan un diseño que permanece discreto hasta que se encienden las luces.',
        alt: 'Zapatillas Nike Botas Air Jordan 5, azules y negras.',
        precio: 56500,
        imagen: 'img/zapatilla_nike.jpg',
        categoría: 2,
    },
    {
        id: 4,
        nombre: 'CAMPERA ESSENTIALS ADIDAS',
        descripcion: 'Lo que vestís importa. Está campera adidas está hecha de materiales reciclados como parte del compromiso de adidas para ponerle fin a los desechos plásticos. Lucí su llamativa estética deportiva con orgullo. Estás haciendo la diferencia.',
        alt: 'Campera Essentials Insulated adidas',
        precio: 37000,
        imagen: 'img/campera_adidas.png',
        categoría: 1,
    },
    {
        id: 5,
        nombre: 'PANTALON OWN THE RUN ADIDAS',
        descripcion: 'Un pantalón resistente al viento es una prenda necesaria si querés entrenar los 365 días del año. Usa este pantalón de running adidas solo o sobre unas calzas en los días más fríos. Su diseño fluido con rodillas preformadas favorece el movimiento de los runners. Luce detalles reflectantes para que puedas ser visible en condiciones de baja luz. Guardá tu llave de tu casa en el bolsillo a prueba de sudor y listo, a devorar el asfalto.',
        precio: 18500,
        alt: 'Pantalón Own The Run Astro Wind adidas',
        imagen: 'img/pantalon_adidas.png',
        categoría: 3,
    },
    {
        id: 6,
        nombre: 'ZAPATILLAS FLUIDUP ADIDAS',
        descripcion: 'Sin importar si vas a correr en pista de atletismo o entrenar en el gimnasio, estas zapatillas adidas te ofrecen la comodidad y versatilidad que buscas. Incorporan amortiguación Bounce liviana que absorbe el impacto y le inyectar ligereza a tus pasos. La suela resistente al desgaste brinda una pisada suave y confiable sobre cualquier superficie.',
        precio: 25000,
        alt: 'Zapatillas Fluidup adidas',
        imagen: 'img/zapatilla_adidas.png',
        categoría: 2,
    },
];


class Carrito {

    #id;
    #nombre;
    #precio;
    #cantidad;
    #imagen;

    constructor(id, nombre, precio, cantidad, imagen) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
        this.#imagen = imagen;

    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }


    get getNombre() {
        return this.#nombre;
    }


    set setPrecio(precio) {
        this.#precio = precio;
    }

    get getPrecio() {
        return this.#precio;
    }

    set setImagen(imagen) {
        this.#imagen = imagen;
    }

    get getImagen() {
        return this.#imagen;
    }

    set setId(id) {
        this.#id = id;
    }

    get getId() {
        return this.#id;
    }


    set setCantidad(cantidad) {
        this.#cantidad = cantidad;
    }

    get getCantidad() {
        return this.#cantidad;
    }

    toJSON() {

        return {
            "id": this.#nombre,
            "nombre": this.#nombre,
            "precio": this.#precio,
            "cantidad": this.#cantidad,
            "imagen": this.#imagen
        }
    }

}


let categorias = [
    'Todos | ',
    ' Camperas | ',
    'Zapatillas | ',
    'Pantalon | '
]

let carrito = [];

//titulo de la página h1
document.querySelector('h1').innerText = 'Programación I | Parcial 2 | RAMIREZ CORDERO | SANGUINE | Point Sport';

let precioTotal = 0;
let productosAgregados = 0;


//Funcion para armar la cabecera de la web.
const mostrarCabecera = () => {


    if (carrito.length) {
        for (let i in carrito) {

            precioTotal = precioTotal + parseInt(carrito[i].getPrecio);
            productosAgregados = parseInt(carrito[i].getCantidad);


        }
    }
    // Muestro el detalle de la cabecera de la pagina:
    let p = document.createElement('p');
    p.id = 'productosAgregados';
    let p2 = document.createElement('p');
    p2.id = 'precioTotal';
    let div = document.getElementById('carrito');
    let button = document.createElement('button');
    button.innerText = 'Ver carrito';
    button.id = 'btnVerCarrito';
    button.setAttribute("onclick", "verCarrito()");
    button.dataset.bsToggle = 'modal';
    button.dataset.bsTarget = '#modalCarrito';
    p.innerText = `Productos agregados: ${productosAgregados}`;
    p2.innerText = ` ${precioTotal} es el total `;
    div.append(p, p2, button);
    document.querySelector('#carrito p:nth-of-type(1)').setAttribute("class", "col-lg-4 fs-4");
    document.querySelector('#carrito  p:nth-of-type(2)').setAttribute("class", "col-lg-2 fs-4");
    document.querySelector('#carrito  p:nth-of-type(3)').setAttribute("class", "col-lg-3 fs-4");
    document.querySelector('#carrito').lastElementChild.setAttribute("class", "col-lg-3 btn btn-success fs-4");

};



//Funcion para el armado de carrito.
function verCarrito() {



    let modalCarrito = document.getElementById('modalBody');
    modalCarrito.innerHTML = '';
    let acumPrecio = 0;


    if (carrito.length == 0) { //Si no hay elementos agregados al carritos, arroja que no hay productos agregados.
        let str = document.createElement('p');
        str.innerText = 'No hay productos agregados.';
        modalCarrito.append(str);
    }
    else { //Si hay productos, lo arma.
        modalCarrito.innerHTML = '';
        for (let i in carrito) {
            let div = document.createElement('div');
            div.setAttribute('style', 'border-bottom: 1px solid black');
            div.className = 'row my-2 py-3';

            let col_img = document.createElement('img');
            col_img.className = 'col-sm-12 col-md-3 col-lg-3';
            col_img.src = carrito[i].getImagen;

            let col_titulo = document.createElement('h4');
            col_titulo.className = 'col-sm-12 col-md-3 col-lg-6';
            col_titulo.innerText = carrito[i].getNombre;

            let col_cantidad = document.createElement('select');
            col_cantidad.dataset.id = carrito[i].getId;
            let p_cantidad = document.createElement('p');
            p_cantidad.innerText = 'Cant: ';
            p_cantidad.className = 'col-lg-1 me-3';
            col_cantidad.className = 'col-lg-2';
            col_cantidad.setAttribute('style', 'width:50px; height:40px');
            let op = document.createElement('option');
            let op2 = document.createElement('option');
            let op3 = document.createElement('option');
            let op4 = document.createElement('option');
            op.innerText = '1';
            op2.innerText = '2';
            op3.innerText = '3';
            op4.innerText = '4';

            col_cantidad.append(op, op2, op3, op4);
            col_cantidad.value = carrito[i].getCantidad;

            let col_precio = document.createElement('strong');
            col_precio.className = 'col-sm-12 col-md-3 col-lg-12 text-end text-primary';
            col_precio.innerText = `$${carrito[i].getPrecio}`;

            let borrar = document.createElement('button');
            borrar.dataset.id = carrito[i].getId;
            borrar.innerText = 'Eliminar';
            borrar.setAttribute("class", "btn btn-primary col-lg-3 col-md-4 d-flex m-auto text-center");
            borrar.addEventListener("click", (e) => { //Eliminado del producto del carrito.
                
                e.target.parentNode.setAttribute("class", "d-none");
                
                for(let i in carrito)
                {                       
                    if(e.target.dataset.id == carrito[i].getId)
                    {   
                        if(carrito.length == 1 || i == 0)
                        {   
                            carrito.shift(); //Para eliminar la unica posicion que es 0
                            
                        }
                        else
                        {  
                            carrito.splice(i, i);  //Borro la posicion del array
                        }
                        
                        if(carrito.length == 0)
                        {
                            
                            document.getElementById('vaciarCarrito').setAttribute('style','display:none');
                        }
                        
                    }
                    
                }
                
                actualizarCabecera();
                if(precioTotal > 0)
                {
                    document.getElementById('idPrecioTotal').innerText = `Total: $${precioTotal}`;
                } 
                else
                {
                    document.getElementById('idPrecioTotal').innerText = `Se han eliminado todos los productos`;
                }

            });

            col_cantidad.addEventListener('change', (e) => { //Para cuando cambie la cantidad del producto en el carrito.

                for(let i in carrito)
                {
                    if(e.target.dataset.id == carrito[i].getId)
                    {
                        carrito[i].setCantidad = e.target.value;
                    }
                }
                actualizarCabecera();
                document.getElementById('idPrecioTotal').innerText = `Total: $${precioTotal}`;
            });
            
            if(carrito[i].getCantidad > 1)
            {
                acumPrecio = acumPrecio +  parseInt(carrito[i].getPrecio) * carrito[i].getCantidad; 
            }
            else
            {
                acumPrecio = acumPrecio +  parseInt(carrito[i].getPrecio); 
            }
           
            
            
            div.append(col_img, col_titulo, p_cantidad, col_cantidad, col_precio, borrar);
            
       
            
            modalCarrito.append(div);
        }
        let divPrecioTotal = document.createElement('div');
        divPrecioTotal.className = 'row';

        let pTotal = document.createElement('strong');
        pTotal.id = 'idPrecioTotal';
        pTotal.innerText = `Total: $${acumPrecio}`;
        pTotal.className = 'col-lg-12 text-end text-primary';

        let vaciarCarrito = document.createElement('button');
        vaciarCarrito.id = 'vaciarCarrito';
        vaciarCarrito.innerText = 'Vaciar carrito';
        vaciarCarrito.className = 'btn btn-primary';
        
        vaciarCarrito.addEventListener('click', (e) => {
            carrito = [];
            actualizarCabecera();
            modalCarrito.innerText = "";
            let vaciado = document.createElement('strong');
            vaciado.innerText = `Se ha vaciado el carrito.`;
            modalCarrito.append(vaciado); 
        });

        divPrecioTotal.append(pTotal);
        modalCarrito.append(divPrecioTotal, vaciarCarrito);

    }
}


//se trae el subtitulo h2
document.querySelector('h2').innerText = 'Productos';
document.querySelector('h2').setAttribute('class', 'my-4')

//Se busca el div de productos.
let divProductos = document.querySelector('#productosID');
divProductos.innerText = '';


//Se crea el armado de los productos.
const armarProductos = (catalogo) => {
    for (let producto of catalogo) {

        let div = document.createElement('div');
        div.className = 'col-lg-4 col-md-4 col-xs-12 my-4';


        divProductos.append(div);

        let img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.alt;
        img.style.border = "2px solid #0d6efd";
        img.style.borderRadius = "50%";
        div.append(img);


        let divDescrip = document.createElement('div');
        divDescrip.className = 'bg-primary m-auto row';
        div.append(divDescrip);


        let h3 = document.createElement('h3');
        h3.innerText = producto.nombre;
        h3.style.color = 'white';
        h3.className = 'col-lg-12 col-md-12 col-xs-12';
        divDescrip.append(h3);
        let pPrecio = document.createElement('p');
        let pPrecio2 = document.createElement('p');
        pPrecio.innerText = `Precio: $ ${producto.precio} `;
        pPrecio2.innerText = `Categoria: ${producto.categoría} `;
        pPrecio.style.color = 'white';
        pPrecio.className = 'col-lg-12 col-md-12 col-xs-12';
        divDescrip.append(pPrecio, pPrecio2);

        let boton = document.createElement('button');
        boton.innerText = 'Agregar';
        boton.className = 'addProd';
        boton.id = 'agregar';
        boton.dataset.imagen = producto.imagen;
        boton.dataset.nombre = producto.nombre;
        boton.dataset.precio = producto.precio;
        boton.dataset.id = producto.id;
        boton.className = 'btn btn-secondary col-lg-6 my-1';
        divDescrip.append(boton);

        let verMas = document.createElement('button');
        verMas.innerText = ' Ver Más ';
        verMas.className = 'btn btn-danger col-lg-6 my-1';
        verMas.dataset.imagen = producto.imagen;
        verMas.dataset.nombre = producto.nombre;
        verMas.dataset.id = producto.id;
        verMas.dataset.descripcion = producto.descripcion;
        verMas.dataset.precio = producto.precio;
        verMas.dataset.cantidad = 1;
        verMas.dataset.bsToggle = 'modal';
        verMas.dataset.bsTarget = '#modalProducto';
        verMas.id = 'verMas';
        divDescrip.append(verMas);
            
    

    }
}

//Se llama a la funcion que arma los productos
armarProductos(productos);


//Se crea el armado de filtros
const armarFiltros = () => {
    categorias.forEach((valor, indice) => {
        let a = document.createElement('a');
        a.href = '#';
        a.dataset.cat = indice;
        a.innerText = valor;

        a.addEventListener('click', e => {
            e.preventDefault();
            let categoria = e.target.dataset.cat;
            if (categoria != 0) {
                let catalogoFiltrado = productos.filter(producto => producto.categoría == categoria);
                document.querySelector('#productosID').innerText = '';
                armarProductos(catalogoFiltrado);

                let addBtns = document.querySelectorAll('#agregar');
                for (let btn of addBtns) {
                    btn.addEventListener('click', e => {
                        agregarAlCarrito(e);
                    });
                }

            } else {
                document.querySelector('#productosID').innerText = '';
                armarProductos(productos);

                let addBtns = document.querySelectorAll('#agregar');
                for (let btn of addBtns) {
                    btn.addEventListener('click', e => {
                        agregarAlCarrito(e);
                    });
                }
            }
        });

        document.querySelector('#filtros').append(a)
    });
}

//Se llama a la funcion del filtro.
armarFiltros();

//Se crea la ventana modal de los productos
let divModal = document.createElement('div');
divModal.id = 'modalProducto';
divModal.tabIndex = '-1';
divModal.ariaHidden = 'true';
divModal.className = 'modal fade';
divModal.setAttribute('aria-labelledby', 'tituloHeader');


let divModalDialog = document.createElement('div');
divModalDialog.className = 'modal-dialog';

let divModalContent = document.createElement('div');
divModalContent.className = 'modal-content';

let divModalHeader = document.createElement('div');
divModalHeader.className = 'modal-header';

let tituloHeader = document.createElement('h3');
tituloHeader.id = 'tituloHeader';
divModalHeader.append(tituloHeader);

let btnClose = document.createElement('button');
btnClose.type = 'button';
btnClose.className = 'btn-close';
btnClose.dataset.bsDismiss = 'modal';
btnClose.ariaLabel = 'close';



let divModalBody = document.createElement('div');
divModalBody.className = 'modal-body';
let descripcion = document.createElement('p');
descripcion.className = 'lead fs-3 my-4';
descripcion.id = 'descripcionP';
let precio = document.createElement('strong');
let img = document.createElement('img');

divModalBody.append(img, descripcion, precio);

let divModalFooter = document.createElement('div');
divModalFooter.className = 'modal-footer';

let btnCloseFooter = document.createElement('button');
let btnAddFooter = document.createElement('button');

divModalFooter.append(btnCloseFooter, btnAddFooter);
divModalContent.append(divModalHeader, divModalBody, divModalFooter);
divModalDialog.append(divModalContent);
divModal.append(divModalDialog);
document.body.append(divModal);

//Se busca el boton de ver mas
let botonVer = document.querySelectorAll('#verMas');

//se recorre:
for (let boton of botonVer) {

    boton.addEventListener('click', e => {

        tituloHeader.innerText = e.target.dataset.nombre;
 
        img.src = e.target.dataset.imagen;
        img.style.borderRadius = '50%';
        img.style.border = '2px solid #0d6efd';

        precio.innerText = '$' + e.target.dataset.precio;
        precio.style.textAlign = 'center';

        descripcion.innerText = e.target.dataset.descripcion;

        btnAddFooter.innerText = 'Agregar al carrito';
        btnAddFooter.className = 'btn btn-primary';
        btnAddFooter.dataset.id = e.target.dataset.id;
        btnAddFooter.dataset.precio = e.target.dataset.precio;
        btnAddFooter.dataset.imagen = e.target.dataset.imagen;
        btnAddFooter.dataset.cantidad = e.target.dataset.cantidad;
        btnAddFooter.dataset.nombre = e.target.dataset.nombre;

        btnAddFooter.addEventListener('click', (e) => {
            agregarAlCarrito(e);

        })

        btnCloseFooter.innerText = 'Cerrar';
        btnCloseFooter.className = 'btn btn-secondary';
        btnCloseFooter.dataset.bsDismiss = 'modal';
        btnCloseFooter.ariaLabel = 'close';
    });


}


// se buscan el boton "agregar
let addBtns = document.querySelectorAll('#agregar');

//Se recorre para darle el click.
for (let btn of addBtns) {
    btn.addEventListener('click', e => {
        agregarAlCarrito(e);
    });
}

//Funcion que agrega el producto al carrito.
function agregarAlCarrito(e) {

    let auxProducto = true;

    if(carrito.length > 0){
        for(let i in carrito)
        {
            if(e.target.dataset.id == carrito[i].getId)
            {   
                if(carrito[i].getCantidad == 4)
                {
                    alert('El maximo permitido de este producto son 4 unidades por persona.');
                    return;
                }
                else
                {
                    carrito[i].setCantidad = carrito[i].getCantidad + 1;
                actualizarCabecera();
                auxProducto = false;
                }
                
            }
        }
        if(auxProducto)
        {
            carrito.push(new Carrito(e.target.dataset.id, e.target.dataset.nombre, e.target.dataset.precio, 1, e.target.dataset.imagen));
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarCabecera();
        }
    }
    else
    {
        carrito.push(new Carrito(e.target.dataset.id, e.target.dataset.nombre, e.target.dataset.precio, 1, e.target.dataset.imagen));
                localStorage.setItem('carrito', JSON.stringify(carrito));
                actualizarCabecera();
    }

}


//Se actualiza la cabecera, para cuando se agregue un producto.
function actualizarCabecera() {
 productosAgregados = 0;
        precioTotal = 0;
    if (carrito.length) {
       

        for (let i in carrito) {

            if(parseInt(carrito[i].getCantidad) > 1)
            {
                precioTotal = precioTotal + parseInt(carrito[i].getPrecio) * parseInt(carrito[i].getCantidad);
                productosAgregados = productosAgregados + parseInt(carrito[i].getCantidad);
            }
            else
            {
                precioTotal = precioTotal + parseInt(carrito[i].getPrecio);
                productosAgregados = productosAgregados + parseInt(carrito[i].getCantidad);
            }

            
        }
    }

    let ppProductos = document.getElementById('productosAgregados');
    let pPrecio = document.getElementById('precioTotal');

    ppProductos.innerText = `Productos agregados: ${productosAgregados}`;
    pPrecio.innerText = `Total hasta ahora: $${precioTotal}`;
}

//Se vuelve a ejecutar para mostrar el carrito
mostrarCabecera();

