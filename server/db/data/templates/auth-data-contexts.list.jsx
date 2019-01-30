<Fragment>
   <h1>Data Contexts</h1>
   <ListTable
      resource="auth.data-contexts"
      columns={[
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Title",
      accessor: "title"
    },
    {
      Header: "Context level",
      accessor: "context_level"
    },
    {
      Header: "Path",
      accessor: "path"
    }
  ]}
      requiredColumns={["id"]}
    />
</Fragment>
