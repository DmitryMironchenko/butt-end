<Fragment>
   <h1>Permission Groups</h1>
   <ListTable
      resource="auth.permission-groups"
      columns={[
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Title",
      accessor: "title"
    }
  ]}
      requiredColumns={["id"]}
    />
</Fragment>