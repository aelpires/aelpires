import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
/*
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge2 from 'assets/spr-motion-large2.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion2 from 'assets/spr-motion2.mp4';
import imageSprGithubDarkLarge from 'assets/spr-github-dark-large.png';
import imageSprGithubDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprGithubDark from 'assets/spr-github-dark.png';
import imageSprGithubLightLarge from 'assets/spr-github-light-large.png';
import imageSprGithubLightPlaceholder from 'assets/spr-github-light-placeholder.png';
import imageSprGithubLight from 'assets/spr-github-light.png';
import { Image } from 'components/Image';
*/
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import Cards from './Card/Cards';
import { Skills } from './Skills/Skills';

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
            <ProjectSectionHeading>Main Projects</ProjectSectionHeading>
            <Cards />
            <Skills />
          </ProjectSectionContent>
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
              <ProjectSectionHeading>
                <div className='skills-h4'> More Projects </div> 
                </ProjectSectionHeading>
              <ProjectSectionText>
                <div className='neon-cluster'> Coming SOON...  </div>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert></ThemeProvider>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
