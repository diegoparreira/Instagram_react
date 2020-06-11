import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  const [like, setLike] = useState(false);
  const [follow, setFollow] = useState(false);

  const { comments, imageUrl } = postInfo;

  return (
    //Post component
    <article className="post" data-testid="post">
      {/* se userInfo possui conteúdo */}
      {userInfo && (
        //Header of Post
        <header className="post__header">
          {/**User infos */}
          <div className="user">
            {/** User Thumb */}
            <Link to={`users/${userInfo.username}`} class="user__thumb">
              <img src={userInfo.avatar} alt={userInfo.username} />
            </Link>
            {/** User name label */}
            <Link to={`users/${userInfo.username}`} class="user__name">
              {userInfo.username}
            </Link>
          </div>
          {/** Follow Button */}
          <button class="post__context" onClick={() => setFollow(!follow)}>
            {follow ? (
              <span className="follow-btn is-following">{"Seguindo"}</span>
            ) : (
              <span className="follow-btn">{"Seguir"}</span>
            )}
          </button>
        </header>
      )}

      {/** Post Image */}
      <figure className="post__figure">
        <img src={imageUrl} alt="" />
      </figure>

      {/** Post Controllers */}
      {userInfo && (
        <div className="post__controls">
          <button className="post__control" onClick={() => setLike(!like)}>
            {/** Render condicional se curtiu ou nao */}
            {like ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </button>

          {userInfo && comments.length > 0 && (
            <div className="post_status">
              <div className="user">
                <span>
                  curtido por{" "}
                  <Link to={`/users/${comments[0].name}`}>
                    {comments[0].name}
                  </Link>{" "}
                  e outra
                  {comments.length - 1 + like > 1 && "s"}{" "}
                  <Link to="/">
                    {comments.length - 1 + like} pessoa
                    {comments.length - 1 + like > 1 && "s"}.
                  </Link>
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default Post;
