import "./UserDataCard.css";
const UserDataCard = (props) => {
  return (
    <div className="card">
      <div className="userAvatar">
        <img src={props.user.avatar} alt="Avatar" className="imgAvatar" />
      </div>

      <div className="container">
        <h4>
          <b>
            {props.user.first_name} {props.user.last_name}
          </b>
        </h4>
        <p>{props.user.email}</p>
      </div>
    </div>
  );
};

export default UserDataCard;
