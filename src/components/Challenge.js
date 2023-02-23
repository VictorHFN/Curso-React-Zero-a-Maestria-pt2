

const Challenge = () => {
    const v1 = 50
    const v2 = 75

  return (
    <div>

    <p>Num1: {v1}</p>
    <p>Num2: {v2}</p>
    <button onClick={() => console.log(v1 + v2)}>Sum of two values</button>

    </div>
  );
};

export default Challenge;


