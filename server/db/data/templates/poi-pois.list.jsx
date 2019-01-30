<Fragment>
  <h1>Pois</h1>
  <ListTable
    filterable
    columns={[
      {
        Header: "Id",
        accessor: "id",
        filterable: false
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        id: "category",
        Header: "Category",
        sortable: false,
        accessor: "category.title",
      }
    ]}
    requiredColumns={["title"]}
    customFilters={[
      {
        customId: "title__istartswith",
        originalId: "title"
      }
    ]}
  />
</Fragment>