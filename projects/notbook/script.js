document.addEventListener("DOMContentLoaded", function() {
    const noteInput = document.getElementById("note");
    const saveNoteButton = document.getElementById("saveNote");
    const notesList = document.getElementById("notesList");

    // Fetch user's IP address using a third-party API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIp = data.ip;
            loadNotes(userIp);

            saveNoteButton.addEventListener("click", function() {
                saveNote(userIp, noteInput.value);
                noteInput.value = '';
                loadNotes(userIp);
            });
        });

    function saveNote(ip, note) {
        let notes = JSON.parse(localStorage.getItem(ip)) || [];
        notes.push(note);
        localStorage.setItem(ip, JSON.stringify(notes));
    }

    function loadNotes(ip) {
        let notes = JSON.parse(localStorage.getItem(ip)) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            let li = document.createElement('li');
            li.textContent = note;

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                deleteNote(ip, index);
                loadNotes(ip);
            });

            li.appendChild(deleteButton);
            notesList.appendChild(li);
        });
    }

    function deleteNote(ip, noteIndex) {
        let notes = JSON.parse(localStorage.getItem(ip)) || [];
        notes.splice(noteIndex, 1);
        localStorage.setItem(ip, JSON.stringify(notes));
    }
});
