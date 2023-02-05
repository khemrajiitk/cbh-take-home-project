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
1. Database migration:- We need to add new Table for manage Facilities and their custom Agent Id. This table includes Fields(id, FacilitieID, AgentID, FacilitieAgentID(custom Field)).<br /> 
Time:- It will take 1 day(for new person in system it may take 2 days)
2. Api changes for custom Agent ID:- we need to add new field(FacilitieAgentID) in shift creation logic/api. and store this data in the table.<br />
Writting test cases for the same.<br />
Time:- It will take 1 day
3. getShiftsByFacility Update:- We need to modify it so will also fetch new id(FacilitieAgentID) from database to generate report<br/>
Writting test cases for the same.<br />
Time:- It will take 1 day
4. generateReport Update:- We need to modify it so new id(FacilitieAgentID) is added in report<br/>
Writting test cases for the same.<br />
Time:- It will take 1 day(I am assuming very basic impact in the ui of report, for exact timing I need to know technology used in report generation and new report styles)
5. Add custom ID feature in booking portal:- We need to provide a option to add custom agent id during booking shift. This is front end ticket.<br/>
Writting test cases for the same.<br />
Time:- It will take 1 day

Note:- It also needs some time of QA team I am assuming I need to complete on dev tasks.



