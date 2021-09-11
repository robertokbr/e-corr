declare type Point = {
  id: string;
  user: User;
  address: string;
  category: {
    id: number;
    name: string;

  };
  description: string;
  latitude: number;
  longitude: number;
  pointImages: Array<{
    image_url: string;
  }>;
  price: string;
  title: string;
  tags: Array<{
    tag_details: {
      name: string;
    }
  }>;
  number: string;
  created_at: string;
};
