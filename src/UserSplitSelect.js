import React, { useState } from "react";

function UserSplitSelect(props) {
  const { userList, finishSplit } = props;
  const [selectedUserList, setSelectedUserList] = useState([]);

  return (
    <div>
      {userList.map((user) => {
        return (
          <div key={user} className="userSplitSelect">
            <input
              type="checkbox"
              className="checkbox"
              id={user}
              checked={selectedUserList.includes(user)}
              onChange={() =>
                setSelectedUserList((prev) =>
                  prev.includes(user)
                    ? prev.filter((u) => u !== user)
                    : [...prev, user]
                )
              }
            />
            <label htmlFor={user} className="userLabel">
              {user}
            </label>
          </div>
        );
      })}
      <button
        type="button"
        className="button"
        disabled={selectedUserList.length === 0}
        onClick={() => finishSplit(selectedUserList)}
      >
        Finish
      </button>
    </div>
  );
}

export default UserSplitSelect;
