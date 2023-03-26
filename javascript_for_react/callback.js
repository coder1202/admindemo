//async js programming
//callback,promise,and await

const data = [
    { name: "parth", prof: "web" },
    { name: "yash", prof: "android" }
];
function getdata() {
    setTimeout(() => {
        let output = "";
        data.forEach((data, index) => {
            output += `<<li>${data.name}</li>`
        });
        document.body.innerHTML = output
    }, 3000);
}