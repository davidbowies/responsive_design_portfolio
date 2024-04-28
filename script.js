<script>
// Ensure the script runs after the page is fully loaded
window.onload = function() {
    window.addEventListener('scroll', function() {
        const experienceSection = document.querySelector('.experience');
        if (window.scrollY > 50) {
            experienceSection.style.visibility = 'visible';
            experienceSection.style.opacity = 1;
        } else {
            experienceSection.style.visibility = 'hidden';
            experienceSection.style.opacity = 0;
        }
    });
};
</script>
