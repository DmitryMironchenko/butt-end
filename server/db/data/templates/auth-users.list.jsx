<Fragment>
  <h1>Users</h1>
  <ListTable
    resource="auth.users"
    columns={[
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Username",
      accessor: "username"
    },
    {
      Header: "first_name",
      accessor: "first_name"
    },
    {
      Header: "last_name",
      accessor: "last_name"
    }
  ]}
    requiredColumns={["username"]}
  />
</Fragment>