import { useEffect } from "react";
import { useQuiz } from "./context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining, status } = useQuiz();

  useEffect(() => {
    if (status !== "active") return;

    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch, status]);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
