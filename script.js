document.addEventListener('DOMContentLoaded', function () {
    const capsuleForm = document.getElementById('capsule-form');
    const capsuleList = document.getElementById('capsule-list');

    capsuleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const message = document.getElementById('message').value;
        const openDate = document.getElementById('open-date').value;

        // Assuming you have a function to save the capsule data
        saveCapsule(message, openDate);

        // Clear the form
        capsuleForm.reset();

        // Update the capsule list
        updateCapsuleList();
    });

    function updateCapsuleList() {
        // Assuming you have a function to retrieve the capsule list
        const capsules = getCapsules();

        // Display the list
        capsuleList.innerHTML = '';
        capsules.forEach(capsule => {
            const listItem = document.createElement('li');
            listItem.textContent = `Open on ${capsule.openDate}: ${capsule.message}`;
            capsuleList.appendChild(listItem);
        });
    }

    // Initial update when the page loads
    updateCapsuleList();
});
