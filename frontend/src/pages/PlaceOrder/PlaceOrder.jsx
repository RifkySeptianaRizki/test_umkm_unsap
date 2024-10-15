import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informasi Pengiriman</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nama Lengkap" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="No Handphone" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Alamat Lengkap" />
          <div className="multi-fields">
            <input type="text" placeholder="Nama Jalan, Gedung, No.Rumah" />
          </div>
          <input type="text" placeholder="Detail Lainya ( blok / Unit No.Patokan) " />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Total Keranjang</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>
                Rp.{" "}
                {new Intl.NumberFormat("id-ID", {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 6,
                })
                  .format(getTotalCartAmount())
                  .replace(/,/g, ".")}{" "}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Ongkos Kirim</p>
              <p>
                Rp.{" "}
                {new Intl.NumberFormat("id-ID", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(getTotalCartAmount() === 0 ? 0 : 2000)}{" "}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Rp.{" "}
                {new Intl.NumberFormat("id-ID", {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 6,
                })
                  .format(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2)
                  .replace(/,/g, ".")}{" "}
              </b>
            </div>
          </div>

          <button>PILIH METODE PEMBAYARAN</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
