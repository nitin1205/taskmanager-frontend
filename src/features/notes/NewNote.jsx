import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm"

const NewNote = () => {

  const users = useSelector(selectAllUsers)

  const content = users ? <NewNoteForm users={users} /> : <p>Loading Resources...</p>
  
  return content
}

export default NewNote