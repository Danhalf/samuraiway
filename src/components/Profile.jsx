import React from 'react';

function Profile() {
  return (
    <main className="main__content">
      <div className="user__background">
        <img
          src="https://static.ukrinform.com/photos/2018_12/thumb_files/630_360_1545834471-803.jpg"
          alt=""
        />
      </div>
      <div className="user__avatar">
        <img
          src="https://hypeava.ru/uploads/posts/2018-04/1523898769_1.gif"
          alt=""
        />
      </div>
      <div className="user__description"></div>
      <div className="user__posts">
        <div className="user__post">post #1</div>
        <div className="user__post">post #2</div>
        <div className="user__post">post #3</div>
        <div className="user__post">post #4</div>
        <div className="user__post">post #5</div>
      </div>
    </main>
  );
}

export default Profile;
