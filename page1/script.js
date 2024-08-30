function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(el => el.style.display = 'none');
        document.getElementById(sectionId).style.display = 'block'
}