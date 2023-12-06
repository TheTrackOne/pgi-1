function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

function acceptTerms() {

    alert('Общите условия са приети. Пренасочване към началната страница...');
    window.location.href = 'Home.html'
}
