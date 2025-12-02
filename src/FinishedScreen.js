import { useQuiz } from "./context/QuizContext";

function FinishedScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const percent = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percent === 100) emoji = "💰";
  if (percent >= 80 && percent < 100) emoji = "🎉";
  if (percent >= 50 && percent < 80) emoji = "😀";
  if (percent < 50) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percent)}%)
      </p>
      <p className="highscore">Highscore : {highscore} points</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reset Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
