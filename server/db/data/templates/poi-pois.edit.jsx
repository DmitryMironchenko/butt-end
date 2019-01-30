<Fragment>
  <Form
     title="Edit POIS"
     titleField="title"
  >
  <Section title="Basic Info">
      <FormInput label="Name" accessor="title" validate="required" />
      <FormTextarea label="Full Description" accessor="id"/>
  </Section>
  <Section title="Contacts">
      <FormContacts accessor="contacts"/>
  </Section>
  <Section title="Select Boxes">
      <FormSelectBox
          label="Select Box"
          accessor="selectBoxData.selectBox"
          placeholder="choose value"
          options={["First option", "Second Option", "SECTOR PRISE!"]}
          nullOption
          validate="required"
      />
      <FormCountrySelectBox label="Country Select Box" accessor="selectBoxData.country" placeholder="Pick a country" nullOption/>
      <FormStateSelectBox label="State Select Box" accessor="selectBoxData.state" nullOption />
  </Section>
  <Section title="Location">
      <FormLocation accessor="geometry.coordinates" validate="required" />
  </Section>
  <Section title="Address">
      <FormAddress
          accessor="address"
          validate={{ addressLine1: "required", addressLine2: "required", city: "required", country: "required"}}
      />
  </Section>
  </Form>
</Fragment>