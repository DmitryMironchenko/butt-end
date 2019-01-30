<Fragment>
      <h1>Categories</h1>
      <ListTable
        resource="poi.categories"
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
          id: "parent",
          Header: "Parent",
          accessor: p => {
              if(p.parent){
                  return p.parent.title;
              }
              return null;
          },
          filterable: false,
        }
      ]}
      requiredColumns={["title"]}
      customFilters={[
          {
              customId: "category",
              originalId: "title"
          }
      ]}
      />
</Fragment>