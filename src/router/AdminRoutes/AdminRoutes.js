export default [
  // Blog Routes
  {
    path: '/admin',
    name: 'AdminIndex',
    component: import('@/views/AdminViews/IndexAdminView.vue'),
  },
  {
    path: '/admin/blogs',
    name: 'AdminBlogs',
    component: import('@/views/AdminViews/BlogsAdminView.vue'),
  },
  {
    path: '/admin/blogs/:id',
    name: 'AdminGetBlog',
    component: import('@/views/AdminViews/GetBlogAdminView.vue'),
  },
  {
    path: '/admin/blogs/:id/edit',
    name: 'AdminGetBlogEdit',
    component: import('@/views/AdminViews/GetBlogsEditView.vue'),
  },
  {
    path: '/admin/blogs/add',
    name: 'AdminAdd',
    component: import('@/views/AdminViews/AddBlogsAdminView.vue'),
  },
  // Author Routes
  {
    path: '/admin/authors',
    name: 'AdminUpdate',
    component: import('@/views/AdminViews/IndexAdminView.vue'),
  },
  {
    path: '/admin/authors/:id',
    name: 'AdminUpdate',
    component: import('@/views/AdminViews/IndexAdminView.vue'),
  },
]
