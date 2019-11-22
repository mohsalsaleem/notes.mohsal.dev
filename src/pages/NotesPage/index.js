import React from 'react';
import { Layout, Skeleton } from 'antd';
import { debounce } from 'lodash';

import NotesMenu from '../../components/NotesMenu';
import NoteEditor from '../../components/NoteEditor';

import {
    getNotes,
    saveNote,
    updateNote,
    deleteNote
} from '../../data/Notes';
import { uuid } from '../../data/util';
import initialValue from '../../components/SlateEditor/value.json'

import './index.css';

/**
 * @type {Component}
 */
class NotesPage extends React.Component {
  state = {
    collapsed: false,
    notes: [],
    selectedNote: null,
    notesReady: false
  };

  constructor(props) {
    super(props)

    this.handleNoteUpdate = debounce(this.handleNoteUpdate, 2000)
    this.handleDeleteNote = this.handleDeleteNote.bind(this)
  }

  componentDidMount() {
      
      let notes = getNotes();
      if(notes === null) {
        // Incase there are no notes, create a new note and save it
        let newNote = {
          id: uuid(),
          title: "",
          content: initialValue
        }
        saveNote(newNote)
        notes = [newNote]
        this.setState({
          selectedNote: newNote,
          notes: notes
        })
      } else {
        this.setState({
          notes: notes,
          selectedNote: notes[0]
        })
      }
      this.setState({notesReady: true})
  }

  initializeNewNote() {
    let notes = getNotes();
    let newNote = {
      id: uuid(),
      title: "",
      content: initialValue
    }
    saveNote(newNote)
    notes = [newNote]
    this.setState({
      selectedNote: newNote,
      notes: notes
    })
  }

  setselectedNote = (noteId) => {
    let note = this.state.notes.find((n) => {
        return noteId === n.id
    })
    this.setState({
        selectedNote: note
    })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleNewNote = () => {
    let newNote = {
      id: uuid(),
      title: "",
      content: initialValue
    }

    saveNote(newNote);
    let notes = this.state.notes
    notes.unshift(newNote)
    this.setState({
      selectedNote: newNote,
      notes
    })
  }

  handleNoteUpdate = (note) => {
    updateNote(note)
    let noteIndex = this.state.notes.findIndex((n) => {
      return n.id === note.id
    })
    let noteToUpdate = this.state.notes.find((n) => {
      return n.id === note.id
    })
    let updatedNote = {...noteToUpdate, ...note}
    let notes = this.state.notes
    notes[noteIndex] = updatedNote

    const editingNote = this.state.selectedNote
    editingNote.title = note.title

    this.setState({
      notes
    })
  }

  handleNoteChange = (noteId) => {
    const note = this.state.notes.find((note) => {
      return note.id === noteId
    })
    this.setState({
      selectedNote: note
    })
  }

  handleDeleteNote = (noteId) => {
    deleteNote(noteId)
    const noteIndex = this.state.notes.findIndex(note => {
      return note.id === noteId
    })
    const notes = this.state.notes

    if(noteIndex > -1) {
      notes = notes.splice(noteIndex, 1)
      this.setState({
        notes: notes
      })
    }

    // If the note to be deleted is the last note on the list, set the note before the note to be deleted the current note.
    if(noteIndex === notes.length - 1 && notes.length > 1) {
      this.setState({
        selectedNote: notes[noteIndex - 1]
      })
    }

    // If the note to be deleted is the first note, make the second note in the list the selected note.
    if(noteIndex === 0 && notes.length > 1) {
      this.setState({
        selectedNote: notes[noteIndex + 1]
      })
    }

    // If note to be deleted is the last note available, create a new untitled note
    if(noteIndex === 0 && notes.length === 1) {
      this.initializeNewNote()
    }

  }

  render() {
    return (
      <Layout className="NotesPage-layout">
        {
          this.state.notesReady ? 
          <NotesMenu  
            collapsed={this.state.collapsed}
            notes={this.state.notes}
            newNote={this.handleNewNote}
            selectNote={this.handleNoteChange}
            selectedNoteId={this.state.selectedNote.id}
            deleteNote={this.handleDeleteNote}
          /> : <Skeleton title active />
        }
        {
          this.state.notesReady ? 
          <NoteEditor 
            note={this.state.selectedNote}
            collapsed={this.state.collapsed}
            toggle={this.toggle}
            handleNoteUpdate={this.handleNoteUpdate}
          /> : <Skeleton active />
        }
      </Layout>
    );
  }
}

/**
 * Export
 */
export default NotesPage;