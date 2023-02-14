import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    /*  const timer = setInterval(() => {
      console.log("function child-componentDidMount set intervel");
    }, 1000);

    return () => {
      clearInterval(timer);
    }; */
  });
  return (
    <div>
      <h2>Profile page</h2>
      <h3>
        Name: {props.name} {props.title}
      </h3>
      <h4>Count: {count}</h4>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Profile;
