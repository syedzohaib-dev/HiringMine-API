let containerCat = document.getElementById('containerCat')

fetch(`https://backend-prod.app.hiringmine.com/api/categories/all`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data.name)
        // console.log(data.data)
        // console.log(item)
        data.data.forEach(item => {
            console.log(item.name)
            let cardSpace = document.createElement('div')
            let carda = document.createElement('a')
            carda.classList.add('anchor')
            cardSpace.classList.add('boxCat')
            carda.innerHTML = `
             <div class="iconCat"><img src="./assets/iconic.svg" alt=""></div>
            <div class="headingCat">
                <p>${item.name}</p>
            </div>
            <div class="jobCat">
                <p>${item.postCounts} Jobs</p>
            </div>
            `
            cardSpace.appendChild(carda)
            containerCat.appendChild(cardSpace)
        })
    })
    .catch((error) => console.log(error))
