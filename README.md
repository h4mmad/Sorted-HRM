## Employee model API response structure

This document will be used to structure code and ideas

Making a GET request to the api endpoint, if authorized will result
in an array, each element in the array will be a section object, each object will
contain the sectionID, sectionName and a fields array.

The fields property will contain an array of objects, each object will contain the, fieldID, label and type property

Sample response employee-model

```
[
  {
    "_id": "eb73a85e-0872-474f-98bf-9cc6eb0474a7",
    "sectionName": "Personal details",
    "sectionFields": [
      {
        "fieldName": "Name",
        "fieldId": "9f0ac870-1f8e-4738-ac96-7d87b8b7442d",
        "fieldType": "text"
      },
      {
        "fieldName": "Name",
        "fieldId": "9f0ac870-1f8e-4738-ac96-7d87b8b7442d",
        "fieldType": "text"
      },
      {
        "fieldName": "Name",
        "fieldId": "9f0ac870-1f8e-4738-ac96-7d87b8b7442d",
        "fieldType": "text"
      },
    ]
  },
]


```

There will be a basic schema of an employee, however if the HR representative wants to add additional data,
they may.
In the add employee page, the basic form data will be shown, if there are additional fields, then the data will
be fetched from the add additional data.

Employee basic model

```javascript

[{
    employeeId: ""
    imageUrl ? : ""

    personalDetails: {
        name: ""
        dateOfBirth: ""
        nationality: ""
    }

    contactDetails: {
        phoneNumber: ""
        personalEmail: ""
        workEmail ? : ""
    }

    idDetails: {
        iqamaNumber: ""
        iqamaExpiry: ""
        iqamaStatus: "expired | active"
        passportNumber ? : ""
        passportExpiry ? : ""
    }

    jobDetails: {
        designation: ""
        stream: ""
        department: ""
        remarks: ""
        dateOfJoining: ""
        workStatus: "inactive | active"
        sponsoredBy: ""
    }

    qualificationDetails: {
        qualification: ""
        university: ""
    }
}]

```

Add section form returns the following object

```javascript
{
  sectionName: "Personal";
}
```

Add field form returns the following object

```javascript
{fieldName: 'Name', fieldType: 'text'}


```

ID generation will occur server side

---

- admin builds employee model
- adds sections, where each section has a sectionId
- adds fields, each field has an id, name, type, required checkbox

- allow admin to add a selection field
- selection field has an id
- if field type is selected as dropdown, then show the drop down
- can select only one value

possible json structure for the selection field
possible use of state or reducer

```javascript

{
  fieldName: "Stream",
  fieldId: "as3fev2cs",
  fieldType: "selection",
  required: true,
  choices: ["admin", "primary", "teacher"]
}

```

To validate the expiry date:

1. check if the expiry date is in the future
2. if the user enters a past date as expiry do not accept, send error message as the iqama has expired

- Iqama status and Passport status is checked at the server, when a request is made, storing the status may show old values, the status is checked at request time, by checking the expiry date.

---

If you're encountering an error message in React Hook Form (RHF) even though you've set a default value for an input, there are a few common issues that could be causing this problem. Let's explore some possible reasons and their solutions:

Validation Rules:
If you've defined validation rules for the input field using register, RHF might be applying those validation rules to the default value as well. If the default value doesn't meet the validation criteria, an error will be shown. Make sure that the default value you're providing matches the validation rules you've set.

Default Value Mismatch:
Ensure that the default value you've set for the input matches the expected data type. For example, if you're using a numeric default value for an input that's supposed to accept strings, RHF might consider it invalid.

Validation Errors from Other Inputs:
Sometimes, validation errors might be coming from other inputs in the form, and you might think they are related to the input with the default value. Check all inputs in your form to see if any other inputs are triggering the error messages.

Form Submission without Interacting with the Input:
If you are triggering form submission without interacting with the input (e.g., directly calling handleSubmit), RHF might not have had a chance to validate the input yet. Try to interact with the input (e.g., type something and then delete it) before submitting the form.

Server-Side Validation Errors:
If you're fetching data from a server and populating the form with that data, any server-side validation errors might not be properly handled by RHF. Ensure that the data you're populating the form with is valid and doesn't contain any errors.

Incorrect Usage of defaultValue:
Double-check that you're using the defaultValue prop correctly in your input component. It should be used to set the initial value of an uncontrolled input, and it's not directly related to RHF's internal state management. If you're using Controller, use the defaultValue prop there, or if you're using register, you might need to use value instead of defaultValue.

Library Version and Updates:
Ensure that you are using a recent version of React Hook Form and that there are no breaking changes or bug fixes that could affect default values or error handling.

If none of these suggestions resolve the issue, it might help to provide more specific details about your code and the error message you're encountering. This way, I can offer more targeted assistance.

---
