export interface User {
  name: {
    first: string;
    last: string;
  };

  email: string;

  location: {
    country: string;
  };

  picture: {
    large: string;
    thumbnail: string;
  };
}
