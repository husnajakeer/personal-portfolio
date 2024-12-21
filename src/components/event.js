import '../styles/event.css';

function Event() {
  return (
    <>
        <div class="event-section">
            
            <div class="time">time</div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="238" height="16" viewBox="0 0 238 16" fill="none">
                <path d="M16 8C16 12.4183 12.4183 16 7.99999 16C3.58171 16 -7.89903e-06 12.4183 -7.89903e-06 8C-7.89903e-06 3.58172 3.58171 0 7.99999 0C12.4183 0 16 3.58172 16 8ZM238 9.5H7.99999V6.5H238V9.5Z" fill="black"/>
            </svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                <circle class="dot" cx="18.5" cy="18.5" r="16" fill="#395434" stroke="#FAF6E8" stroke-width="5"/>
            </svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="187" height="16" viewBox="0 0 187 16" fill="none">
                <path d="M171 8C171 12.4183 174.582 16 179 16C183.418 16 187 12.4183 187 8C187 3.58172 183.418 0 179 0C174.582 0 171 3.58172 171 8ZM0 9.5H179V6.5H0L0 9.5Z" fill="black"/>
            </svg>
            
            <div class="event">
                <div class="event-name">TITLE</div>
                <div class="event-description">description</div>
            </div>
        </div>
    </>
  );
}

export default Event;