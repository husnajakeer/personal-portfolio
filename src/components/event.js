import '../styles/event.css';

function Event(props) {
  return (
    <article className={`event-section ${props.category ? `category-${props.category}` : ''}`}>
        <div className="time">{props.time}</div>
        
        <div className="timeline-line">
            <div className="line-left"></div>
            <div className="dot-inner"></div>
            <div className="line-right"></div>
        </div>

        <div className="event-content">
            <h3 className="event-name">{props.title}</h3>
            <p className="event-description">{props.description}</p>
        </div>
    </article>
  );
}

export default Event;