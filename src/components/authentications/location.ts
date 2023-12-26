export interface Carrier {
  name: unknown;
  mcc: unknown;
  mnc: unknown;
}

export interface Company {
  domain: string;
  name: string;
  type: string;
}

export interface Connection {
  asn: number;
  domain: string;
  organization: string;
  route: string;
  type: string;
}

export interface Negative {
  prefix: string;
  suffix: string;
}

export interface Positive {
  prefix: string;
  suffix: string;
}

export interface Format {
  negative: Negative;
  positive: Positive;
}

export interface Currency {
  code: string;
  name: string;
  name_native: string;
  plural: string;
  plural_native: string;
  symbol: string;
  symbol_native: string;
  format: Format;
}

export interface Continent {
  code: string;
  name: string;
}

export interface Flag {
  emoji: string;
  emoji_unicode: string;
  emojitwo: string;
  noto: string;
  twemoji: string;
  wikimedia: string;
}

export interface Language {
  code: string;
  name: string;
  native: string;
}

export interface Country {
  area: number;
  borders: string[];
  calling_code: string;
  capital: string;
  code: string;
  name: string;
  population: number;
  population_density: number;
  flag: Flag;
  languages: Language[];
  tld: string;
}

export interface Region {
  code: string;
  name: string;
}

export interface Language2 {
  code: string;
  name: string;
  native: string;
}

export interface Location {
  continent: Continent;
  country: Country;
  region: Region;
  city: string;
  postal: string;
  latitude: number;
  longitude: number;
  language: Language2;
  in_eu: boolean;
}

export interface Security {
  is_abuser: boolean;
  is_attacker: boolean;
  is_bogon: boolean;
  is_cloud_provider: boolean;
  is_proxy: boolean;
  is_relay: boolean;
  is_tor: boolean;
  is_tor_exit: boolean;
  is_vpn: boolean;
  is_anonymous: boolean;
  is_threat: boolean;
}

export interface TimeZone {
  id: string;
  abbreviation: string;
  current_time: string;
  name: string;
  offset: number;
  in_daylight_saving: boolean;
}

export interface Device {
  brand: string;
  name: string;
  type: string;
}

export interface Engine {
  name: string;
  type: string;
  version: string;
  version_major: string;
}

export interface Os {
  name: string;
  type: string;
  version: string;
}

export interface UserAgent {
  header: string;
  name: string;
  type: string;
  version: string;
  version_major: string;
  device: Device;
  engine: Engine;
  os: Os;
}

export interface ILocation {
  ip: string;
  type: string;
  hostname: unknown;
  carrier: Carrier;
  company: Company;
  connection: Connection;
  currency: Currency;
  location: Location;
  security: Security;
  time_zone: TimeZone;
  user_agent: UserAgent;
}
