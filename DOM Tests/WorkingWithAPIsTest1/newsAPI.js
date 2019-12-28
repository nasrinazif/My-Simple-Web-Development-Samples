const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'http://127.0.0.1:4043/', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    console.log(data.articles)

    if (request.status >= 200 && request.status < 400) {

        data.articles.forEach(function(newsItem) {

            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create an h1 and set the text content to the film's title
            const h2 = document.createElement('h2')
            h2.textContent = newsItem.title

            // Create a p and set the text content to the film's description
            const p = document.createElement('p')
                //newsItem.description = newsItem.description.substring(0, 300) // Limit to 300 chars
            p.textContent = newsItem.description // End with an ellipses

            card.appendChild(h2)
            card.appendChild(p)

            container.appendChild(card)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()