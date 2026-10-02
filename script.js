console.log("JS is working");

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progressSteps = document.querySelectorAll(".step");

let currentStep = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.remove("active");
            progressSteps[currentStep].classList.remove("active");
            currentStep++;
            steps[currentStep].classList.add("active");
            progressSteps[currentStep].classList.add("active");
        }
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentStep > 0) {
            steps[currentStep].classList.remove("active");
            progressSteps[currentStep].classList.remove("active");
            currentStep--;
            steps[currentStep].classList.add("active");
            progressSteps[currentStep].classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {

    console.log("JS connected");

    const whatsappField = document.getElementById("whatsappField");
    const whatsappInput = document.getElementById("whatsappNumber");

    document.querySelectorAll('input[name="whatsapp"]').forEach(radio => {

        radio.addEventListener("change", function () {

            console.log("Selected:", this.value);

            if (this.value === "no") {
                whatsappField.style.display = "block";
                whatsappInput.required = true;
            } else {
                whatsappField.style.display = "none";
                whatsappInput.required = false;
                whatsappInput.value = "";
            }

        });

    });

});

const applicantType = document.getElementById("applicantType");
const educationSection = document.getElementById("educationSection");

if (offerLetter) {
    offerLetter.addEventListener("change", function () {
        if (this.value === "student") {
            educationSection.style.display = "block";
        } else {
            educationSection.style.display = "none";
        }
    });
}