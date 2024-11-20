"use client";

import { deleteProduct } from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = () => {
    deleteProduct(id)
      // silme işlemi başarılı olduğu zaman
      .then(() => {
        // sayfayı yenile (ürünler tekrar alınsın)
        router.refresh();
        // bildirim gönder
        toast.success("Ürün kaldırıldı!");
      });
  };

  return (
    <button
      onClick={handleDelete}
      className="py-1 px-3 rounded-md bg-[#f3a5a5] hover:bg-[#f45757]"
    >
      Sil
    </button>
  );
};

export default DeleteButton;
