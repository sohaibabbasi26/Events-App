// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/style.module.css";

export default function HeaderContent() {
  return (
    <div className={styles.Content}>
      <div className={styles.eventsContainer}>
        <div className={styles.events}>
          <h1>2011 Super Junior SM Town Live '10 World Tour New York City</h1>
          <h2>This event includes</h2>
        </div>
        <div className={styles.eventsContent}>
          <div className={styles.event1}>
            <div>
              <Image
                src="/thumb.png"
                alt="Header image"
                width={24}
                height={26}
              />
              <span className={styles.spanItem}>
                Direct interaction with the instructor
              </span>
            </div>
          </div>
          <div className={styles.event2}>
            <div>
              <Image
                src="/computer.png"
                alt="Header image"
                width={24}
                height={26}
              />
              <span className={styles.spanItem}>Access on mobile and web</span>
            </div>
          </div>
          <div className={styles.event3}>
            <div>
              <Image
                src="/camera.png"
                alt="Header image"
                width={24}
                height={26}
              />
              <span className={styles.spanItem}>
                Session recording after the workshop
              </span>
            </div>
          </div>
          <div className={styles.event4}>
            <div>
              <Image
                src="/timer.png"
                alt="Header image"
                width={24}
                height={26}
              />
              <span className={styles.spanItem}>1 hour live session</span>
            </div>
          </div>
          <div className={styles.squarePic}>
            <Image src="/sq.png" alt="Header image" width={150} height={100} />
          </div>
        </div>
        <div className={styles.aboutEvent}>
          <h2>About the Event</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul>
            <li>Section 1.10.32 of "de Finibus Bonorum et Malorum",</li>
            <li>of Finibus Bonorum et Malorum"de ", </li>
            <li>1914 translation by H. Rackham</li>
          </ul>
          <Image className={styles.readMore} src="/Location.png" alt="Read More" width={100} height={30} />
        </div>
      </div>
    </div>
  );
}
