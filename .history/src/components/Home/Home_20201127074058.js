import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";

const Home = () => {
  const question = useSelector((state) => state.question.question);
  // const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestion());
  }, [dispatch]);

  console.log(question);
  return (
    <div>
      <p>Home</p>

      {
        //verifying if the object is empty or not
        Object.keys(question).length === 0 && question.constructor === Object
          ? 
          : null
      }
    </div>
  );
};

export default Home;
