document.addEventListener('DOMContentLoaded', function () {
    var educationButton = document.getElementById('educationButton');
    var experienceButton = document.getElementById('experienceButton');
    var educationSection = document.getElementById('education');
    var experienceSection = document.getElementById('experience');
    function showSection(section) {
        educationSection.style.display = 'none';
        experienceSection.style.display = 'none';
        section.style.display = 'flex';
    }
    educationButton.addEventListener('click', function () {
        showSection(educationSection);
        educationButton.classList.add('active');
        experienceButton.classList.remove('active');
    });
    experienceButton.addEventListener('click', function () {
        showSection(experienceSection);
        experienceButton.classList.add('active');
        educationButton.classList.remove('active');
    });
    // Show education section by default
    educationButton.click();
});
