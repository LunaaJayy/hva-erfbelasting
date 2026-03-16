// MARK: REQ MAKEN

const jaKnoppen = document.querySelectorAll(".js-ja");
const neeKnoppen = document.querySelectorAll(".js-nee");
const eersteNee = document.querySelectorAll(".eerste-nee");

//met inspiratie van chatGPT - https://chatgpt.com/share/69a6d76a-2e24-8012-8be7-1e7a783916b5
jaKnoppen.forEach((knop) => {
	knop.addEventListener("change", function () {
		const parentFieldset = this.closest("fieldset");
		const volgendReqVraag = parentFieldset.nextElementSibling;

		const inputs = volgendReqVraag.querySelectorAll("input");
		if (this.checked) {
			inputs.forEach((input) => {
				if (input.hasAttribute("data-required")) {
					input.setAttribute("required", "");
				}
			});
		}
	});
});

eersteNee.forEach((knop) => {
	knop.addEventListener("change", function () {
		const parentFieldset = this.closest("fieldset");

		const parentVParent = parentFieldset.parentElement;
		const dichteVragen = parentVParent.querySelectorAll(".dichtevraag");

		if (this.checked) {
			dichteVragen.forEach((vraag) => {
				const inputs = vraag.querySelectorAll("input");

				inputs.forEach((input) => {
					input.removeAttribute("required");
					input.checked = false;
				});
			});
		}
	});
});

neeKnoppen.forEach((knop) => {
	knop.addEventListener("change", function () {
		const parentFieldset = this.closest("fieldset");

		const dichteVraag = parentFieldset.nextElementSibling;

		if (this.checked) {
			const inputs = dichteVraag.querySelectorAll("input");
			inputs.forEach((input) => {
				input.removeAttribute("required");
				input.checked = false;
			});
		}
	});
});

//required een van drie
const eenVanDrieRadios = document.querySelectorAll(".form2 > fieldset:first-of-type .radio input");

eenVanDrieRadios.forEach((radio) => {
	radio.addEventListener("change", function () {
		const parentLabel = this.closest("label");
		const dichteVraag = parentLabel.nextElementSibling;
        const alleInputs = document.querySelectorAll('.form2 > fieldset:first-of-type > input')

		if (this.checked) {
            alleInputs.forEach((input) => {
                input.removeAttribute("required");
				input.checked = false;
            })
			if (dichteVraag.hasAttribute("data-required")) {
				dichteVraag.setAttribute("required", "");
			}
		}
	});
});

//required adres nl / bl

const radioNL = document.querySelector(".nl");
const radioBL = document.querySelector(".bl");

radioNL.addEventListener("change", function () {
	const inputsNL = document.querySelectorAll(".adresnl input");
	const inputsBL = document.querySelectorAll(".adresbl input");

	if (this.checked) {
		console.log("check");
		inputsNL.forEach((input) => {
			if (input.hasAttribute("data-required")) {
				input.setAttribute("required", "");
			}
		});
		inputsBL.forEach((input) => {
			if (input.hasAttribute("data-required")) {
				input.removeAttribute("required");
			}
		});
	}
});

radioBL.addEventListener("change", function () {
	const inputsNL = document.querySelectorAll(".adresnl input");
	const inputsBL = document.querySelectorAll(".adresbl input");

	if (this.checked) {
		console.log("check");
		inputsBL.forEach((input) => {
			if (input.hasAttribute("data-required")) {
				input.setAttribute("required", "");
			}
		});
		inputsNL.forEach((input) => {
			if (input.hasAttribute("data-required")) {
				input.removeAttribute("required");
			}
		});
	}
});

// MARK: VOLGEND VR
const form = document.querySelector("form.form1");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const formEen = document.querySelectorAll(".form1");
	const formTwee = document.querySelectorAll(".form2");
    const algInfo = document.querySelector('section')

	formEen.forEach((element) => {
		element.classList.add("gesl-form");
        algInfo.classList.add("gesl-form")
	});
	formTwee.forEach((element) => {
		element.classList.remove("gesl-form");
	});
});


// MARK: MAX DATUM 
// met dank aan: https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today

const datumPriks = document.querySelectorAll('input[type="date"]')
var vandaag = new Date();
var dag = vandaag.getDate();
var maand = vandaag.getMonth() + 1; // januari is 0
var jaar = vandaag.getFullYear();

if (dag < 10) {
   dag = '0' + dag;
}

if (maand) {
   maand = '0' + maand;
} 
    
vandaag = jaar + '-' + maand + '-' + dag;

datumPriks.forEach((prik) => {
    prik.setAttribute("max", vandaag)
})