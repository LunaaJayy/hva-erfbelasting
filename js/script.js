// MARK: REQ MAKEN

const jaKnoppen = document.querySelectorAll('.js-ja')
const neeKnoppen = document.querySelectorAll('.js-nee')

//mede dankzij chatGPT - https://chatgpt.com/share/69a6d76a-2e24-8012-8be7-1e7a783916b5
jaKnoppen.forEach((knop) => {
    knop.addEventListener('change', function(){
        
        const parentFieldset = this.closest('fieldset')
        const volgendReqVraag = parentFieldset.nextElementSibling

        const inputs = volgendReqVraag.querySelectorAll('input')
        if(this.checked) {
            inputs.forEach(input => {
                if(input.hasAttribute('data-required')) {
                    input.setAttribute('required', '')
                }
            })
        }
    })
})

neeKnoppen.forEach((knop) => {
    knop.addEventListener('change', function() {
        const parentFieldset = this.closest('fieldset')
        
        const parentVParent = parentFieldset.parentElement
        const dichteVragen = parentVParent.querySelectorAll('.dichtevraag')        
        
        if(this.checked) {
            dichteVragen.forEach((vraag) => {
                const inputs = vraag.querySelectorAll('input')
                
                inputs.forEach((input) => {
                    input.removeAttribute('required')
                })
            })
        }
    })
})

//required adres nl / bl

const radioNL = document.querySelector('.nl')
const radioBL = document.querySelector('.bl')

radioNL.addEventListener('change', function() {
    const inputsNL = document.querySelectorAll('.adresnl input')
    const inputsBL = document.querySelectorAll('.adresbl input')

    if(this.checked) {
        console.log('check')
        inputsNL.forEach(input => {
            if(input.hasAttribute('data-required')) {
                input.setAttribute('required', '')
                }
            })
        inputsBL.forEach(input => {
            if(input.hasAttribute('data-required')) {
                    input.removeAttribute('required')
                }
            })
        }
})

radioBL.addEventListener('change', function() {
    const inputsNL = document.querySelectorAll('.adresnl input')
    const inputsBL = document.querySelectorAll('.adresbl input')

    if(this.checked) {
        console.log('check')
        inputsBL.forEach(input => {
            if(input.hasAttribute('data-required')) {
                input.setAttribute('required', '')
                }
            })
        inputsNL.forEach(input => {
            if(input.hasAttribute('data-required')) {
                    input.removeAttribute('required')
                }
            })
        }
})