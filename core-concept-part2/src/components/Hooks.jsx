import { use } from "react"


const Hooks = ({fetchUser}) => {
  const users= use(fetchUser);
    return (
    <div>
        <h3>Users{users.length}</h3>

    </div>
  )
}

export default Hooks