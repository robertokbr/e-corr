declare type Point = {
  id: string;
  user: User;
  address: string;
  category: string;
  description: string;
  latitude: number;
  longitude: number;
  pointImages: Array<{
    image_url: string;
  }>;
  price: string;
  title: string;
  type: string;
  number: string;
  created_at: string;
};
