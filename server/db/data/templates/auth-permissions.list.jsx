<Fragment>
   <h1>Permissions</h1>
   <ListTable
      resource="auth.permissions"
      columns={[
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Codename",
      accessor: "codename"
    }
  ]}
      requiredColumns={["id"]}
    />
</Fragment>