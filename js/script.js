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
		document.startViewTransition(() => {
			volgendReqVraag.scrollIntoView({ behavior: "smooth", block: "center" });
		});
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
		document.startViewTransition(() => {
			parentFieldset.scrollIntoView({ behavior: "smooth", block: "center" });
		});
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
		document.startViewTransition(() => {
			parentFieldset.scrollIntoView({ behavior: "smooth", block: "center" });
		});
	});
});

//required een van drie
const eenVanDrieRadios = document.querySelectorAll(
	".stap2 > fieldset:first-of-type .radio input",
);

eenVanDrieRadios.forEach((radio) => {
	radio.addEventListener("change", function () {
		const parentLabel = this.closest("label");
		const dichteVraag = parentLabel.nextElementSibling;
		const alleInputs = document.querySelectorAll(
			".stap2 > fieldset:first-of-type > input",
		);

		if (this.checked) {
			alleInputs.forEach((input) => {
				input.removeAttribute("required");
				input.checked = false;
			});
			if (dichteVraag.hasAttribute("data-required")) {
				dichteVraag.setAttribute("required", "");
			}
		}
		document.startViewTransition(() => {
			dichteVraag.scrollIntoView({ behavior: "smooth", block: "center" });
		});
	});
});

//required adres nl / bl

const radioNL = document.querySelector(".nl");
const radioBL = document.querySelector(".bl");

radioNL.addEventListener("change", function () {
	const inputsNL = document.querySelectorAll(".adresnl input");
	const inputsBL = document.querySelectorAll(".adresbl input");
	const sectieNL = document.querySelector(".adresnl");

	if (this.checked) {
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
	document.startViewTransition(() => {
		sectieNL.scrollIntoView({ behavior: "smooth", block: "center" });
	});
});

radioBL.addEventListener("change", function () {
	const inputsNL = document.querySelectorAll(".adresnl input");
	const inputsBL = document.querySelectorAll(".adresbl input");
	const sectieBL = document.querySelector(".adresbl");

	if (this.checked) {
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
	document.startViewTransition(() => {
		sectieBL.scrollIntoView({ behavior: "smooth", block: "center" });
	});
});

// MARK: VOLGEND VR
const form = document.querySelector("form.stap1");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const stapEen = document.querySelectorAll(".stap1");
	const stapTwee = document.querySelectorAll(".stap2");

	stapEen.forEach((element) => {
		element.classList.add("gesl-form");
	});
	stapTwee.forEach((element) => {
		element.classList.remove("gesl-form");
	});
});

// MARK: VORIGE VR
const terugKnop = document.querySelector("section.stap2 button");

terugKnop.addEventListener("click", function () {
	const stapEen = document.querySelectorAll(".stap1");
	const stapTwee = document.querySelectorAll(".stap2");

	stapEen.forEach((element) => {
		element.classList.remove("gesl-form");
	});
	stapTwee.forEach((element) => {
		element.classList.add("gesl-form");
	});
});

// MARK: MAX DATUM
// met dank aan: https://stackoverflow.com/questions/32378590/set-date-input-fields-max-date-to-today

const datumPriks = document.querySelectorAll('input[type="date"]');
var vandaag = new Date();
var dag = vandaag.getDate();
var maand = vandaag.getMonth() + 1; // januari is 0
var jaar = vandaag.getFullYear();

if (dag < 10) {
	dag = "0" + dag;
}

if (maand) {
	maand = "0" + maand;
}

vandaag = jaar + "-" + maand + "-" + dag;

datumPriks.forEach((prik) => {
	prik.setAttribute("max", vandaag);
});
