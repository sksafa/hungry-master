
const foodItem = document.getElementById('foodItem');
const itemList = document.querySelectorAll('.itemList');

document.getElementById('searchFood').addEventListener('click', function(){
    const food = document.getElementById('foodName');
    const foodName = food.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
    .then(res => res.json())
    .then(data => {
        let foodMeal="";
        if(data.meals){
            data.meals.forEach(meals => {
              foodMeal +=` 
                <div class="col-md-3 mb-3" onclick="food(${meals.idMeal});">
                <div class="card h-100  shadow  p-3" >
                  <img src="${meals.strMealThumb}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">${meals.strMeal}</h5>
                  </div>
                </div>
              </div>
                `  
            });
        }else{} 
        foodItem.innerHTML=foodMeal;  
    } )
    .catch(error => {
        let foodMeal =`
        <div class="col-md-3 mb-3">
        <div class="card h-100  shadow  p-3 ">
          <h1> result not found</h1>
        </div>
      </div>
        `
        foodItem.innerHTML=foodMeal; 

    })


})

function food(idMeal){
  const mealId = idMeal;
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
  .then(res=> res.json())
  .then(data =>{

     console.log(data);
     const foodObject = data.meals[0];
     console.log(foodObject);
     const mealItem1 =  foodObject.strIngredient1;
     const mealItem2 =  foodObject.strIngredient2;
     const mealItem3 =  foodObject.strIngredient3;
     const mealItem4 =  foodObject.strIngredient4;
     const mealItem5 =  foodObject.strIngredient5;
     const mealItem6 =  foodObject.strIngredient6;
     console.log(mealItem1);
     console.log(mealItem2);
     console.log(mealItem3);
     console.log(mealItem4);
     console.log(mealItem5);
     console.log(mealItem6);
  })
}