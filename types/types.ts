export interface SiteData {
  slider: Slider[];
  HomePageWelcome: HomePageWelcome;
  HomePageBannerImgs: HomePageBannerImgs;
  aboutData: AboutData;
  contactData: ContactData;
  portfolioData: PortfolioDatum[];
}

export interface HomePageBannerImgs {
  desktop: string;
  tablet: string;
  mobile: string;
}

export interface HomePageWelcome {
  img: string;
  heading: string;
  paragraphs: Paragraphs;
}

export interface Paragraphs {
  one: string;
  two: string;
  three: string;
}

export interface AboutData {
  hero: Hero;
  heritage: Heritage;
  leaders: Leaders;
}

export interface Heritage {
  heritageImg: string;
  heading: string;
  paragraphs: Paragraphs;
}

export interface Hero {
  image: HomePageBannerImgs;
  headingLarge: string;
  heading: string;
  paragraph: string;
}

export interface Leaders {
  heading: string;
  leadersInfo: LeadersInfo[];
}

export interface LeadersInfo {
  name: string;
  role: string;
  img: string;
}

export interface ContactData {
  hero: Hero;
  sectionDetailsAndMap: SectionDetailsAndMap;
}

export interface SectionDetailsAndMap {
  offices: Office[];
  defaultMap: DefaultMap;
}

export interface DefaultMap {
  coordinates: Coordinates;
  zoom: number;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Office {
  name: string;
  mail: string;
  address: string;
  phone: string;
  coordinates: Coordinates;
}

export interface PortfolioDatum {
  id: number;
  title: string;
  date: string;
  image: HomePageBannerImgs;
}

export interface Slider {
  title: string;
  content: string;
  images: HomePageBannerImgs;
}
