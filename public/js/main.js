function onSubmit(e) {
    e.preventDefault();


    document.querySelector('#output').textContent='';
    document.querySelector('.msg').textContent = '';

    const location = document.querySelector('#location').value
    const budget = document.querySelector('#budget').value

    if (location === '') {
        alert('Please add a destination');
        return;
    }

    // console.log(location , budget);
    generateText(location,budget);
}

async function generateText(location,budget){
    try {
        showSpinner();
        const response = await fetch('/openai/generateData',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                location,budget
            })
        })

        if(!response.ok){
            removeSpinner();
            throw new Error('Data could not be generated')
        }

        const data = await response.json();
        console.log(data.data);
        const tripData = data.data;
        document.querySelector('#output').innerHTML=data.data;
        removeSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}


document.querySelector('#text-form').addEventListener('submit',onSubmit)