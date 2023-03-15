import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge2 from 'assets/spr-motion-large2.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion2 from 'assets/spr-motion2.mp4';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './SmartPort.module.css';

const title = 'Designing the future of Internet';
const description =
  'Welcome to my front-end portfolio. Here, I showcase my experience in web development through a variety of projects. Feel free to browse.';
const roles = [
  'Art Direction',
  'UX and UI Design',
  'Front End Development',
  'Motion Design',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={imageSprBackgroundVolcanism}
          srcSet={`${imageSprBackgroundVolcanism.src} 1080w, ${imageSprBackgroundVolcanismLarge} 2160w`}
          placeholder={imageSprBackgroundVolcanismPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://drive.google.com/file/d/17-sFLIaNENAu0jWsKbq6LEmhki4lXUQJ/view?usp=sharing"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="My first webpage"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The Problem</ProjectSectionHeading>
            <ProjectSectionText>
                When I first launched my webpage, I relied on the fundamental trio of web development technologies: HTML, CSS, and JavaScript.
              The final outcome is showed above.   
              However, as my skills and ambitions grew, I decided to revamp my site to make it more dynamic, engaging, and performant. 
              So I started exploring React, a popular front-end framework that enables developers to build complex and interactive 
              user interfaces with ease.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
           <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>The Design</ProjectSectionHeading>
              <ProjectSectionText>
                With React, I was able to modularize my code, reuse components, and manage state more efficiently, making my codebase cleaner, more scalable, 
                and more maintainable. But I didn't stop there. I wanted to push the boundaries of web development even further. 
                And then I discovered Three.js, a powerful 3D library that enables developers to create stunning visual effects and animations in the browser.

                By integrating Three.js into my React-based webpage, I was able to add a new dimension of interactivity and engagement to my site, 
                allowing visitors to explore my content in a more immersive and memorable way. With Three.js, 
                I was able to create beautiful and responsive 3D objects, apply complex lighting and shading effects, and leverage the power of
                WebGL to accelerate rendering and optimize performance.<br></br> I mean who does not love dark themes and moving stuff ? 
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
             <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion2, width: 1080 },
                  { src: videoSprMotionLarge2, width: 1920 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="A view of the webpage nowadays"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            <ProjectTextRow>
              <ProjectSectionHeading>The End</ProjectSectionHeading>
              <ProjectSectionText>
                But I wanted to make my site even more performant and user-friendly. 
                And then I turned to Next.js, a server-side rendering framework that optimizes web pages for speed, scalability, and SEO. 
                With Next.js, I was able to pre-render my React components on the server, reduce loading times, and improve the overall user experience. 
                I also gained the benefits of automatic code-splitting, route prefetching, and API integration, making my site more efficient and flexible.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Summary</ProjectSectionHeading>
              <ProjectSectionText>
                My decision to upgrade my webpage from a simple HTML/CSS/JS site to a React-based, Three.js-enhanced, and Next.js-optimized 
                site was driven by my desire to create a cutting-edge, high-performance, and user-friendly web experience that showcases my skills 
                and creativity in web development. With these powerful tools and frameworks at my disposal, I am confident that I can continue to push 
                the boundaries of what is possible in web development and create innovative and memorable web experiences for my clients and users."
              </ProjectSectionText>
            </ProjectTextRow>
            <a href="https://github.com/aelpires/portfolio">
              <Image
                raised
                key={themeId}
                srcSet={
                  isDark
                    ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                    : [imageSprStoryboarderLight, imageSprStoryboarderLightLarge]
                }
                placeholder={
                  isDark
                    ? imageSprStoryboarderDarkPlaceholder
                    : imageSprStoryboarderLightPlaceholder
                }
                alt="github repo"
                sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              />
            </a>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          
        </ThemeProvider>
        </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
