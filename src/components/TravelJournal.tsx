import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface Note {
  id: string;
  text: string;
  date: string;
}

interface Props {
  city: string;
}

const TravelJournal = ({ city }: Props) => {
  const [notes, setNotes] = useLocalStorage<Note[]>(`travel-journal-${city}`, []);
  const [newNote, setNewNote] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const addNote = () => {
    if (!newNote.trim()) return;
    const note: Note = {
      id: crypto.randomUUID(),
      text: newNote,
      date: new Date().toLocaleDateString(),
    };
    setNotes([note, ...notes]);
    setNewNote("");
  };

  const deleteNote = (id: string) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  const clearAllNotes = () => {
    if (notes.length > 0 && window.confirm("Are you sure you want to delete ALL notes for this city? This cannot be undone.")) {
      setNotes([]);
    }
  };

  const startEditing = (note: Note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;
    setNotes(notes.map((n) => (n.id === editingId ? { ...n, text: editText } : n)));
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      addNote();
    }
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title text-muted text-uppercase mb-0" style={{ fontSize: "0.9rem", letterSpacing: "1px" }}>
            <i className="bi bi-journal-text me-2 text-primary"></i>
            Travel Journal
          </h5>
          {notes.length > 0 && (
            <button 
              className="btn btn-link text-danger btn-sm p-0 text-decoration-none" 
              onClick={clearAllNotes}
              style={{ fontSize: "0.8rem" }}
            >
              Clear All Notes
            </button>
          )}
        </div>
        <div className="mb-3">
          <textarea
            className="form-control mb-2"
            rows={3}
            placeholder={`Write your plans or memories for ${city}...`}
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary btn-sm w-100" onClick={addNote}>
            Add Note
          </button>
        </div>
        <div className="list-group list-group-flush" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {notes.length === 0 && (
            <div className="text-center text-muted py-3">
              <small>No notes yet. Start planning!</small>
            </div>
          )}
          {notes.map((note) => (
            <div key={note.id} className="list-group-item px-0">
              {editingId === note.id ? (
                <div className="d-flex flex-column gap-2">
                  <textarea
                    className="form-control"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows={3}
                  />
                  <div className="d-flex justify-content-end gap-2">
                    <button className="btn btn-sm btn-outline-secondary" onClick={cancelEdit}>
                      Cancel
                    </button>
                    <button className="btn btn-sm btn-primary" onClick={saveEdit}>
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <small className="text-muted">{note.date}</small>
                    <p className="mb-0" style={{ whiteSpace: "pre-wrap" }}>
                      {note.text}
                    </p>
                  </div>
                  <div className="d-flex gap-2 ms-2">
                    <button
                      className="btn btn-link text-primary btn-sm p-0"
                      onClick={() => startEditing(note)}
                      aria-label="Edit note"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-link text-danger btn-sm p-0"
                      onClick={() => deleteNote(note.id)}
                      aria-label="Delete note"
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelJournal;
