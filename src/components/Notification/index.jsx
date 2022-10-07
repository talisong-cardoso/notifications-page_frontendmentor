import React from "react";
import "./styled.css"
import {
    newFollower,
    reactedOnRecentPost,
    joinedYourGroup,
    privateMessage,
    commentPicture,
    leftGroup
} from "./models";

const Notification = ({ data, onClick }) => {

    return (
        <>
            {data.map((notify) => {
                const { name, group, date, message, post, picture, avatar, id, open } = notify;

                switch (notify.type) {
                    case "follow":
                        return newFollower(id, name, date, avatar, open, onClick);
                    case "reacted":
                        return reactedOnRecentPost(avatar, date, id, name, open, post, onClick);
                    case "joined-group":
                        return joinedYourGroup(avatar, date, id, group, name, open, onClick);
                    case "left-group":
                        return leftGroup(avatar, date, id, group, name, open, onClick);
                    case "message":
                        return privateMessage(avatar, date, id, message, name, open, onClick);
                    case "comment":
                        return commentPicture(avatar, date, id, name, picture, open, onClick);
                    default:
                        return null
                }
            })}
        </>
    );
};

export default Notification;