function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error");
    messageElement.classList.add(`form__message--${type}`)
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function displayProfile(){
    var x = document.getElementById("createAccount");
    var text = "";
    var i;
    //for (i = 0; i < x.length ;i++) {
    //  text += x.elements[i].value + "<br>";
    //}

    text += "First Name :- " + x.elements[0].value + "<br>";
    text += "Middle Name :- " + x.elements[1].value + "<br>";
    text += "Last Name :- " + x.elements[2].value + "<br>";
    text += "Phone No. :- " + x.elements[3].value + "<br>";
    text += "Date of Birth :- " + x.elements[4].value + "<br>";
    text += "Email Address :- " + x.elements[5].value + "<br><br><br>";

    var y = document.getElementById("educationInfo");
    var i;
    if(y.elements[0].value != ""){
        text += "Educational Information:-<br>";
        for (i = 0; i < y.length ;i++) {
            text += y.elements[i].value + "<br>";
        }
    }

    var z = document.getElementById("professionalInfo");
    var i;
    if(z.elements[0].value != ""){
        text += "Professional Information:-<br>";
        for (i = 0; i < z.length ;i++) {
            text += z.elements[i].value + "<br>";
        }
    }

    var p = document.getElementById("aboutYourself");
    var i;
    if(p.elements[0].value != ""){
        text += "About Me:-<br>";
        for (i = 0; i < p.length ;i++) {
            text += p.elements[i].value + "<br>";
        }
    }

    var y = document.getElementById("previewSite");
    document.getElementById("demo").innerHTML = text;
}

document.addEventListener("DOMContentLoaded" , () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const profilePhotoForm = document.querySelector("#profilePhoto");
    const educationInfoForm = document.querySelector("#educationInfo");
    const professionalInfoForm = document.querySelector("#professionalInfo");
    const aboutYourselfForm = document.querySelector("#aboutYourself");
    const previewSite = document.querySelector("#previewSite");

    const inpFile = document.getElementById("inpFile");
    const previewContainer = document.getElementById("imagePreview");
    const previewImage = previewContainer.querySelector(".image-preview__image");
    const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkBackCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        profilePhotoForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkProfilePhoto").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        profilePhotoForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkBackProfilePhoto").addEventListener("click", e => {
        e.preventDefault();
        educationInfoForm.classList.add("form--hidden");
        profilePhotoForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#linkEducationInfo").addEventListener("click", e => {
        e.preventDefault();
        educationInfoForm.classList.remove("form--hidden");
        profilePhotoForm.classList.add("form--hidden");
    });

    document.querySelector("#linkBackEducationInfo").addEventListener("click", e => {
        e.preventDefault();
        educationInfoForm.classList.remove("form--hidden");
        professionalInfoForm.classList.add("form--hidden");
    });

    document.querySelector("#linkProfessionalInfo").addEventListener("click", e => {
        e.preventDefault();
        professionalInfoForm.classList.remove("form--hidden");
        educationInfoForm.classList.add("form--hidden");
    });

    document.querySelector("#linkBackProfessionalInfo").addEventListener("click", e => {
        e.preventDefault();
        professionalInfoForm.classList.remove("form--hidden");
        aboutYourselfForm.classList.add("form--hidden");
    });

    document.querySelector("#linkAboutYourself").addEventListener("click", e => {
        e.preventDefault();
        professionalInfoForm.classList.add("form--hidden");
        aboutYourselfForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkBackAboutYourself").addEventListener("click", e => {
        e.preventDefault();
        previewSite.classList.add("form--hidden");
        aboutYourselfForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkPreviewSite").addEventListener("click", e => {
        e.preventDefault();
        aboutYourselfForm.classList.add("form--hidden");
        previewSite.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform login operation

        setFormMessage(loginForm, "error", "invalid username/password")
    });

    educationInfoForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(educationInfoForm, "success", "Record added successfully");
    });

    educationInfoForm.addEventListener("input", e => {
        e.preventDefault();
        setFormMessage(educationInfoForm, "success", "");
    });

    professionalInfoForm.addEventListener("submit", e=> {
        e.preventDefault();
        setFormMessage(professionalInfoForm,"success","Record added successfully")
    });

    professionalInfoForm.addEventListener("input", e => {
        e.preventDefault();
        setFormMessage(professionalInfoForm, "success", "");
    });

    previewSite.addEventListener("submit", e=> {        
        e.preventDefault()
        var x = getElementById("createAccount");    
        var text = "to check start";
        var i;
        for (i = 0; i < x.length ;i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
    });

    inpFile.addEventListener("change", function() {
        const file = this.files[0];

        //console.log.file(file);
        if(file) {
            const reader = new FileReader();

            previewDefaultText.style.display = "none";
            previewImage.style.display = "block";

            reader.addEventListener("load", function () {
                //console.log(this);
                previewImage.setAttribute("src", this.result);
            });

            reader.readAsDataURL(file);
        } else {
            previewDefaultText.style.display = null;
            previewImage.style.display = null; 
            previewImage.setAttribute("src", "");           
        }
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur" , e => {
            if (e.target.id === "firstName" && e.target.value.length > 0 && e.target.value.length < 3){
                setInputError(inputElement, "Please Enter a valid First Name");
            }
        })

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
})