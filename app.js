let containerCat = document.getElementById('containerCat')

fetch(`https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        // console.log(data.data)
        // console.log(item)
        data.data.forEach(item => {
            console.log(item.category.name)
            let cardSpace = document.createElement('div')
            let carda = document.createElement('a')
            carda.classList.add('anchor')
            carda.href = `./job.html?name=${item.category.name}`
            cardSpace.classList.add('boxCat')
            // cardSpace.href = './job.html'
            carda.innerHTML = `
             <div class="iconCat"><img src="./assets/iconic.svg" alt=""></div>
            <div class="headingCat">
                <p>${item.category.name}</p>
            </div>
            <div class="jobCat">
                <p>${item.category.postCounts} Jobs</p>
            </div>
            `
            cardSpace.appendChild(carda)
            containerCat.appendChild(cardSpace)
        })
    })
    .catch((error) => console.log(error))
