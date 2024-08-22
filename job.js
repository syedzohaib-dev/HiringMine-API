const singleItem = (new URLSearchParams(location.search).get('name'))
console.log(singleItem)


fetch(`https://backend-prod.app.hiringmine.com/api/filterations/all`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.filteration[0].filterationName)
        // data.data.forEach(item => {
        //     console.log(item)
        // })


        // console.log(data.data)
    })
    .catch((err) => console.log(err))


