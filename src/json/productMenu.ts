import {
  BANKRUPTCY_REMOVAL_LETTERS,
  CREDIT_DISPUTE_LETTERS,
  INQUIRY_REMOVAL_LETTERS,
  US_COURT_COMPLAINT,
} from '@/constant';
import { ProductEnum, RoutePathEnum } from '@/enum';

export interface IProductMenu {
  text: string;
  route: string;
  productId: string;
}

export const ProductMenu: IProductMenu[] = [
  {
    text: CREDIT_DISPUTE_LETTERS,
    route: RoutePathEnum.PRODUCT,
    productId: ProductEnum.PRODUCT_1,
  },
  {
    text: BANKRUPTCY_REMOVAL_LETTERS,
    route: RoutePathEnum.PRODUCT,
    productId: ProductEnum.PRODUCT_2,
  },
  {
    text: INQUIRY_REMOVAL_LETTERS,
    route: RoutePathEnum.PRODUCT,
    productId: ProductEnum.PRODUCT_3,
  },
  {
    text: US_COURT_COMPLAINT,
    route: RoutePathEnum.PRODUCT,
    productId: ProductEnum.PRODUCT_5,
  },
];
