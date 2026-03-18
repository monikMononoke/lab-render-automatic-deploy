export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
  location: Location;
}

interface Location {
  name: string;
  url: string;
}
