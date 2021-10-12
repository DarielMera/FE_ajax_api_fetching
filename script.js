/* const colors = ['purple', 'blue', 'green', 'red']

let index = 0;
function changeColor(){
    setInterval(()=>{
index = (index >= colors.length) ? 0 : index + 1;
document.querySelector('body').style.backgroundColor = colors[index]
    }, 2000)
} */



/*     function changeTitle(){
    const article = document.getElementById('lorem');
    const title = article.firstElementChild
    title.innerHTML = 'Sebas is too quiet'
    }
    */

function getCoffees(temp) {

    fetch('https://api.sampleapis.com/coffee/' + temp)

        .then(response => response.json())

        .then(data => {
            // this is where we do stuff with the data
            const coffeeList = document.getElementById('coffees')

            const coffees = data.map(coffee => {
                const ingredients = coffee.ingredients.map(elem => '<li>' + elem + '</li>')
                return '<h2>' + coffee.title + '</h2><p>' + coffee.description + '</p><ol>'
                + ingredients.join(' ') + '</ol>'
            })

            coffeeList.innerHTML = coffees.join(' ')
        })

        .catch(err => console.error(err))
}








/*     function getCoffees(temp){
        fetch('https://api.sampleapis.com/coffee/' + temp)
        .then(response => {response.json()
        .then(data => {  
        // this is where we do stuff with the data
        const coffee = data[0]
        const coffeeList = document.getElementById('coffees')
        coffeeList.innerHTML = 'Title' + coffee.title
        + 'Description: ' + coffee.description
        })
        .catch(err => console.error(err))
            }
         */