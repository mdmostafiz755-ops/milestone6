
const Friends = ({friend}) => {
    console.log(friend);
    const{name,email,phone}=friend;
  return (
    <div>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
    </div>
  )
}

export default Friends