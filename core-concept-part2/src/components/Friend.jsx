import { use } from "react"
import Friends from "./Friends";
const Friend = ({friend}) => {
    const fr=use(friend);
  return (
    <>
    <div>Friend{fr.length}</div>
    {
        fr.map(f=><Friends friend={f} key={f.id}></Friends>)
    }
    </>
  )
  
}

export default Friend