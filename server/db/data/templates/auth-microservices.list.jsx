<Fragment>
   <h1>Microservices</h1>
   <ListTable
      resource="auth.microservices"
      noDelete
      columns={[
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Title",
      accessor: "title"
    },
    {
      Header: "Version",
      accessor: "version"
    }
  ]}
      requiredColumns={["id"]}
    />
</Fragment>