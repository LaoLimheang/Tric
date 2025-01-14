function createBar() {
    const bar = document.createElement('div');
    bar.className = 'bar-component';
    bar.textContent = 'This is the bar component';
    document.body.appendChild(bar);
}

export { createBar };