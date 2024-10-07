function toggleCard(element) {
    const card = element.closest('.owp__card');
    const toggleButton = element.querySelector('.toggle-btn');
    const content = card.querySelector('.owp__card__content');

    if (!content) return;

    document.querySelectorAll('.owp__card').forEach(c => {
        const otherContent = c.querySelector('.owp__card__content');
        const otherButton = c.querySelector('.toggle-btn');

        if (c !== card && otherContent) {
            otherContent.style.display = 'none';
            otherButton.innerHTML = `
                <svg class="icon-plus" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z" fill="#191A23" />
                </svg>
            `;
            c.classList.remove('active');
        }
    });

    if (content.style.display === 'block') {
        content.style.display = 'none';
        toggleButton.innerHTML = `
            <svg class="icon-plus" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z" fill="#191A23" />
            </svg>
        `;
        card.classList.remove('active');
    } else {
        content.style.display = 'block';
        toggleButton.innerHTML = `
            <svg class="icon-minus" width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.14V0.5H17.76V6.14H0Z" fill="black" />
            </svg>
        `;
        card.classList.add('active');
    }
}
