/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.navegacion',{});
sr.reveal('#logotipo',{delay: 200});
sr.reveal('',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});

/*SCROLL ABOUT*/
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});




/* RECETAS POR CATEGORÍA */

$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});



});

function searchRecipes() {
    const searchInput = document.getElementById("search-bar").value.trim().toLowerCase(); // Limpia la entrada
    const recipes = document.querySelectorAll(".product-item"); // Selecciona todas las recetas
    let found = false;

    // Recorre todas las recetas y verifica si coinciden con el título, categoría o dificultad
    recipes.forEach(recipe => {
        const title = recipe.querySelector("h1").innerText.trim().toLowerCase(); // Título
        const category = recipe.getAttribute("category").trim().toLowerCase(); // Categoría
        const difficulty = recipe.getAttribute("difficulty")?.trim().toLowerCase() || ""; // Dificultad (si existe)

        // Comprueba si el texto buscado coincide con alguno de los atributos
        if (title.includes(searchInput) || category.includes(searchInput) || difficulty.includes(searchInput)) {
            recipe.style.display = "block"; // Muestra la receta si coincide
            found = true;
        } else {
            recipe.style.display = "none"; // Oculta la receta si no coincide
        }
    });

    // Manejo del mensaje de "Receta no encontrada"
    const messageContainer = document.getElementById("contenido");
    if (!found) {
        if (!document.getElementById("no-recipes-message")) {
            const message = document.createElement("div");
            message.id = "no-recipes-message";
            message.innerText = "Receta no encontrada";
            message.style.color = "black";
            message.style.textAlign = "center";
            message.style.margin = "20px auto";
            message.style.fontSize = "1.5rem";
            messageContainer.appendChild(message);
        }
    } else {
        const existingMessage = document.getElementById("no-recipes-message");
        if (existingMessage) {
            existingMessage.remove();
        }
    }
}


/*SLIDER*/