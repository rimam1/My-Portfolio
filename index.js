var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
      sidemenu.style.right= "0";
    }

function closemenu(){
      sidemenu.style.right = "-150px";
    }

const scriptURL = 'https://script.google.com/macros/s/AKfycbx6s0O5ZULGB2Q8S0kFPlOELWph709SfddQ9X3Xb2MeszP7-k6lmJqwRGvCxhBMpnR7/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
  
form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
          msg.innerHTML = "Submitted Successfully"
          setTimeout(() => {
            msg.innerHTML = ""
          },4000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
  })