import React from 'react';
import { Layout } from 'antd';

import NotesMenu from '../../components/NotesMenu';
import NoteEditor from '../../components/NoteEditor';

import {
    getNotes,
    saveNote,
    updateNote,
    deleteNote
} from '../../data/Notes';
import { uuid } from '../../data/util';


import './index.css';

/**
 * @type {Component}
 */
class NotesPage extends React.Component {
  state = {
    collapsed: false,
    notes: [],
    selectedNote: null
  };

  componentDidMount() {
      this.loadNotes();
  }

  loadNotes = () => {
    const notes = getNotes();
    if(notes != null) {
      this.setState({notes});
    }
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
      content: {}
    }

    saveNote(newNote);
    let notes = this.state.notes
    notes.unshift(newNote)
    this.setState({
      selectedNote: newNote,
      notes
    })

  }

  render() {
    return (
      <Layout className="NotesPage-layout">
        <NotesMenu  
          collapsed={this.state.collapsed}
          notes={this.state.notes}
          newNote={this.handleNewNote}
        />
        <NoteEditor 
          note={this.state.selectedNote}
          collapsed={this.state.collapsed}
          toggle={this.toggle}
        />
      </Layout>
    );
  }
}

/**
 * Export
 */
export default NotesPage;