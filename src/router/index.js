import React, {lazy, Suspense} from 'react'
import {Navigate, useRoutes} from 'react-router-dom'


const HyDiscover = lazy(() => import('@/pages/discover'))
const HyMine = lazy(() => import('@/pages/mine'))
const HyFriend = lazy(() => import('@/pages/friend'))
const Recommend = lazy(() => import('@/pages/discover/c-pages/recommend'))
const Ranking = lazy(() => import('@/pages/discover/c-pages/ranking'))
const Songs = lazy(() => import('@/pages/discover/c-pages/songs'))
const Djradio = lazy(() => import('@/pages/discover/c-pages/djradio'))
const Artist = lazy(() => import('@/pages/discover/c-pages/artist'))
const Album = lazy(() => import('@/pages/discover/c-pages/album'))

const
  routes = [
    //重定向
    {
      path: '/',
      element: <Navigate to="/discover"/>
    },
    {
      name: '发现音乐',
      path: '/discover',
      element: <HyDiscover/>,
      children: [
        {
          name: '发现音乐',
          path: "/discover",
          element: <Navigate to="recommend"/>
        },
        {
          name: '推荐',
          path: "recommend",
          element: <Recommend/>
        },
        {
          name: '排行榜',
          path: "ranking",
          element: <Ranking/>
        },
        {
          name: '歌单',
          path: "songs",
          element: <Songs/>
        },
        {
          name: '主播电台',
          path: "djradio",
          element: <Djradio/>
        },
        {
          name: '歌手',
          path: "artist",
          element: <Artist/>
        },
        {
          name: '新碟上架',
          path: "album",
          element: <Album/>
        },
      ]
    },
    {
      name: '我的音乐',
      path: '/mine',
      element: <HyMine/>,
    },
    {
      name: '朋友',
      path: '/friend',
      element: <HyFriend/>,
    },
  ]

const getWrappedRoutes = (routes) => {
  return routes.map((item) => {
    if (item.children) {
      item.children = getWrappedRoutes(item.children);
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>{item.element}</Suspense>
    );

    return item
  });
};

const Routes = () => useRoutes(getWrappedRoutes(routes))

export default Routes
