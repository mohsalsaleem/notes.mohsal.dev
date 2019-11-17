export const getNotes = () => {
    return localStorage.getItem('notes')
}

export const saveNote = (note) => {
    let notes = localStorage.getItem('notes')
    notes.push(note)
    localStorage.setItem('notes', notes);
}

export const updateNote = (note) => {
    let notes = localStorage.getItem('notes')
    let existingNoteIndex = notes.findIndex((n) => {
        return note.id === n.id;
    })
    let existingNote = notes.find((n) => {
        return note.id === n.id;
    })
    let mergedNote = {...existingNote, ...note}
    notes[existingNoteIndex] = mergedNote
    localStorage.setItem('notes', notes)
}

export const deleteNote = (note) => {
    let notes = localStorage.getItem('notes')
    let existingNoteIndex = notes.findIndex((n) => {
        return note.id === n.id;
    })
    notes.slice(existingNoteIndex, 1);
    localStorage.setItem('notes', notes);
}
