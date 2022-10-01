
const commentPicture = (avatar, date, id, name, picture, open) => {

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
                    commented on your picture
                    {!open && <div className="notification__dot"></div>}
                </div>
                <p className="notification__date">{date}</p>
            </div>
            <img
                className="notification__picture"
                src={picture}
                alt="picture  post commented" />
        </section>
    );
}

export default commentPicture;