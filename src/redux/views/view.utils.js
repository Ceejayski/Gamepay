const existingViewgame = ({
  prevGameItems,
  nextGameItem,
}) => prevGameItems.find((cartItem) => cartItem.id === nextGameItem.id);

const handleAddtoView = ({
  prevGameItems,
  nextGameItem,
}) => {
  const gameExists = existingViewgame({
    prevGameItems,
    nextGameItem,
  });
  if (prevGameItems.length === 6) {
    const arr = prevGameItems.slice(1, 6);
    return [
      ...arr,
      {
        ...nextGameItem,
      },
    ];
  }
  if (gameExists) {
    return [
      ...prevGameItems,
    ];
  }
  return [
    ...prevGameItems,
    {
      ...nextGameItem,
    },
  ];
};

export default handleAddtoView;
