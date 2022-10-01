const joinedYourGroup = (avatar, date, id, group, name, open) => {

    return (
        <section className={`notification ${open ? "open":""}`} key={id}>
            <img
                className="notification__avatar"
                src={avatar}
                alt="avatar"
            />
            <div className="notification__details">
                <div>
                    <span className="notification__name">{name} </span>
                    has joined your group
                    <span className="notification__group"> {group}</span> {!open && <div className="notification__dot"></div>}
                </div>
                <p className="notification__date">{date}</p>
            </div>
        </section>
    );
}

export default joinedYourGroup;