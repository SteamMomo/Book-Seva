import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./ProductDetails.css";
import MapImg from "../images/map.png";
import vivombl from "../images/vivombl.jpg";
import firebase from "../../config/firebase";

function ProductDetailSectionTwo({ product }) {
  const [user, setUser] = useState({})
  useEffect(() => {
    firebase.database().ref("/users")
      .child(product.uid)
      .once('value', (snapshots) => {
        setUser(snapshots.val())
      });
  }, []);

  return (
    <div className="col-lg-5 col-12 col-md-12">
      <div className="border rounded mx-2">
        <div className="priceandicon">
          <div>
            <h1 className="ml-3">{product.price}</h1>
          </div>
          <div className="pt-3">
            <FontAwesomeIcon icon={faShareAlt} size="lg" className="mx-3" />
            <FontAwesomeIcon icon={faHeart} size="lg" className="mr-4" />
          </div>
        </div>
        <p className="ml-3">{product.title}</p>
        <br />
        <div className="priceandicon">
          <div>
            <p className="ml-3">{product.description}</p>
          </div>
          <div>
            <p className="mr-4">{new Date(user.timestamp).toDateString()}</p>
          </div>
        </div>
      </div>
      <div className="border border-dark rounded mx-2 my-3">
        <h6 className="ml-3 mt-3">SELLER DESCRIPTION</h6>
        <div className="avatarandname">
          <div>
            <img
              src={user.imageUrl}
              alt=""
              className="img-rounded ml-3 border-radius-50"
              width="68"
              height="68"
            />
          </div>
          <div>
         <h4 className="ml-3">{user.name}</h4>
  <p className="ml-3">{new Date(user.timestamp).toDateString()}</p>
          </div>
        </div>
        <br />
        <button className="text-center chatwithSeller ml-3 mr-5 btn btn-block">
          {" "}
          Chat with Seller
        </button>

        <div className="d-flex justify-content-center mb-3">
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" className="mx-3" />
          <span className="productDetails__phoneNum">+92{product.phone}</span>
        </div>
      </div>
      <div className="border rounded mx-2 p-3 pb-4">
        <h4>Posted in</h4>
        <p>{product.address}</p>
        {/* <img src={MapImg} alt="" className="h-auto img-fluid" /> */}
      </div>

      <div className="border rounded p-3 mx-2 my-5 pb-4">
        <img src={vivombl} alt="" className="img-fluid" />
      </div>
    </div>
  );
}

export default ProductDetailSectionTwo;
