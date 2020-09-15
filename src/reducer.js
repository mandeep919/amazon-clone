export const initialState ={
  basket:[],
  user:null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount,item)=> item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){
    case 'ADD_TO_BASKET':
      return{
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET': 
      // cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id == action.id)

      if (index >= 0){
        // remove item if exist in remove in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id} as its not in the basket)`
        );
      }

      return {...state, basket:newBasket};
    default:
      return state;
  }
};

export default reducer;

// id:id,
//     title:title,
//     price:price,
//     rating:rating,
//     image:image,
//   }],