import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const formatWithK = (number) => {
  if (number >= 1) {
    return (number / 1).toFixed(0) + ".K";
  }
  return number;
};

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Barang</p>
          <p>Nama</p>
          <p>Harga</p>
          <p>Jumlah</p>
          <p>Total</p>
          <p>Hapus</p>
        </div>
        <hr />

        {food_list.map((item) => {
          if (cartItems[item.name] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>

                  <p>{formatWithK(item.price)}</p>

                  <p>{cartItems[item.name]}</p>

                  <p>{formatWithK(item.price * cartItems[item.name])}</p>

                  <p onClick={() => removeFromCart(item.name)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
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

          <button onClick={() => navigate("/order")}>LANJUTKAN KE PEMBAYARAN</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>Jika Anda memiliki kode promo, Masukkan di sini</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Kirim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
