import type React from 'react';
import styles from './styles.module.css';

type HeadingProfileProps = {
  UrlImgBanner: string;
  UrlImgProfile: string;
  Name: string;
  children?: React.ReactNode
};

export function HeadingProfile({
  UrlImgBanner,
  UrlImgProfile,
  Name,
  children
}: HeadingProfileProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>
          <img src={UrlImgBanner} alt='' />
        </div>
        <div className={styles.ProfilePhoto}>
          <img src={UrlImgProfile} alt='' />
        </div>
      </div>
      <div className={styles.containerBtn}>
        <h2>{Name}</h2>
        <div className={styles.containerChildren}>
          {children}
        </div>
      </div>
    </>
  );
}
