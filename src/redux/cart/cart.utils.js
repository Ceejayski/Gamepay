const existingCartItem = ({
  prevCartItems,
  nextCartItem,
}) => prevCartItems.find((cartItem) => cartItem.id === nextCartItem.id);

const handleToCartItem = ({ prevCartItems, nextCartItem }) => {
  const CartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (CartItemExists) {
    return [
      ...prevCartItems,
    ];
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
    },
  ];
};

export default handleToCartItem;
