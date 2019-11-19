const setFavoriteAnimal = favoriteAnimal => {
  return {
    type: 'setFavoriteAnimal',
    value: favoriteAnimal
  };
};

const setPersonData = personData => {
  return {
    type: 'setPersonData',
    value: personData
  };
};

const watchPersonData = () => {
  return function(dispatch) {
    firebase
      .database()
      .ref('person')
      .on(
        'value',
        function(snapshot) {
          var personData = snapshot.val();
          dispatch(setPersonData(personData));
        },
        function(error) {}
      );
  };
};

