import React, { useState, useEffect } from 'react';
import { Layout, Icon, Input } from 'antd';
import SlateEditor from '../SlateEditor';

import './index.css';

const { Header, Content } = Layout;

function NoteEditor(props) {
    const [note, setNote] = useState(null);

    useEffect(() => {
        setNote(props.note)
    }, [props.note])

    const handleTitleChange = (e) => {
      const updatedNote = {
        ...note,
        title: e.target.value
      }
      props.handleNoteUpdate(updatedNote)
    }

    const handleContentChange = (content) => {
      const updatedNote = {
        ...note,
        content
      }
      props.handleNoteUpdate(updatedNote)
    }

    return (
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="NotesPage-trigger"
              type={props.toggle ? 'menu-unfold' : 'menu-fold'}
              onClick={props.toggle}
            />
            {
              note ? 
              <Input 
                id="NoteEditor-title"
                placeholder="Title here" 
                defaultValue={note.title}
                onChange={handleTitleChange}
              /> : null
            }
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {
              note ? 
              <SlateEditor content={note.content} id={note.id} onContentChange={handleContentChange} /> : null
            }
          </Content>
        </Layout>
    )
}

export default NoteEditor;