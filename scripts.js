function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.querySelector('.messages-container');

    if (messageInput.value.trim() !== "") {
        const newMessage = document.createElement('p');
        newMessage.textContent = messageInput.value;
        messagesContainer.appendChild(newMessage);
        
        const newSender = document.createElement('p');
        newSender.textContent = '— Nama Pengirim';
        newSender.style.fontStyle = 'italic';
        messagesContainer.appendChild(newSender);

        messageInput.value = "";
    }
}
