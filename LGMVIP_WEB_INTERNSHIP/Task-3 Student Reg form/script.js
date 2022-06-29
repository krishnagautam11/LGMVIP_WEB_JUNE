function formSubmit() {
    var formData = {};
    var skills = "";
    document.querySelectorAll("input[name='skills']:checked").forEach((skill) => skills += skill.value + " ");
    formData["name"] = document.getElementById("userName").value;
    formData["email"] = document.getElementById("email").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["gender"] = document.querySelector("input[name='gender']:checked").value;
    formData["skills"] = skills;
    document.getElementById("users").innerHTML += `<div class="row users">
    <h2>${formData.name}</h2>
    <hr>
    <h3>${formData.email}</h3>
    <p>${formData.phoneNo}</p>
    <p>${formData.gender}</p>
    <p>${formData.skills}</p>
    <button name="delete" onclick="del(this)">Delete User</button>
  </div>`;
  clearForm();
};

function del(item){
    if(confirm("Do you want to delete this user data?")){
        setTimeout(()=>{
            item.parentNode.remove();
        },400);
    }
};

function clearForm(){
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNo").value = "";
    document.querySelector("input[value='Male']").checked = true;
    document.querySelectorAll("input[name='skills']").forEach((skill)=> {
        skill.checked = false;
    });
};