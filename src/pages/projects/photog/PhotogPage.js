import blenderBackgroundLarge from 'assets/volkihar-background-large.jpg';
import blenderBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import blenderBackground from 'assets/volkihar-background.jpg';
import blenderSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import photoSlide1Large from 'assets/photoslide1-large.jpg';
import photoSlide1 from 'assets/photoslide1.jpg';
import photoSlide2Large from 'assets/photoslide2-large.jpg';
import photoSlide2 from 'assets/photoslide2.jpg';
import photoSlide3Large from 'assets/photoslide3-large.jpg';
import photoSlide3 from 'assets/photoslide3.jpg';
import photoSlide4Large from 'assets/photoslide4-large.jpg';
import photoSlide4 from 'assets/photoslide4.jpg';
import photoSlide5Large from 'assets/photoslide5-large.jpg';
import photoSlide5 from 'assets/photoslide5.jpg';
import photoSlide6Large from 'assets/photoslide6-large.jpg';
import photoSlide6 from 'assets/photoslide6.jpg';
import photoSlide7Large from 'assets/photoslide7-large.jpg';
import photoSlide7 from 'assets/photoslide7.jpg';
import photoSlide8Large from 'assets/photoslide8-large.jpg';
import photoSlide8 from 'assets/photoslide8.jpg';
import photoSlide9Large from 'assets/photoslide9-large.jpg';
import photoSlide9 from 'assets/photoslide9.jpg';
import photoSlide10Large from 'assets/photoslide10-large.jpg';
import photoSlide10 from 'assets/photoslide10.jpg';
import photoSlide11Large from 'assets/photoslide11-large.jpg';
import photoSlide11 from 'assets/photoslide11.jpg';
import photoSlide12Large from 'assets/photoslide12-large.jpg';
import photoSlide12 from 'assets/photoslide12.jpg';
import photoSlide13Large from 'assets/photoslide13-large.jpg';
import photoSlide13 from 'assets/photoslide13.jpg';
import photoSlide14Large from 'assets/photoslide14-large.jpg';
import photoSlide14 from 'assets/photoslide14.jpg';
import photoSlide15Large from 'assets/photoslide15-large.jpg';
import photoSlide15 from 'assets/photoslide15.jpg';
import photoSlide16Large from 'assets/photoslide16-large.jpg';
import photoSlide16 from 'assets/photoslide16.jpg';
import photoSlide17Large from 'assets/photoslide17-large.jpg';
import photoSlide17 from 'assets/photoslide17.jpg';
import photoSlide18Large from 'assets/photoslide18-large.jpg';
import photoSlide18 from 'assets/photoslide18.jpg';
import styles from './Profile.module.css';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import { Link } from 'components/Link';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from 'layouts/Project';


const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));

const title = 'Photography/video';
const description =
  'Capture every detail with our professional photography and videography services, our equipment includes a camera with a wide range of lenses, a drone and a GoPro. We also offer post-editing services to enhance your memories. Contact us to learn more.';
const roles = ['Photography','Videography','Post-Editing'];

export function PhotogPage() {
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
        <Fragment>
          <ProjectHeader
            title={title}
            description={description}
            roles={roles}
          />
            <div className={styles.column}>
              <Link 
                secondary
                iconHoverShift
                icon="chevronRight"
                href="/contact"><b>Send me a Message</b>
              </Link>
            </div>
        </Fragment>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={blenderSlidePlaceholder}
              images={[
                {
                  srcSet: [photoSlide1, photoSlide1Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Sunset in Figueira-da-foz.',
                },
                {
                  srcSet: [photoSlide2, photoSlide2Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'LightHouse in Sagres',
                },
                {
                  srcSet: [photoSlide3, photoSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Sabor River in Mogadouro, Bragança',
                },
                {
                  srcSet: [photoSlide4, photoSlide4Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Ribeira, Porto',
                },
                {
                  srcSet: [photoSlide5, photoSlide5Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Serra da Castanheira seen from Algoso Castle, Mogadouro',
                },
                {
                  srcSet: [photoSlide6, photoSlide6Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'More mountains.',
                },
                {
                  srcSet: [photoSlide7, photoSlide7Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A happy cow living his life',
                },
                {
                  srcSet: [photoSlide8, photoSlide8Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Serra do Pilar, Porto',
                },
                {
                  srcSet: [photoSlide9, photoSlide9Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Mountain with fog in Serra da Castanheira',
                },
                {
                  srcSet: [photoSlide10, photoSlide10Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'D Luis bridge in Porto.',
                },
                {
                  srcSet: [photoSlide11, photoSlide11Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Honda Civic type-r Car photography.',
                },
                {
                  srcSet: [photoSlide12, photoSlide12Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Sevilla , AlCasar',
                },
                {
                  srcSet: [photoSlide13, photoSlide13Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'S Bento train Station in Porto',
                },
                {
                  srcSet: [photoSlide14, photoSlide14Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Palacio da Pena, Sintra, Portugal',
                },
                {
                  srcSet: [photoSlide15, photoSlide15Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Castelo de Mogadouro, Portugal.',
                },
                {
                  srcSet: [photoSlide16, photoSlide16Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Rio Sabor, Mogadouro',
                },
                {
                  srcSet: [photoSlide17, photoSlide17Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Aliados in Porto.',
                },
                {
                  srcSet: [photoSlide18, photoSlide18Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'Rio sabor .',
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
