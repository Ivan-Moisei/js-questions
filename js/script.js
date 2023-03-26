questions.forEach(el => {
    console.log(el)
});

function showStatus(el) {
    if (el.status == true) {
       return `<span class="icon has-text-success"><i class="fas fa-check-square"></i></span><span>Got it</a></span>`;
    } else {
        return `<span class="icon has-text-danger"><i class="fas fa-ban"></i></span><span>Didn't get it</a></span>`;
    }
};

function showColor(el) {
    if (el.status == true) {
        return `<div class="card mb-5 has-background-success-light">`;
     } else {
         return `<div class="card mb-5 has-background-danger-light">`;
     }
};

questions.forEach(el => {document.getElementById('cards').insertAdjacentHTML('beforeend',
`${showColor(el)}
<div class="card-content">
<p class="title is-4 has-text-centered" id="first">
    ${el.question}
</p>
</div>
<footer class="card-footer">
<p class="card-footer-item">
    ${showStatus(el)}
</p>
</footer>
</div>`
)
})