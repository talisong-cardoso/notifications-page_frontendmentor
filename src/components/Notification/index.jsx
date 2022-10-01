import React from "react";
import "./styled.css"
import {
    newFollower,
    reactedOnRecentPost,
    joinedYourGroup,
    privateMessage
} from "./models";

export default Notification = ({ data }) => {

    return (
        <>
            {data.map((notify) => {
                const { name, group, date, message, post, picture, avatar, id, open } = notify;

                switch (notify.type) {
                    case "follow":
                        return newFollower(id, name, date, avatar, post, open);
                    case "reacted":
                        return reactedOnRecentPost(avatar, date, id, name, open, post);
                    case "group":
                        return joinedYourGroup(avatar, date, id, group, name, open);
                    case "message":
                        return privateMessage(avatar, date, id, message, name, open);
                }
            })}
        </>
    );
};
