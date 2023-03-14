import blenderBackgroundLarge from 'assets/volkihar-background-large.jpg';
import blenderBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import blenderBackground from 'assets/volkihar-background.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import blenderSlide1Large from 'assets/volkihar-slide-1-large.jpg';
import blenderSlide1 from 'assets/volkihar-slide-1.jpg';
import blenderSlide2Large from 'assets/volkihar-slide-2-large.jpg';
import blenderSlide2 from 'assets/volkihar-slide-2.jpg';
import blenderSlide3Large from 'assets/volkihar-slide-3-large.jpg';
import blenderSlide3 from 'assets/volkihar-slide-3.jpg';
import blenderSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Blender.module.css';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));
const Zombie = dynamic(() => import('./Zombie').then(mod => mod.Zombie));

const title = 'Blender 3D';
const description =
  'A free and open-source 3D creation software with advanced features, flexible customization options, and a supportive community of users.';
const roles = ['3D Modelling','Animation','Graphic Design','Texturing' ];

export function BlenderPage() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[blenderBackground, blenderBackgroundLarge]}
          placeholder={blenderBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel="Get Blender"
          url="https://www.blender.org/download/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.zombie}>
              <Zombie alt="3D model from blender" />
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>3D Blender Designer</ProjectSectionHeading>
              <ProjectSectionText>
              I have added Blender to my skillset because of my passion for creating engaging content and exploring new creative avenues. 
              As a front-end developer, I recognized the potential for Blender to elevate my skills by incorporating 3D animations and images into my projects. 
              Blender's extensive features and tools have enabled me to produce impressive visuals that captivate audiences and add an extra dimension to my designs.
              </ProjectSectionText>
              <ProjectSectionText>
              Blender 3D is a powerful open-source software for creating 3D models, animations, and visual effects. 
              It offers a wide range of features and tools that make it an ideal choice for both beginners and professionals in the 3D industry. 
              One of the biggest benefits of using Blender 3D is that it's completely free, making it accessible to anyone who wants to explore the world of 3D art. 
              Additionally, its user-friendly interface and extensive community support make it easy to learn and use. 
              Blender 3D also offers flexibility and customization options, allowing users to create unique and personalized projects. 
              Whether you're a hobbyist or a professional, Blender 3D is a great software to have in your portfolio, 
              as it can help showcase your skills and creativity in 3D art and design.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={blenderSlidePlaceholder}
              images={[
                {
                  srcSet: [blenderSlide1, blenderSlide1Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A giant black Hole in space.',
                },
                {
                  srcSet: [blenderSlide2, blenderSlide2Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A close up of a hall with a monstenr on the end of it',
                },
                {
                  srcSet: [blenderSlide3, blenderSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A hollogram of master monkey and a servant taking a portal to narnia.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
