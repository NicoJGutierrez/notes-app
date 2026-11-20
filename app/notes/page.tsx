import { getNotes } from "../services/notes"
// import Link from "next/link"
import NoteList from "./Notelist"

const Notes = () => {
  const notes = getNotes()
  return (
    <div>
      <h2>Notes</h2>
      <NoteList notes={notes} />
      {/*<ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.content}</Link> {note.important && <strong>(important)</strong>}
          </li>
        ))}
      </ul>*/}
    </div>
  )
}
export default Notes
