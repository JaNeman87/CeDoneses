export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_ARTICLE_FROM_CART = "DELETE_ARTICLE_FROM_CART";
export const ORDER_COMPLETED = "ORDER_COMPLETED";
export const USER_INFO = "USER_INFO";
export const DELIVERY_INFO = "DELIVERY_INFO";
export const IS_THERE_AN_ADDRESS = "IS_THERE_AN_ADDRESS";

export const addToCart = (name, weight, info, price, image) => {
  return {
    type: ADD_TO_CART,
    name: name,
    weight: weight,
    info: info,
    price: price,
    image: image
  };
};

export const deleteArticleFromCart = id => {
  return {
    type: DELETE_ARTICLE_FROM_CART,
    id: id
  };
};

export const orderCompleted = () => {
  return {
    type: ORDER_COMPLETED
  };
};

export const userInfo = (email, uid) => {
  return {
    type: USER_INFO,
    email: email,
    uid: uid
  };
};

export const deliveryInfo = (usersName, usersAddress, phoneNum) => {
  return {
    type: DELIVERY_INFO,
    usersName: usersName,
    usersAddress: usersAddress,
    phoneNum: phoneNum
  };
};

export const isThereAnAddress = address => {
  return {
    type: IS_THERE_AN_ADDRESS,
    address: address
  };
};
