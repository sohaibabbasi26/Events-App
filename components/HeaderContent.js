// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/style.module.css";

export default function HeaderContent() {
  return (
    <div className={styles.headings}>
      <h1>2011 Super Junior SM Town Live '10 World Tour New York City</h1>
      <h2 className={styles.headingMob}>
        Directly seated and inside for you to enjoy the show.
      </h2>


      <div className={styles.Container}>
        <div className={styles.Content}>
          <div className={styles.eventsContainer}>
            <div className={styles.eventsContents}>
              <div className={styles.events}>
                <h2>This event includes</h2>

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
                      <span className={styles.spanItem}>
                        Access on mobile and web
                      </span>
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
                      <span className={styles.spanItem}>
                        1 hour live session
                      </span>
                    </div>
                  </div>
                  <div className={styles.squarePic}>
                    <Image
                      src="/sq.png"
                      alt="square picture"
                      width={150}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutEvent}>
              <h2>About the Event</h2>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
              <ul>
                <li>Section 1.10.32 of "de Finibus Bonorum et Malorum",</li>
                <li>of Finibus Bonorum et Malorum"de ", </li>
                <li>1914 translation by H. Rackham</li>
              </ul>
              <Image
                src="/location.png"
                alt="Read More"
                width={100}
                height={30}
              />
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.CommentStyes}>
              <div className={styles.footerContent}>
                <div className={styles.footerhead}>
                  <h2>
                    Don't see the answer you're looking for? Post Your Question
                  </h2>
                  <h3>
                    Your question might be answered by the host, speakers or
                    GoSocial team
                  </h3>
                </div>
                <div className={styles.commentSection}>
                  <div className={styles.comment1}>
                    <div className={styles.commentStyle}>
                      <p>
                        <Image
                          src="/Oval.png"
                          alt="Comment section pic"
                          width={24}
                          height={26}
                        />
                        <span className={styles.logoName}>amyrobson</span>
                      </p>
                      <p>1 month ago</p>
                    </div>
                    <span>
                      Impressive! Though it seems the drag feature could be
                      improved. But overall it looks incredible. You’ve nailed
                      the design and the responsiveness at various breakpoints
                      works really well.
                    </span>
                  </div>
                </div>
                <div className={styles.commentSection}>
                  <div className={styles.comment1}>
                    <div className={styles.commentStyle}>
                      <p>
                        <Image
                          src="/Oval1.png"
                          alt="Comment section pic"
                          width={24}
                          height={26}
                        />
                        <span className={styles.logoName}> maxblagun</span>
                      </p>
                      <p>2 weeks ago</p>
                    </div>
                    <span>
                      Woah, your project looks awesome! How long have you been
                      coding for? I’m still new, but think I want to dive into
                      React as well soon. Perhaps you can give me an insight on
                      where I can learn React? Thanks!
                    </span>
                  </div>
                </div>
                <div className={styles.commentTextArea}>
                  <textarea
                    className={styles.commentArea}
                    rows="5"
                    placeholder="Add a comment. Use ‘@’ to tag people"
                  ></textarea>

                  <div className={styles.commentFooter}>
                    <div>
                      <Image
                        src="/Oval2.png"
                        alt="Comment section pic"
                        width={24}
                        height={26}
                      />
                    </div>
                    <div>
                      <button>Comment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.sideNavbarContainer}>
          <div className={styles.sideNavbar}>
            <div className={styles.sideNavbarContent}>
              <div className={styles.text}>
                <small>Starting From</small>
                <div className={styles.firstSideNavbar}>
                  <p className={styles.lineText}>$130</p>

                  <p className={styles.linePara}>$ 100</p>
                </div>
              </div>

              <div className={styles.text}>
                <small>Date</small>
                <div>
                  <p>25 Oct 2022</p>
                </div>
              </div>
              <div className={styles.text}>
                <small>Time</small>
                <div>
                  <p>7:30 pm</p>
                </div>
              </div>
              <div className={styles.text}>
                <small>Duration</small>
                <div>
                  <p>120 min</p>
                </div>
              </div>
              <div className={styles.text}>
                <small>Overall Rating</small>
                <div className={styles.starContent}>
                  <div className={styles.starImg}>
                    <Image
                      src="/star.png"
                      alt="Star Number"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className={styles.starText}>
                    <p>
                      4.5 <span>(230)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.text}>
                <small>Location</small>
                <div>
                  <p>Morumbi Stadium, São Paulo, Brazil</p>
                </div>
              </div>
              <button className={styles.btn}>Buy Tickets</button>
            </div>
          </div>
          <div className={styles.banner}>
            <img src="/Banner.png" alt="Banner" />
          </div>
          <div className={styles.bannerRes}>
            <Image
              src="/mediabanner.png"
              alt="Banner"
              width={360}
              height={100}
            />
          </div>
        </div>



      </div>



    </div>
  );
}
