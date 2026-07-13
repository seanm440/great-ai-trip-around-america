export type StopStatus = "completed" | "in-progress" | "upcoming" | "planned";

export interface CompanyVisit {
  name: string;
  category: string;
  blurb: string;
  sourceName: string;
  sourceUrl: string;
}

export interface DataCenterVisit {
  name: string;
  operator: string;
  blurb: string;
  sourceName: string;
  sourceUrl: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  order: number;
  status: StopStatus;
  dateWindow: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  tagline: string;
  description: string;
  themes: string[];
  companies: CompanyVisit[];
  dataCenters: DataCenterVisit[];
  universities: string[];
  highlights: string[];
}

export interface Waypoint {
  id: string;
  name: string;
  stateAbbr: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  business: {
    name: string;
    blurb: string;
    sourceName: string;
    sourceUrl: string;
  };
}

export interface TimelineEntry {
  label: string;
  title: string;
  description: string;
  status: StopStatus;
}

export interface VisitCategory {
  title: string;
  description: string;
  icon: string;
}

export interface BusFeature {
  key: string;
  title: string;
  description: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ImpactStat {
  value: string;
  label: string;
  source: string;
  url: string;
}

export interface InfrastructureFact {
  value: string;
  label: string;
  source: string;
  url: string;
  tone: "benefit" | "consideration";
}

export interface OpportunityStory {
  sector: string;
  headline: string;
  body: string;
  stat?: string;
  statLabel?: string;
  sourceName: string;
  sourceUrl: string;
}
