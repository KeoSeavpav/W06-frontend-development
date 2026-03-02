export default function Scores({ courseName, courseResults }) {

  const getScoreClass = (score) => {
    return score < 50 ? "warning" : "";
  };

  return (
    <div className="scores">
      <h2>{courseName}</h2>

      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {courseResults.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>

              <td className={getScoreClass(student.score)}>
                {student.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}