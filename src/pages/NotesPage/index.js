import React from 'react';
import { Layout, Icon } from 'antd';

import NotesMenu from '../../components/NotesMenu';

import {
    getNotes,
    saveNote,
    updateNote,
    deleteNote
} from '../../data/Notes';
import { uuid } from '../../data/util';


import './index.css';

const { Header, Content } = Layout;

export default class NotesPage extends React.Component {
  state = {
    collapsed: false,
    notes: [],
    editingNote: null
  };

  componentDidMount() {
      this.loadNotes();
  }

  loadNotes = () => {
    const notes = getNotes();
    this.setState({notes});
  }

  setEditingNote = (noteId) => {
    let note = this.state.notes.find((n) => {
        return noteId === n.id
    })
    this.setState({
        editingNote: note
    })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="NotesPage-layout">
        <NotesMenu  collapsed={this.state.collapsed}></NotesMenu>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="NotesPage-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
