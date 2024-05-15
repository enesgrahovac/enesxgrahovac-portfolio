import React from "react";
import styles from "./Contact.module.css";

const ContactContent = ({ }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.wrapper}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1bNOe1EK80hSxQobW7nuPI3UxVYqAKcV3mkyGhiEWGEuvNOoaQ1XQ2-Yu5lWUHfipK9Qc2R-X-?gv=true"
          style={{ border: 0, width: '100%', height: '600px' }}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactContent;
