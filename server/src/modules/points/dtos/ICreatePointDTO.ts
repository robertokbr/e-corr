interface ICreatePointDTO {
  user_id: string;
  title: string;
  description: string;
  price: string;
  category_id: number;
  tag_ids: number[];
  address: string;
  longitude: string;
  latitude: string;
  pointImages: string[];
}
