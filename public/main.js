// Convert FormData object to JSON string to allow passing it via a fetch request.
FormData.prototype.toJSONString = function() {
    const formDataJSON = {}
    this.forEach((value, key) => { formDataJSON[key] = value })

    return JSON.stringify(formDataJSON)
}

const initializeShortenButtonSubmitFormListener = () => {
    const form = document.querySelector('#shorten-url')

    form.addEventListener('submit', async(event) => {
        event.preventDefault()
        const target = event.target
        const formData = new FormData(target)

        try {
            const res = await fetch(target.action, {
                method: 'POST',
                body: formData.toJSONString(),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const jsonRes = await res.json()  
            
            if (res.ok) {
                document.querySelector('#shortened-url').innerHTML = `<p>Your shortened URL is: <a href="//${jsonRes.shortUrl}">${jsonRes.shortUrl}</a></p>`
                form.reset()
            } else {
                document.querySelector('#shortened-url').innerHTML = `<p>Please enter a valid URL!</p>`
            }
        } catch (e) {
            document.querySelector('#shortened-url').innerHTML = `<p>Server error!</p>`
        }
    })
}

initializeShortenButtonSubmitFormListener()