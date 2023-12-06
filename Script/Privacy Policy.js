function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

function acceptPrivacy() {
    // Добавете код за пренасочване към началната страница
    alert('Политиката за поверителност е приета. Пренасочване към началната страница...');
    window.location.href = 'Home.html'
}