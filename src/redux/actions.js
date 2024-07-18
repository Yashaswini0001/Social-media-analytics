export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';
export const FETCH_FOLLOWER_ANALYTICS = 'FETCH_FOLLOWER_ANALYTICS';
export const FETCH_POST_ANALYTICS = 'FETCH_POST_ANALYTICS';
export const FETCH_ADS = 'FETCH_ADS';
export const FETCH_PROMOTIONS = 'FETCH_PROMOTIONS';

export const getUserById = (userId) => async dispatch => {
  const response = await fetch(`http://localhost:8080/users/${userId}`);
  const data = await response.json();
  
  dispatch({
    type: FETCH_USER_BY_ID,
    payload: data
  });
};
export const getUsers = () => async dispatch => {
  const response = await fetch(`http://localhost:8080/users`);
  const data = await response.json();
  
  dispatch({
    type: FETCH_USERS,
    payload: data
  });
};

export const getFollowerAnalyticsByUserId = (userId) => async dispatch => {
  const response = await fetch(`http://localhost:8080/follower-analytics/${userId}`);
  const data = await response.json();

  dispatch({
    type: FETCH_FOLLOWER_ANALYTICS,
    payload: data
  });
};

export const getPostAnalyticsByUserId = (userId) => async dispatch => {
  const response = await fetch(`http://localhost:8080/post-analytics/${userId}`);
  const data = await response.json();

  dispatch({
    type: FETCH_POST_ANALYTICS,
    payload: data
  });
};

export const getAdsByUserId = (userId) => async dispatch => {
  const response = await fetch(`http://localhost:8080/ads/${userId}`);
  const data = await response.json();

  dispatch({
    type: FETCH_ADS,
    payload: data
  });
};

export const getPromotionsByUserId = (userId) => async dispatch => {
  const response = await fetch(`http://localhost:8080/promotion/${userId}`);
  const data = await response.json();

  dispatch({
    type: FETCH_PROMOTIONS,
    payload: data
  });
};
