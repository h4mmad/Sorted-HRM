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
