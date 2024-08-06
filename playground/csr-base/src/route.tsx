export const routeConfigList = [
  {
    path: '/',
    async lazy () {
      const Layout = (await import(/* webpackChunkName: "component_layout" */ './component/Layout/index.tsx')).default;
      return {
        Component: Layout,
      };
    },
    children: [
      {
        index: true,
        async lazy() {
          const Home = (await import(/* webpackChunkName: "page_home" */ './page/home/index.tsx')).default;
          return {
            Component: Home,
          };
        },
      },
      {
        path: 'book',
        async lazy() {
          const Book = (await import(/* webpackChunkName: "page_book" */ './page/book/index.tsx')).default;
          return {
            Component: Book,
          };
        },
      },
      {
        path: 'policy',
        async lazy() {
          const Policy = (await import(/* webpackChunkName: "page_book" */ './page/policy/index.tsx')).default;
          return {
            Component: Policy,
          };
        },
      },
    ],
  },
];
