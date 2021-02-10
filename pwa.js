if ('serviceWorker' in navigator) {
navigator.serviceWorker
.register('/sw.js')
.then(() => { console.log('Service Worker Registered'); });
}
window.addEventListener('beforeinstallprompt', (e) => {
e.preventDefault();
deferredPrompt = e;
addBtn.style.display = 'block';

addBtn.addEventListener('click', () => {
addBtn.style.display = 'none';
deferredPrompt.prompt();
deferredPrompt.userChoice.then((choiceResult) => {
if (choiceResult.outcome === 'accepted') {
console.log('Successful');
} else {
console.log('Failed');
}
deferredPrompt = null;
});
});
});
