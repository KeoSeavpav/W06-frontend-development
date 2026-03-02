import pnLogo from "./assets/pn-logo.png";
import {
  JAVA_RESULTS,
  PYTHON_RESULTS,
  HTML_RESULTS,
  ENGLISH_RESULTS
} from "./data";
function App() {
  const getScoreClass = (score) => {
  return score < 50 ? "warning" : "";
};

  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for ((fake batch name))</h1>
      </header>

      <main className="scores-container">
        <div className="scores">
          <h1>HTML</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                 {HTML_RESULTS.map((student, index) => (
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
      </main>
      <main className="scores-container">
        <div className="scores">
          <h1>JAVA</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                 {JAVA_RESULTS.map((student, index) => (
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
      </main>
    </>
  );
}

export default App;
