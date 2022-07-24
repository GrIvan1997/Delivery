const cardsMenu = document.querySelector('.cards-menu')
const chengeTitle = (restaurant) => {
  const restaurantTitle = document.querySelector('.restaurant-title')
  restaurantTitle.textContent = restaurant.name
}
const renderItems = (data) => {
   data.forEach(({descriprion,id,image,name,price}) => {
     const card = document.createElement('div')
     card.classList.add('card')

     card.innerHTML = `
						<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">${descriprion}
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
						</div>
					
     `  
     cardsMenu.append(card)
   });
}
if(localStorage.getItem('restaurant') ){
    const restaurant = JSON.parse(localStorage.getItem('restaurant'))

    chengeTitle(restaurant)
    fetch(`./db/${restaurant.products}`)
.then((response) => response.json()
.then((data) => { renderItems(data)}))
}
else{
    window.location.href ='/'
}
