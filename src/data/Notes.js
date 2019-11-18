export const getNotes = () => {
    return JSON.parse(localStorage.getItem('notes'))
}

const setNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

export const saveNote = (note) => {
    let notes = getNotes()
    if(notes === null || notes === undefined) {
        notes = []
    }
    notes.push(note)
    setNotes(notes)
}

export const updateNote = (note) => {
    let notes = getNotes()
    let existingNoteIndex = notes.findIndex((n) => {
        return note.id === n.id;
    })
    let existingNote = notes.find((n) => {
        return note.id === n.id;
    })
    let mergedNote = {...existingNote, ...note}
    notes[existingNoteIndex] = mergedNote
    setNotes(notes)
}

export const deleteNote = (note) => {
    let notes = getNotes()
    let existingNoteIndex = notes.findIndex((n) => {
        return note.id === n.id;
    })
    notes.slice(existingNoteIndex, 1);
    setNotes(notes)
}
