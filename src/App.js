import "./App.css";
import Task1 from "./Life_Cycle_method_task/Task1";
import "./Life_Cycle_method_task/Components.css";
import Task2 from "./Life_Cycle_method_task/Task2";
import Task4 from "./Life_Cycle_method_task/Task4";
import Task5 from "./Life_Cycle_method_task/Task5";
import { Task9 } from "./Life_Cycle_method_task/Task9";
function App() {
  return (
    <>
      <h3>Task1:Use constructor to set the theme of page to dark mode.</h3>
      <br/>
      <h3>Task9:ComponentWillUnmount</h3>
      <Task1 />
      <hr />
      <h3>
        Task2:Use this method to again change the theme of page to light, just
        before rendering the elements
      </h3>
      <h3>
        and
        <br />
        <br />
        Task3: Use this method to display HTML
      </h3>
      <Task2 bgcolor="light" />
      <hr />
      <h3>
        Task4:Use this method to change the theme again to dark after 5 seconds
        of rendering.<br/><br/>
        Task7:getSnapshotBeforeUpdate
        <br/><br/>
        Task8:componentDidUpdate
      </h3>
      <Task4 />
      <hr />
      <h3>
        Task5. gerDerivedStateFromProps
        <br />
        and
        <br />
        Task6. Use shouldComponentUpdate() method to stop re-rendring the
        changes.
      </h3>
      <Task5 />
        </>
  );
}

export default App;
