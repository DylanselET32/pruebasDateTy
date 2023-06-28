
// Importa las bibliotecas de Firebase Messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
    });
    }