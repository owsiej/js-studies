export interface Player {
  name: string;
  email: string;
  dayOfBirth: {
    year: number;
    month: string;
    day: number;
  };
}
