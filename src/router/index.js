import HyDiscover from '@/pages/discover'
import HyMine from '@/pages/mine'
import HyFriend from '@/pages/friend'


const routes = [
  // {
  //   path: 'user/*',
  //   element: <UserLayout />,
  //   children: [
  //     { path: '', element: <Navigate to="login" /> }, // Redirect
  //     {
  //       path: 'login',
  //       element: <Login />
  //     },
  //   ]
  // },
  {
    path: '/',
    element: <HyDiscover/>,
  },
  {
    path: '/mine',
    element: <HyMine/>,
  },
  {
    path: '/friend',
    element: <HyFriend/>,
  },
]

export default routes
