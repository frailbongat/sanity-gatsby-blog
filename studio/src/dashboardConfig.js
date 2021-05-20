export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a5ed41446bc19ce19e11cc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jwm8suf6",
                  apiId: "0ed7f926-c250-44c0-b68f-b9a92f8814d0",
                },
                {
                  buildHookId: "60a5ed41095e9c9bd2925636",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cm1kpqmi",
                  apiId: "c19d22e2-30b7-4f72-9363-fa55a8aee8d7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/frailbongat/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cm1kpqmi.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
