import { landingPage } from "./pages/landing-page";
import { header } from "./modules/header";
// import { footer } from "./modules/footer";
import { hero } from "./modules/hero";
import { link, linkWithIcon } from "./common/link";
import { dropdown } from "./components/dropdown";
import { image } from "./common/image";
import { blockContent } from "./common/block-content";
import { contentImageBlock } from "./modules/content-image-block";
import { testimonials } from "./modules/testimonials";
import { logoCarousel } from "./modules/logo-carousel";
import { featureCards } from "./modules/feature-cards";
import { contactForm } from "./modules/contact-form";
import { basicRichTextEditor } from "./common/rich-text-editor";
import { sectionId } from "./common/section-id";

export const schemas = [
  blockContent,
  image,
  landingPage,
  header,
  // footer,
  link,
  linkWithIcon,
  dropdown,
  hero,
  contentImageBlock,
  testimonials,
  logoCarousel,
  featureCards,
  contactForm,
  basicRichTextEditor,
  sectionId
];
