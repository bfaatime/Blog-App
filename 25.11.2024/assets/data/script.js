async function getAllData() {
    const posts = awaist axios ("https://jsonplaceholder.typicode.com/posts");
    const postValue = posts.data;
console.log(postValue);

    
}
let border = document.querySelector(".border");
postValue.array.forEach(element => {
    border.innerHTML+=
    <p>${element.title}</p>
 <h3>${element.price}</h3>
});