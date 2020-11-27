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
          ? null
          : Object.keys(question).map((key) => (
              <div>
                <p>{question[key].author}</p>
                <p>{question[key].optionOne.text}</p>
                <p>{question[key].optionTwo.text}</p>
              </div>
            ))
      }
    </div>
  );
};

export default Home;
