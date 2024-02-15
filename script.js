let skills=document.getElementById("skills");
    let education=document.getElementById("education");
    let project=document.getElementById("project");
    let stab=document.getElementById("stab");
    let ptab=document.getElementById("ptab");
    let etab=document.getElementById("etab");

    skills.onclick=()=>{
        stab.style.display="block";
        ptab.style.display="none";
        etab.style.display="none";
        skills.style.color="#ff7300"
        education.style.color="white"
        project.style.color="white"
    }
    education.onclick=()=>{
        stab.style.display="none";
        ptab.style.display="none";
        etab.style.display="block";
        skills.style.color="white"
        education.style.color="#ff7300"
        project.style.color="white"
    }
    project.onclick=()=>{
        stab.style.display="none";
        ptab.style.display="block";
        etab.style.display="none";
        skills.style.color="white"
        education.style.color="white"
        project.style.color="#ff7300"
    }




    // const scriptURL = 'https://script.google.com/macros/s/AKfycbz1HJYRAXheOaMSKclQMuuO9VbsbSR8z8UqCgoPLMYSzmZ3wM-oJrA2PveZHknF8jRPzQ/exec'
    // const form = document.forms['submit-to-google-sheet']
  
    // form.addEventListener('submit', e => {
    //   e.preventDefault()
    //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //     .then(response => console.log('Success!', response))
    //     .catch(error => console.error('Error!', error.message))
    // })