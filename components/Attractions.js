import styles from '../app/page.module.css';
import { Card, CardHeader, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ScrollBar from 'react-perfect-scrollbar';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const posts = [
  {
    id: 1,
    link: '/attraction',
    img: '/images/nyc.png',
    heading: `2011 Super Junior SM Town Live '10 World Tour New York City`,
    para: `Directly seated and inside for you to enjoy the show.`,
  },
  {
    id: 2,
    link: '/eventPage',
    img: '/images/nyc.png',
    heading: `2011 Super Junior SM Town Live '10 World Tour New York City`,
    para: `Directly seated and inside for you to enjoy the show.`,
  },
  {
    id: 3,
    link: '/city',
    img: '/images/nyc.png',
    heading: `2011 Super Junior SM Town Live '10 World Tour New York City`,
    para: `Directly seated and inside for you to enjoy the show.`,
  },
];

const Attractions = () => {
  const [data,setData]=useState([]);
  const getData=async()=>{
    try {
      let response = await axios({
        method: 'get',
        url: `http://localhost:3001/v1/randomEvents`,
        json: true
    });
    // console.log(response.data.data);
    setData(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const MAX_POSTS_WITHOUT_SCROLL = 1;
  const media = useMediaQuery('(max-width: 1200px)');
  const [isMobile, setIsMobile] = useState(media);
  const [isScrollable, setIsScrollable] = useState(false);
  useEffect(() => {
    setIsMobile(media);
    setIsScrollable(posts.length > 0);
  }, [media]);

  useEffect(()=>{
    getData();
  },[0])
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.postsHeading}><b>Attractions near you</b></h1>


      {isMobile ? (
        <ScrollBar
          sx={{
            display: 'flex',
            overflowX: 'scroll',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', // Optional: for iOS momentum scrolling
          }}
          className={styles.postsContainer}
        >
          {data.map((post) => (
            // console.log();
            <a key={post.event_id} href={post.url} className={styles.event} >
              <Card className={styles.postCard}>
                <img className={styles.cardImage} src={post.img} alt="Image" />

                <div className={styles.textContent}>
                  <h1 className={styles.cardHeading}><b>{post.title}</b></h1>

                  <CardContent>
                    <Typography
                      variant="body1"
                      component="p"
                      className={styles.postContent}
                    >
                      {post.description}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </a>
          ))}
        </ScrollBar>
      ) : (
        <div className={styles.postsContainer}>
          {data.map((post) => (
            <a key={post.event_id} href={post.url} className={styles.event}>
              <Card className={styles.postCard}>
                <img className={styles.cardImage} src={post.img} alt="Image" />

                <div className={styles.textContent}>
                    <b className={styles.cardHeading}>{post.title}</b>
                  

                  <CardContent>
                    <Typography
                      variant="body1"
                      component="p"
                      className={styles.postContent}
                    >
                      {post.description}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Attractions;
