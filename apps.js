

const foodItem = document.getElementById('foodItem');
const itemList = document.querySelectorAll('.itemList');

document.getElementById('searchFood').addEventListener('click', function(){
    const food = document.getElementById('foodName');
    const foodName = food.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodName}`)
    .then(res => res.json())
    .then(data => { console.log(data);
        let html="";
        if(data.meals){
            data.meals.forEach(meals => {
             html +=` 
                <div class="col-md-3 mb-3">
                <div class="card h-100  shadow  p-3 ">
                  <img src="${meals.strMealThumb}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">${meals.strMeal}</h5>
                  </div>
                </div>
              </div>
                `  
            });
        } foodItem.innerHTML=html;  
        
    } )
})