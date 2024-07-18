import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getFollowerAnalyticsByUserId,
  getPostAnalyticsByUserId,
  getUserById,
  getAdsByUserId,
  getPromotionsByUserId
} from '../redux/actions';
import { FaUser, FaChartLine, FaAd, FaBullhorn } from 'react-icons/fa';

const UserAnalytics = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const followerAnalytics = useSelector(state => state.followerAnalytics);
  const postAnalytics = useSelector(state => state.postAnalytics);
  const ads = useSelector(state => state.ads);
  const promotions = useSelector(state => state.promotions);

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
      dispatch(getFollowerAnalyticsByUserId(userId));
      dispatch(getPostAnalyticsByUserId(userId));
      dispatch(getAdsByUserId(userId));
      dispatch(getPromotionsByUserId(userId));
    } else {
      console.error("userId is undefined");
    }
  }, [dispatch, userId]);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">User Analytics</h2>
      {user ? (
        <div className="bg-white shadow-lg border rounded-lg p-6 mb-8 flex items-center">
          <FaUser className="text-5xl text-blue-600 mr-6"/>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">{user.name}</h3>
            <p className="text-gray-600 mt-2">{user.bio}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">Loading user data...</p>
      )}
      <div className="bg-white shadow-lg border rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaChartLine className="text-2xl text-blue-600 mr-2"/> Follower Analytics
        </h3>
        {followerAnalytics ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Metric</th>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Number of Followers</td>
                <td className="border px-4 py-2 text-gray-800">{followerAnalytics.numberOfFollowers}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Number of Following</td>
                <td className="border px-4 py-2 text-gray-800">{followerAnalytics.numberOfFollowing}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Accounts Reached</td>
                <td className="border px-4 py-2 text-gray-800">{followerAnalytics.accountsReached}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Accounts Engaged</td>
                <td className="border px-4 py-2 text-gray-800">{followerAnalytics.accountsEngaged}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">Loading follower analytics...</p>
        )}
      </div>
      <div className="bg-white shadow-lg border rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaChartLine className="text-2xl text-blue-600 mr-2"/> Post Analytics
        </h3>
        {postAnalytics ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Metric</th>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Total Posts</td>
                <td className="border px-4 py-2 text-gray-800">{postAnalytics.totalPosts}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Total Stories</td>
                <td className="border px-4 py-2 text-gray-800">{postAnalytics.totalStories}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Total Saves</td>
                <td className="border px-4 py-2 text-gray-800">{postAnalytics.totalSaves}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Total Comments</td>
                <td className="border px-4 py-2 text-gray-800">{postAnalytics.totalComments}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Total Shares</td>
                <td className="border px-4 py-2 text-gray-800">{postAnalytics.totalShares}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">Loading post analytics...</p>
        )}
      </div>
      <div className="bg-white shadow-lg border rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaAd className="text-2xl text-blue-600 mr-2"/> Ads
        </h3>
        {ads.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Title</th>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Clicks</th>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Impressions</th>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Spend</th>
              </tr>
            </thead>
            <tbody>
              {ads.map(ad => (
                <tr key={ad.id}>
                  <td className="border px-4 py-2">{ad.title}</td>
                  <td className="border px-4 py-2 text-gray-800">{ad.clicks}</td>
                  <td className="border px-4 py-2 text-gray-800">{ad.impressions}</td>
                  <td className="border px-4 py-2 text-gray-800">{ad.spend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">Loading ads...</p>
        )}
      </div>
      <div className="bg-white shadow-lg border rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaBullhorn className="text-2xl text-blue-600 mr-2"/> Promotions
        </h3>
        {promotions.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Title</th>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Details</th>
                <th className="py-2 px-4 bg-blue-100 text-blue-900 font-semibold">Performance</th>
              </tr>
            </thead>
            <tbody>
              {promotions.map(promotion => (
                <tr key={promotion.id}>
                  <td className="border px-4 py-2">{promotion.title}</td>
                  <td className="border px-4 py-2 text-gray-800">{promotion.details}</td>
                  <td className="border px-4 py-2 text-gray-800">{promotion.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center">Loading promotions...</p>
        )}
      </div>
    </div>
  );
};

export default UserAnalytics;
