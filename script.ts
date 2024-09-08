document.addEventListener('DOMContentLoaded', () => {
    const educationButton = document.getElementById('educationButton') as HTMLButtonElement;
    const experienceButton = document.getElementById('experienceButton') as HTMLButtonElement;
    const educationSection = document.getElementById('education') as HTMLDivElement;
    const experienceSection = document.getElementById('experience') as HTMLDivElement;

    function showSection(section: HTMLDivElement) {
        educationSection.style.display = 'none';
        experienceSection.style.display = 'none';
        section.style.display = 'flex';
    }

    educationButton.addEventListener('click', () => {
        showSection(educationSection);
        educationButton.classList.add('active');
        experienceButton.classList.remove('active');
    });

    experienceButton.addEventListener('click', () => {
        showSection(experienceSection);
        experienceButton.classList.add('active');
        educationButton.classList.remove('active');
    });

    // Show education section by default
    educationButton.click();
});
