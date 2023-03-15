import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My name is Alex, I live in Porto, Portugal working as a Front-end Developer + Designer as{' '}
      <Link href="https://www.freelancer.com">Freelancer</Link> and <Link href="/projects/photog">Part-Time Photographer</Link>. 
    </Text>
      
    <Text className={styles.description} data-visible={visible} size="l" as="p">
        My journey into code started when I took a high school degree in IT Systems Management and Programming Technician (lvl 4) in which I was introduced to Front-end, Back-end, Operating Systems, How to assemble and manage Networks, together with a range of subjects such as Portuguese, Mathematics, English and all necessary to academic development. 
      In the university I took a Sports degree, but my passion for computers always remained.
    </Text>  
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">      
        Before the covid outbreak I started re-learning by myself some Front-End basics like HTML, CSS and JavaScript, 
      which led me to go back to school, this time in Porto to a Front-End Devopment bootcamp on <Link href="https://weareedit.io/">EDIT.</Link>.   
      There I learned more about HTML, CSS, JavaScript and also introduced me to UX Design, Responsive Web Development and React Foundations.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">  
        Time passed and I increased my knowledge and skills.
      Being comfortable with code allows me
      to rapidly prototype and validate experiences. Interested in the tools and
      software? I use check out my <Link href="/uses">uses page</Link>.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to go to the gym and workout, <Link href="/projects/photog">travel</Link>, play video games and{' '}
      <Link href="/projects/blender">create digital content</Link>. Feel free to drop me a line.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
