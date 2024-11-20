import { TiHome } from "react-icons/ti";
import { IoIosPricetags } from "react-icons/io";
import {
  FaUsers,
  FaHeart,
  FaBox,
  FaChartArea,
  FaDiceD6,
  FaCog,
} from "react-icons/fa";

export const sections = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },
  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparişler",
    url: "/orders",
  },
  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
  },
  {
    icon: <FaChartArea />,
    name: "Grafikler",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
];

export const inputs = [
  {
    label: "İsim",
    name: "name",
  },
  {
    label: "Marka",
    name: "brand",
  },
  {
    label: "Kategori",
    name: "category",
  },
  {
    label: "Fiyat",
    name: "price",
    type: "number",
  },
  {
    label: "Stok",
    name: "stock",
    type: "number",
  },
  {
    label: "Açıklama",
    name: "description",
  },
];
