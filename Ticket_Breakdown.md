# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

 The below is the breakdown of the tickets for the above task with assumptions of the unknown details and the implementation details for each ticket. I did assume that this is using a graphql server and the database is postgresql.

### Ticket 1: Add a new column to the Agents table to store the custom id

- Acceptance Criteria:
  - The new column should be named `report_id`
  - The new column should be of type `string`
  - The new column should be nullable
  - The new column should have a default value of `null`

- Time/effort estimate: 30 Minutes

- Implementation details:
  - Add a new migration file to the `migrations` folder
  - Add a new column to the `Agents` table
  - Add a new column to the `Agent` model

### Ticket 2: Add a new field to the Agent model

- Acceptance Criteria:
  - The new field should be named `report_id`
  - The new field should be of type `string`
  - The new field should be nullable
  - The new field should have a default value of `null`

- Time/effort estimate: 30 Minutes

- Implementation details:
  - Add a new field to the `Agent` model
  - Add a new field to the `Agent` type in `schema.graphql`
  - Add a new field to the `Agent` type in `schema.json`

### Ticket 3: Add a new field to the Agent type in `schema.graphql`

- Acceptance Criteria:
  - The new field should be named `report_id`
  - The new field should be of type `String`
  - The new field should be nullable
  - The new field should have a default value of `null`

- Time/effort estimate: 30 Minutes

- Implementation details:
  - Add a new field to the `Agent` type in `schema.graphql`

### Ticket 4: Add a new field to the Agent type in `schema.json`

- Acceptance Criteria:
  - The new field should be named `report_id`
  - The new field should be of type `string`
  - The new field should be nullable
  - The new field should have a default value of `null`

- Time/effort estimate: 30 Minutes

- Implementation details:
  - Add a new field to the `Agent` type in `schema.json`