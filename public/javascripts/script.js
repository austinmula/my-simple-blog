const blog = document.querySelector(".blog");
const form = document.querySelector("#edit-form")

const editForm = (e) => {
    e.preventDefault()
    const title = document.getElementById("title").value
    const description = document.getElementById("description").innerText


    console.log(title)
    console.log(description)
}