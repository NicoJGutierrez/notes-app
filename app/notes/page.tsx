import { getNotes } from "../services/notes"
// import Link from "next/link"
import NoteList from "./Notelist"
import { Suspense } from "react"

const NotesPage = ({ searchParams }: { searchParams: Promise<{ important?: string }> }) => {
  return (
    <Suspense fallback={<p>Cargando notas...</p>}>
      <Notes searchParams={searchParams} />
    </Suspense>
  )
}

const Notes = async ({
  searchParams,
}:{
  searchParams: Promise<{ important?: string }> 
}) => {
  const showImportant = (await searchParams).important === "true"
  const notes = await getNotes(showImportant)
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

export default NotesPage
