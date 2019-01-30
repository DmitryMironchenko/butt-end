<Fragment>
   <h1>Accounts</h1>
   <ListTable
      resource="auth.accounts"
      columns={[
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Data context",
      accessor: "data_context.title"
    },
    {
      Header: "Account owner",
      accessor: "account_owner.username"
    }
  ]}
      requiredColumns={["id"]}
    />
</Fragment>