import Loader from "@/components/loaders/Loader";
import TableContainer from "@/components/table/TableContainer";
import Title from "@/components/title";
import { getOrders } from "@/utils/api";
import { Suspense } from "react";

const Orders = () => {
  return (
    <div>
      <Title>Siparişler</Title>

      <Suspense fallback={<Loader />}>
        <List />
      </Suspense>
    </div>
  );
};

const List = async () => {
  const data = await getOrders();

  const colors = {
    Shipped: "text-blue-600",
    Delivered: "text-green-600",
    Processing: "text-yellow-600",
  };

  return (
    <TableContainer>
      <thead className="border-b shadow">
        <tr>
          <th className="py-3">Sipariş Id</th>
          <th>Ürün Sayısı</th>
          <th>Toplam Fiyat</th>
          <th>Sipariş Tarihi</th>
          <th>Gönderim Adresi</th>
          <th>Sipariş Durumu</th>
        </tr>
      </thead>

      <tbody>
        {data.map((order, key) => (
          <tr key={key}>
            <td>{order.order_id}</td>

            <td className="text-green-600 whitespace-nowrap">
              $ {order.total_price}
            </td>

            <td>{order.items.reduce((a, b) => a + b.quantity, 0)}</td>

            <td className="whitespace-nowrap">
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>

            <td>{order.shipping_address.city}</td>

            <td>
              <span className={`${colors[order.status]} font-semibold`}>
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Orders;
