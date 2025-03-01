function addingEventListener() {
    const button = document.getElementById('button');

    function clickAlert() {
        alert('I was clicked!');
    }

    button.addEventListener('click', clickAlert);
}

// Don't call the function immediately; the test will likely call it.
