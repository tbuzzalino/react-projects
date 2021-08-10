const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART': {
            return {
                ...state,
                cart: [],
            };
        }
        case 'REMOVE_ITEM': {
            return {
                ...state,
                //Elimino el elemento que vienen en el payload
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case 'INCREASE': {
            let temp = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        amount: item.amount + 1,
                    };
                }
                return item;
            });
            return {
                ...state,
                cart: temp,
            };
        }
        case 'DECREASE': {
            let temp = state.cart
                .map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            amount: item.amount - 1,
                        };
                    }
                    return item;
                })
                .filter((item) => item.amount !== 0);
            return {
                ...state,
                cart: temp,
            };
        }
        case 'GET_TOTALS': {
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;
                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;
                    return cartTotal;
                },
                { total: 0, amount: 0 }
            );
            total = parseFloat(total.toFixed(2));

            return {
                ...state,
                total,
                amount,
            };
        }
        case 'LOADING': {
            return {
                ...state,
                loading: true,
            };
        }
        case 'DISPLAY_ITEMS': {
            return {
                ...state,
                cart: action.payload,
                loading: false,
            };
        }
        case 'TOGGLE': {
            let tempCart = state.cart
                .map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        if (action.payload.type === 'inc') {
                            return { ...cartItem, amount: cartItem.amount + 1 };
                        }
                        if (action.payload.type === 'dec') {
                            return { ...cartItem, amount: cartItem.amount - 1 };
                        }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem.amount !== 0);
            return { ...state, cart: tempCart };
        }
    }
};

export default reducer;
