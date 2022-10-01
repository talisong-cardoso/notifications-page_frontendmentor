const reactedOnRecentPost = (avatar, date, id, name, open, post) => {

    return (
        <section className={`notification ${open && "open"}`} key={id}>
            <img
                className="notification__avatar"
                src={avatar}
                alt="avatar"
            />
            <div className="notification__details">
                <div>
                    <span className="notification__name">{name} </span>
                    reacted to your recent post 
                    <span className="notification__post"> {post}</span>
                    {!open && <div className="notification__dot"></div>}
                </div>
                <p className="notification__date">{date}</p>
            </div>
        </section>
    );
}

export default reactedOnRecentPost;