document.querySelectorAll('.link-item a').forEach(link => {
    link.addEventListener('click', function(event) {
        alert('Você está sendo redirecionado para: ' + this.href);
    });
});
