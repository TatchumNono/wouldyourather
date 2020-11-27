import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestion } from "../../redux/questions/questionAction";
import { Divider } from "antd";

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
        question == null
          ? null
          : Object.keys(question).map((key) => (
              <div>
                <p>{question[key].author}</p>
                <p>option 1:{question[key].optionOne.text}</p>
                <p>{question[key].optionTwo.text}</p>
                <Divider />
              </div>
            ))
      }
    </div>
  );
};

export default Home;
