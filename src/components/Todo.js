/* eslint-disable */

export default function Todo(props) {
  return (
    <li>
      <div class="delete" onClick={() => props.delete(props.task)}>
        <ion-icon name="trash-outline"></ion-icon>
      </div>
      <div class="text">{props.task}</div>
    </li>
  );
}
